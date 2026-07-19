require('dotenv').config();

const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const { initDb } = require('./db');

const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart');
const orderRoutes = require('./routes/orders');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
const ALLOWED_ORIGIN = process.env.FRONTEND_URL || '*';
app.use(cors({
  origin: ALLOWED_ORIGIN === '*' ? true : ALLOWED_ORIGIN,
  credentials: true,
}));

// Serve static frontend
const FRONTEND_DIR = path.join(__dirname, '..');
app.use(express.static(FRONTEND_DIR));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);

app.use('/api', (req, res) => {
  res.status(404).json({ error: `API route '${req.method} ${req.path}' not found.` });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(FRONTEND_DIR, 'index.html'));
});

app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error.' });
});

// Initialize DB then start server
initDb().then(() => {
  app.listen(PORT, () => {
    console.log('');
    console.log('  Amazon Clone Backend is running!');
    console.log('  ─────────────────────────────────────');
    console.log(`  Frontend:  https://amazonclone2-3-xa6s.onrender.com`);
    console.log(`  API base: https://amazonclone2-5.onrender.com/api`);
    console.log('');
  });
}).catch(err => {
  console.error('Failed to initialize database:', err);
  process.exit(1);
});
