const Event = require('../models/Event');
const { cloudinary, uploader } = require('../cloudinary.config');

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
  const id = req.params.id;

  Event.findById(id)
    .then((event) => {
      res.json(event);
    })
    .catch((err) => {
      next(err);
    });
};

exports.getEventsByCreator = (req, res, next) => {
  const creatorId = req.params.id;
  Event.find({ creator: creatorId })
    .then((events) => {
      res.json(events);
    })
    .catch((err) => {
      next(err);
    });
};

// res.json({ feedback: 'getEventDetails' });
// exports.getEventDetails = async (req, res, next) => {
//   try {
//     const event = await Event.findById(req.params.id);
//     if (!event) res.status(400).json({ message: 'Event not found.' });

//     res.status(200).json(event);
//   } catch (err) {
//     res.status(500).json({ message: 'Server Error' });
//   }
// };

exports.createEvent = (req, res, next) => {
  let event = JSON.parse(req.body.data);

  if (req.file) {
    console.log('file uploaded');
    event.banner = {
      imgPath: req.file.path,
      publicId: req.file.filename,
    };
  }

  Event.create(event)
    .then(() => {
      return res.status(200).json({ success: 'Created event.' });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ message: 'Error while creating the event.' });
    });
};

exports.updateEvent = (req, res, next) => {
  let formData = JSON.parse(req.body.data);

  if (req.file) {
    formData.banner = {
      imgPath: req.file.path,
      publicId: req.file.filename,
    };
  }
  Event.findByIdAndUpdate(req.params.id, formData)
    .then(() => {
      return res.status(200).json({ success: 'Event updated.' });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ message: 'Error while updating the event.' });
    });
};

exports.deleteEvent = (req, res, next) => {
  const eventId = req.params.id;

  Event.findByIdAndDelete(eventId)
    .then((event) => {
      if (event.banner.publicId) {
        cloudinary.uploader.destroy(event.publicId, function (err, result) {});
      }

      res.status(200).json({ feedback: 'Event deleted' });
    })
    .catch((err) => {
      next(err);
    });
};

exports.searchEvent = (req, res, next) => {
  res.json({ feedback: 'getEventDetails' });
};
