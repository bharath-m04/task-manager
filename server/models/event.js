const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  participants: [{ type: String }],
});

module.exports = mongoose.model('Event', EventSchema);
