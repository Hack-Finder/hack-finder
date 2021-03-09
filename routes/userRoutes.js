const router = require('express').Router();
const userController = require('../controllers/userController');
const { uploader } = require('../cloudinary.config.avatar');

router.get('/', userController.getAllUser);
router.post('/', userController.createUser);
router.get('/:id', userController.getUserDetails);
router.put('/:id', uploader.single('avatar'), userController.updateUser);
router.delete('/:id', userController.deleteUser);
// router.post('/login', userController.loginUser);

// router.post('/login', (req, res, next) => {
//   console.log(req.body);
// });

// router.post(
//   '/login',
//   passport.authenticate('local', {
//     successRedirect: '/',
//     failureRedirect: '/login',
//     passReqToCallback: true,
//   })
// );

module.exports = router;
