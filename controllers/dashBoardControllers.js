const User = require('../models/user');
const Event = require('../models/event');
const Post = require('../models/post');
const Project = require('../models/project');
const Workshop = require('../models/workshop/workshops.workshop');

const dashboardStats = async (req, res) => {
    try {
        const userCount = await User.countDocuments();
        const eventCount = await Event.countDocuments();
        const blogCount = await Post.countDocuments();
        const projectCount = await Project.countDocuments();
        const workshopCount = await Workshop.countDocuments();

        res.status(200).json({
            users: userCount,
            events: eventCount,
            blogs: blogCount,
            projects: projectCount,
            workshops: workshopCount
        });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

module.exports = {
    dashboardStats
};