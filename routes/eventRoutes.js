const router = require('express').Router();
const { uploader } = require('../cloudinary.config');
const eventController = require('../controllers/eventController');

router.get('/', eventController.getAllEvents);
router.post('/', uploader.single('banner'), eventController.createEvent);
router.get('/:id', eventController.getEventDetails);
router.put('/:id', eventController.updateEvent);
router.delete('/:id', eventController.deleteEvent);
module.exports = router;
