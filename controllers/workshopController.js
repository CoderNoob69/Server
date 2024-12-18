const { Workshop } = require('../models/workshop/workshops.workshop'); // Import Workshop model

// Fetch all workshops
const getAllWorkshops = async (req, res) => {
    try {
        const workshops = await Workshop.find(); // Fetch all workshops from the database
        res.status(200).json(workshops);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Fetch the number of workshops
const getWorkshopCount = async (req, res) => {
    try {
        const count = await Workshop.countDocuments();
        // console.log("count", count);
        res.status(200).json({ workshopCount: count });
    } catch (error) {
        console.log(error);
        
        res.status(500).json({ message: error.message });
    }
};


module.exports = { getAllWorkshops, getWorkshopCount }
