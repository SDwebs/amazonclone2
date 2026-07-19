const express = require('express');
const { db } = require('../db');
const { requireAuth } = require('../middleware/auth');

const router = express.Router();
router.use(requireAuth);

async function getCartWithDetails(userId) {
  const rows = await db.allAsync(`
    SELECT ci.product_id, ci.quantity,
           p.title, p.image, p.price_major, p.price_minor, p.category
    FROM cart_items ci
    JOIN products p ON p.id = ci.product_id
    WHERE ci.user_id = ?
    ORDER BY ci.id ASC
  `, [userId]);

  return rows.map(row => ({
    productId: row.product_id,
    quantity: row.quantity,
    title: row.title,
    image: row.image,
    priceMajor: row.price_major,
    priceMinor: row.price_minor,
    category: row.category,
    price: parseFloat(`${row.price_major}.${row.price_minor}`)
  }));
}

// GET /api/cart
router.get('/', async (req, res) => {
  const items = await getCartWithDetails(req.user.id);
  const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);
  const totalQty = items.reduce((s, i) => s + i.quantity, 0);
  return res.json({ items, subtotal: parseFloat(subtotal.toFixed(2)), totalQty });
});

// POST /api/cart
router.post('/', async (req, res) => {
  const { productId, quantity } = req.body;
  if (!productId) return res.status(400).json({ error: 'productId is required.' });
  const qty = parseInt(quantity, 10);
  if (isNaN(qty) || qty < 0) return res.status(400).json({ error: 'quantity must be a non-negative integer.' });

  const product = await db.getAsync('SELECT id FROM products WHERE id = ?', [productId]);
  if (!product) return res.status(404).json({ error: `Product '${productId}' not found.` });

  if (qty === 0) {
    await db.runAsync('DELETE FROM cart_items WHERE user_id = ? AND product_id = ?', [req.user.id, productId]);
  } else {
    await db.runAsync(
      'INSERT INTO cart_items (user_id, product_id, quantity) VALUES (?, ?, ?) ON CONFLICT(user_id, product_id) DO UPDATE SET quantity = excluded.quantity',
      [req.user.id, productId, qty]
    );
  }

  const items = await getCartWithDetails(req.user.id);
  const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);
  const totalQty = items.reduce((s, i) => s + i.quantity, 0);
  return res.json({ message: 'Cart updated.', items, subtotal: parseFloat(subtotal.toFixed(2)), totalQty });
});

// DELETE /api/cart/:productId
router.delete('/:productId', async (req, res) => {
  await db.runAsync('DELETE FROM cart_items WHERE user_id = ? AND product_id = ?', [req.user.id, req.params.productId]);
  const items = await getCartWithDetails(req.user.id);
  const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);
  const totalQty = items.reduce((s, i) => s + i.quantity, 0);
  return res.json({ message: 'Item removed.', items, subtotal: parseFloat(subtotal.toFixed(2)), totalQty });
});

// DELETE /api/cart
router.delete('/', async (req, res) => {
  await db.runAsync('DELETE FROM cart_items WHERE user_id = ?', [req.user.id]);
  return res.json({ message: 'Cart cleared.', items: [], subtotal: 0, totalQty: 0 });
});

module.exports = router;
