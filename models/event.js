const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    category: { type: String, required: true},
    description: { type: String },
    eventType: { type: String, required: true, enum: ["online", "offline"] },
    imageUrl: { type: String, required: false },
    venue: { type: String },
    capacity: {type: Number},
    registrationLink: {type: String}
});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;