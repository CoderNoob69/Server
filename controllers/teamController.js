const Team = require('../models/team');

// Create a new team member
exports.createTeam = async (req, res) => {
  try {
    const { name, designation, branch, socialHandles, domain, year } = req.body;
    
    if (!name || !designation || !branch || !domain || !year) {
      return res.status(400).json({ message: "All fields are required" });
    }
    
    const newMember = new Team({ name, designation, branch, socialHandles, domain, year });
    await newMember.save();
    
    res.status(201).json({ message: "Team member added successfully", member: newMember });
  } catch (error) {
    res.status(500).json({ error: "Error creating team member", details: error.message });
  }
};

// Get all team members
exports.getAllMembers = async (req, res) => {
  try {
    const members = await Team.find();
    res.status(200).json(members);
  } catch (error) {
    res.status(500).json({ error: "Error fetching team members", details: error.message });
  }
};
