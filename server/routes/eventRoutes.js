const express = require('express');
const Event = require('../models/event');
const router = express.Router();

// Get all events
router.get('/', async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

// Create an event
router.post('/', async (req, res) => {
  const newEvent = new Event(req.body);
  await newEvent.save();
  res.status(201).json(newEvent);
});

module.exports = router;
