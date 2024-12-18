const express = require('express');
const {
    registerAdmin,
    loginAdmin,
    getAdminProfile,
} = require('../controllers/adminController');

const router = express.Router();

router.post('/register', registerAdmin);
router.post('/login', loginAdmin);
router.get('/profile', getAdminProfile);

module.exports = router; 