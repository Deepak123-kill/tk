const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = async (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // 🔥 THIS IS CRUCIAL: fetch the full user document
    const user = await User.findById(decoded.id).select('_id name role');
    if (!user) return res.status(404).json({ message: 'User not found.' });

    req.user = user; // now req.user.id and req.user.name exist
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid token.' });
  }
};
