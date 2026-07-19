const jwt = require('jsonwebtoken');

/**
 * Middleware: verify JWT from httpOnly cookie.
 * Attaches `req.user = { id, name, email }` on success.
 * Returns 401 if the token is missing or invalid.
 */
function requireAuth(req, res, next) {
  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).json({ error: 'Not authenticated. Please sign in.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: decoded.id, name: decoded.name, email: decoded.email };
    next();
  } catch (err) {
    res.clearCookie('token');
    return res.status(401).json({ error: 'Session expired. Please sign in again.' });
  }
}

/**
 * Middleware: optionally verify JWT.
 * Attaches `req.user` if a valid token is present, but does NOT block the request.
 */
function optionalAuth(req, res, next) {
  const token = req.cookies?.token;
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = { id: decoded.id, name: decoded.name, email: decoded.email };
    } catch {
      // Token invalid — just continue as guest
      req.user = null;
    }
  }
  next();
}

module.exports = { requireAuth, optionalAuth };
