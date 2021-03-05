const bcrypt = require('bcrypt');
const User = require('../models/User');
const passport = require('passport');

exports.getAllUser = (req, res, next) => {
  res.json({ feedback: 'getAllUser' });
};

exports.getUserDetails = (req, res, next) => {
  res.json({ feedback: 'getUserDetails' });
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

// exports.loginUser =
//   ('/login',
//   passport.authenticate('local', {
//     successRedirect: '/',
//     failureRedirect: '/login',
//     passReqToCallback: true,
//   }));

exports.updateUser = (req, res, next) => {
  res.json({ feedback: 'updateUser' });
};

exports.deleteUser = (req, res, next) => {
  res.json({ feedback: 'deleteUser' });
};
