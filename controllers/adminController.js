const { Admin } = require('../models/admin');
const jwt = require('jsonwebtoken'); // Import JWT

// Register a new admin
const registerAdmin = async (req, res) => {
    const { username, password, email } = req.body;
    try {
        const newAdmin = new Admin({ username, password, email });
        await newAdmin.save();
        res.status(201).json({ message: 'Admin registered successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Login an admin
const loginAdmin = async (req, res) => {
    const { username, password } = req.body;
    try {
        const admin = await Admin.findOne({ username });
        if (!admin) {
            return res.status(401).json({ message: 'Invalid username' });
        }
        // Check the password
        const isMatch = await admin.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid password' });
        }
        // Generate a token
        const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' }); // Replace 'your_jwt_secret' with your actual secret
        res.status(200).json({ message: 'Login successful', adminId: admin._id, token }); // Include token in response
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get admin profile
const getAdminProfile = async (req, res) => {
    try {
        const admin = await Admin.findById(req.adminId).select('-password');
        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }
        res.status(200).json(admin);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Export the new functions
module.exports = {
    registerAdmin,
    loginAdmin,
    getAdminProfile,
}; 