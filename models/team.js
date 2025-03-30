const mongoose = require('mongoose');
const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  designation: { type: String, required: true },
  branch: { type: String, required: true },
  socialHandles: {
    insta: { type: String },  // not necessary so required: true is not used
    linkedIn: { type: String }  // not necessary so required: true is not used
  },
  domain: { type: String, required: true },
  year: { type: String, required: true }
});

module.exports = mongoose.model('Team', teamSchema);
