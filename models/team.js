const mongoose = require('mongoose');
const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  designation: { type: String, required: true },
  branch: { type: String, required: true },
  socialHandles: { 
    type: Object, 
    default: {}, 
    insta: { type: String },  
    linkedIn: { type: String }
  },
  domain: { type: String, required: true },
  year: { type: String, required: true }
});

module.exports = mongoose.model('Team', teamSchema);
