const Project = require('../models/project'); // Import Project model

// Fetch all projects
const getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find(); // Fetch all projects from the database
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Fetch the number of projects
const getProjectCount = async (req, res) => {
    try {
        const count = await Project.countDocuments();
        // console.log(count);
        res.status(200).json({ projectCount: count });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



module.exports = { getAllProjects, getProjectCount }