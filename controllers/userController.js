const User = require('../models/user');

exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(404).json({ error: 'User not found' });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Fetch the number of users
exports.getUserCount = async (req, res) => {
    try {
        const count = await User.countDocuments();
        console.log(count);
        res.status(200).json({ userCount: count });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Fetch all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find(); // Retrieve all users from the database
        res.json(users); // Send the users as a response
    } catch (error) {
        res.status(500).json({ error: error.message }); // Handle any errors
    }
};