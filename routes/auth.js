const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { db } = require('../db');
const { requireAuth } = require('../middleware/auth');

const router = express.Router();

function issueToken(res, user) {
  const token = jwt.sign(
    { id: user.id, name: user.name, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
  );
  res.cookie('token', token, {
    httpOnly: true,
    sameSite: 'lax',
    maxAge: 7 * 24 * 60 * 60 * 1000
  });
}

// POST /api/auth/register
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) return res.status(400).json({ error: 'Name, email, and password are required.' });
  if (password.length < 6) return res.status(400).json({ error: 'Password must be at least 6 characters.' });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({ error: 'Please enter a valid email address.' });

  try {
    const existing = await db.getAsync('SELECT id FROM users WHERE email = ?', [email.toLowerCase()]);
    if (existing) return res.status(409).json({ error: 'An account with this email already exists.' });

    const passwordHash = bcrypt.hashSync(password, 12);
    const result = await db.runAsync(
      'INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)',
      [name.trim(), email.toLowerCase(), passwordHash]
    );
    const newUser = { id: result.lastID, name: name.trim(), email: email.toLowerCase() };
    issueToken(res, newUser);
    return res.status(201).json({ user: newUser, message: 'Account created successfully!' });
  } catch (err) {
    return res.status(500).json({ error: 'Registration failed. Please try again.' });
  }
});

// POST /api/auth/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Email and password are required.' });

  try {
    const user = await db.getAsync('SELECT * FROM users WHERE email = ?', [email.toLowerCase()]);
    if (!user) return res.status(401).json({ error: 'Invalid email or password.' });

    const match = bcrypt.compareSync(password, user.password_hash);
    if (!match) return res.status(401).json({ error: 'Invalid email or password.' });

    const safeUser = { id: user.id, name: user.name, email: user.email };
    issueToken(res, safeUser);
    return res.json({ user: safeUser, message: 'Signed in successfully!' });
  } catch (err) {
    return res.status(500).json({ error: 'Login failed. Please try again.' });
  }
});

// POST /api/auth/logout
router.post('/logout', (req, res) => {
  res.clearCookie('token');
  return res.json({ message: 'Signed out successfully.' });
});

// GET /api/auth/me
router.get('/me', requireAuth, async (req, res) => {
  const user = await db.getAsync('SELECT id, name, email, created_at FROM users WHERE id = ?', [req.user.id]);
  if (!user) return res.status(404).json({ error: 'User not found.' });
  return res.json({ user });
});

module.exports = router;
