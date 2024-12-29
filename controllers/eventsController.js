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

// Create a new event
const createEvent = async (req, res) => {
    const { title, category, banner, date, time, type, venue } = req.body; // Destructure event data from request body

    console.log(req.body)

    const newEvent = new Event({
        title,
        imageUrl: banner,
        date,
        time,
        mode:type,
        venue,
    });

    try {
        const savedEvent = await newEvent.save(); // Save the new event to the database
        res.status(201).json(savedEvent); // Respond with the created event
    } catch (error) {
        res.status(500).json({ message: error.message }); // Handle errors
    }
};

// Update an existing event
const updateEvent = async (req, res) => {
    const { id } = req.params; // Get event ID from request parameters
    const updates = req.body; // Get updated data from request body

    try {
        const updatedEvent = await Event.findByIdAndUpdate(id, updates, { new: true }); // Update the event and return the new version
        if (!updatedEvent) {
            return res.status(404).json({ message: "Event not found" }); // Handle case where event does not exist
        }
        res.status(200).json(updatedEvent); // Respond with the updated event
    } catch (error) {
        res.status(500).json({ message: error.message }); // Handle errors
    }
};

// Delete an event
const deleteEvent = async (req, res) => {
    const { id } = req.params; // Get event ID from request parameters

    try {
        const deletedEvent = await Event.findByIdAndDelete(id); // Delete the event
        if (!deletedEvent) {
            return res.status(404).json({ message: "Event not found" }); // Handle case where event does not exist
        }
        res.status(204).send(); // Respond with no content status
    } catch (error) {
        res.status(500).json({ message: error.message }); // Handle errors
    }
};

// Export the new functions
module.exports = {
    getAllEvents,
    getEventCount,
    createEvent,
    updateEvent,
    deleteEvent,
}; 