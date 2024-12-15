const Event = require('../models/event'); // Import Event model]

// Fetch all events
const getAllEvents = async (req, res) => {
    try {
        const events = await Event.find(); // Fetch all events from the database
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Fetch the number of events
const getEventCount = async (req, res) => {
    try {
        const count = await Event.countDocuments();
        // console.log(count);
        
        res.status(200).json({ eventCount: count });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Export the new functions
module.exports = {
    getAllEvents,
    getEventCount
}; 