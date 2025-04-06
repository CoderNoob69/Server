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

// Update team member details
exports.updateDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updatedMember = await Team.findByIdAndUpdate(id, updates, { new: true });

    if (!updatedMember) {
      return res.status(404).json({ message: "Team member not found" });
    }

    res.status(200).json({ message: "Team member updated successfully", member: updatedMember });
  } catch (error) {
    res.status(500).json({ error: "Error updating team member", details: error.message });
  }
};

// Delete a team member
exports.deleteTeamMember = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedMember = await Team.findByIdAndDelete(id);

    if (!deletedMember) {
      return res.status(404).json({ message: "Team member not found" });
    }

    res.status(200).json({ message: "Team member deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting team member", details: error.message });
  }
};