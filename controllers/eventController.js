const Event = require('../models/Event');

exports.getAllEvents = (req, res, next) => {
  Event.find()
    .then((events) => {
      res.json(events);
    })
    .catch((err) => {
      next(err);
    });
};

exports.getEventDetails = (req, res, next) => {
  res.json({ feedback: 'getEventDetails' });
};

exports.createEvent = (req, res, next) => {
  let event = JSON.parse(req.body.data);
  if (req.file) {
    event.banner = {
      imgPath: req.file.path,
      publicId: req.file.filename,
    };
  }
  Event.create(event)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => console.log(err));
};

exports.updateEvent = (req, res, next) => {
  res.json({ feedback: 'updateEvent' });
};

exports.deleteEvent = (req, res, next) => {
  res.json({ feedback: 'deleteEvent' });
};

exports.searchEvent = (req, res, next) => {
  res.json({ feedback: 'getEventDetails' });
};
