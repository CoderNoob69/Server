const express = require('express');
const {
    getAllEvents,
} = require('../controllers/adminController');

const router = express.Router();

// New routes for events, workshops, and projects
router.get('/events', getAllEvents); // Fetch all events
router.get('/event-count', getEventCount);

module.exports = router; 