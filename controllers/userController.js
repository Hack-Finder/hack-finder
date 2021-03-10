const bcrypt = require('bcrypt');
const User = require('../models/User');
const { cloudinary, uploader } = require('../cloudinary.config');

exports.getAllUser = (req, res, next) => {
  res.json({ feedback: 'getAllUser' });
};

exports.getUserDetails = (req, res, next) => {
  const id = req.params.id;

  User.findById(id)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      next(err);
    });
};

// Create User - Signup
exports.createUser = (req, res, next) => {
  const { username, email, password } = req.body;

  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(password, salt);

  User.create({ username, email, password: hash })
    .then((user) => {})
    .catch((err) => console.log(err));
};

exports.updateUser = (req, res, next) => {
  let formData = JSON.parse(req.body.data);

  if (req.file) {
    formData.avatar = {
      imgPath: req.file.path,
      publicId: req.file.filename,
    };
  }
  User.findByIdAndUpdate(req.params.id, formData, {
    new: true,
  })
    .then((user) => {
      return res.status(200).json({ user });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ message: 'Error while updating the user.' });
    });
};

exports.deleteUser = async (req, res, next) => {
  const deletedUser = await User.findByIdAndDelete(req.params.id);
  req.logout();
  if (deletedUser.avatar.publicId) {
    cloudinary.uploader.destroy(deletedUser.avatar.publicId, function (err, result) {});
  }

  res.status(200).json({ feedback: 'User deleted' });
};
