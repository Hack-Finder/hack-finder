const Event = require('../models/Event')

exports.getAllEvents = (req, res, next) => {
  Event.find()
  .then(events => {
    res.json(events)
  })
  .catch(err => {
    next(err)
  })
  // res.json({ feedback: 'getAllEvents' });
};

exports.getEventDetails = (req, res, next) => {
  res.json({ feedback: 'getEventDetails' });
};

exports.createEvent = (req, res, next) => {
  res.json({ feedback: 'createEvent' });
};

exports.updateEvent = (req, res, next) => {
  res.json({ feedback: 'updateEvent' });
};

exports.deleteEvent = (req, res, next) => {
  res.json({ feedback: 'deleteEvent' });
};
