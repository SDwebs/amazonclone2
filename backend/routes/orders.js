const express = require('express');
const { db } = require('../db');
const { requireAuth } = require('../middleware/auth');

const router = express.Router();
router.use(requireAuth);

// POST /api/orders
router.post('/', async (req, res) => {
  const userId = req.user.id;

  const cartItems = await db.allAsync(`
    SELECT ci.product_id, ci.quantity,
           p.title, p.image, p.price_major, p.price_minor
    FROM cart_items ci
    JOIN products p ON p.id = ci.product_id
    WHERE ci.user_id = ?
  `, [userId]);

  if (cartItems.length === 0) return res.status(400).json({ error: 'Your cart is empty.' });

  const orderItems = cartItems.map(item => ({
    productId: item.product_id,
    title: item.title,
    image: item.image,
    priceMajor: item.price_major,
    priceMinor: item.price_minor,
    quantity: item.quantity,
    price: parseFloat(`${item.price_major}.${item.price_minor}`)
  }));

  const subtotal = parseFloat(orderItems.reduce((s, i) => s + i.price * i.quantity, 0).toFixed(2));

  const result = await db.runAsync(
    'INSERT INTO orders (user_id, items_json, subtotal) VALUES (?, ?, ?)',
    [userId, JSON.stringify(orderItems), subtotal]
  );
  await db.runAsync('DELETE FROM cart_items WHERE user_id = ?', [userId]);

  return res.status(201).json({
    message: 'Order placed successfully!',
    order: { id: result.lastID, items: orderItems, subtotal, createdAt: new Date().toISOString() }
  });
});

// GET /api/orders
router.get('/', async (req, res) => {
  const rows = await db.allAsync(
    'SELECT id, items_json, subtotal, created_at FROM orders WHERE user_id = ? ORDER BY id DESC',
    [req.user.id]
  );
  const orders = rows.map(row => ({
    id: row.id,
    items: JSON.parse(row.items_json),
    subtotal: row.subtotal,
    createdAt: row.created_at
  }));
  return res.json({ orders, total: orders.length });
});

// GET /api/orders/:id
router.get('/:id', async (req, res) => {
  const row = await db.getAsync(
    'SELECT id, items_json, subtotal, created_at FROM orders WHERE id = ? AND user_id = ?',
    [req.params.id, req.user.id]
  );
  if (!row) return res.status(404).json({ error: 'Order not found.' });
  return res.json({
    order: { id: row.id, items: JSON.parse(row.items_json), subtotal: row.subtotal, createdAt: row.created_at }
  });
});

module.exports = router;
