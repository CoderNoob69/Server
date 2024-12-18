const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    explanation: { type: String, required: true },
    status: { type: String, enum: ['ongoing', 'completed', 'pending'], required: true },
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project; 