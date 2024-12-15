const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Define the Admin schema
const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    }
});

// Hash the password before saving
adminSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

// Method to compare passwords
adminSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

// Create the Admin model
const Admin = mongoose.model('Admin', adminSchema);

// Function to create a default admin user
const createDefaultAdmin = async () => {
    const adminExists = await Admin.findOne({ username: 'admin' });
    if (!adminExists) {
        const defaultAdmin = new Admin({
            username: 'admin',
            password: 'admin123', // Use a secure password in production
            email: 'admin@example.com',
        });
        await defaultAdmin.save();
        console.log('Default admin user created');
    } else {
        console.log('Default admin user already exists');
    }
};

module.exports = { Admin, createDefaultAdmin };
