const express = require('express');
const {
    registerAdmin,
    loginAdmin,
    getAdminProfile,
} = require('../controllers/adminController');
const { dashboardStats } = require('../controllers/dashBoardControllers');

const router = express.Router();

router.post('/register', registerAdmin);
router.post('/login', loginAdmin);
router.get('/profile', getAdminProfile);
router.use('/stats', dashboardStats);

module.exports = router; 