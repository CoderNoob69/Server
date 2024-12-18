const jwt = require('jsonwebtoken');
const Admin = require('../models/admin');

// Middleware to authenticate admin using JWT
const authenticate = async (req, res, next) => {
    console.log(req);
    
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.adminId = decoded.id; // Assuming the token contains the admin ID
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = { authenticate }; 