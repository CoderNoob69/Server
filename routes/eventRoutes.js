const express = require('express');
const {
    getAllEvents,
    getEventCount,
    createEvent,
    deleteEvent
} = require('../controllers/eventsController');

const router = express.Router();

// New routes for events, workshops, and projects
router.get('/event-count', getEventCount);
router.get('/', getAllEvents); // Fetch all events
router.post('/', createEvent); // Fetch all events
router.delete('/:id', deleteEvent); // Fetch all events

module.exports = router; 