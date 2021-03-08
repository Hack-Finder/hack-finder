const router = require('express').Router();
const { uploader } = require('../cloudinary.config');
const eventController = require('../controllers/eventController');

router.get('/', eventController.getAllEvents);
router.post('/', uploader.single('banner'), eventController.createEvent);
router.get('/:id', eventController.getEventDetails);
router.patch('/:id', uploader.single('banner'), eventController.updateEvent);
router.delete('/:id', eventController.deleteEvent);
module.exports = router;
