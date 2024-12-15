const express = require('express');
const {
    getAllEvents,
    getEventCount
} = require('../controllers/eventsController');

const router = express.Router();

// New routes for events, workshops, and projects
router.get('/', getAllEvents); // Fetch all events
router.get('/event-count', getEventCount);

module.exports = router; 