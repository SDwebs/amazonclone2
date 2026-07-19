const express = require('express');
const { db } = require('../db');

const router = express.Router();

function parseProduct(row) {
  if (!row) return null;
  return {
    id: row.id,
    title: row.title,
    category: row.category,
    rating: row.rating,
    reviews: row.reviews,
    priceMajor: row.price_major,
    priceMinor: row.price_minor,
    image: row.image,
    bullets: JSON.parse(row.bullets_json)
  };
}

const categoryMap = {
  electronics: ['Electronics & Audio', 'Computer Accessories', 'Computer Displays', 'Photography & Video', 'Portable Audio', 'Smart Tech & Wearables'],
  fashion: ['Fashion & Apparel', 'Fashion Accessories', 'Shoes & Footwear', 'Athletic Wear'],
  books: ['Books'],
  home: ['Smart Home & Electronics', 'Smart Home Security', 'Smart Home Accessories', 'Smart Lighting'],
};

// GET /api/products
router.get('/', async (req, res) => {
  const { q, category } = req.query;
  let sql = 'SELECT * FROM products WHERE 1=1';
  const params = [];

  if (q && q.trim()) {
    sql += ' AND (title LIKE ? OR category LIKE ?)';
    const term = `%${q.trim()}%`;
    params.push(term, term);
  }

  if (category && category !== 'all' && categoryMap[category] && categoryMap[category].length > 0) {
    const cats = categoryMap[category];
    sql += ` AND category IN (${cats.map(() => '?').join(', ')})`;
    params.push(...cats);
  }

  sql += ' ORDER BY rowid ASC';

  const rows = await db.allAsync(sql, params);
  return res.json({ products: rows.map(parseProduct), total: rows.length });
});

// GET /api/products/:id
router.get('/:id', async (req, res) => {
  const row = await db.getAsync('SELECT * FROM products WHERE id = ?', [req.params.id]);
  if (!row) return res.status(404).json({ error: `Product '${req.params.id}' not found.` });
  return res.json({ product: parseProduct(row) });
});

module.exports = router;
