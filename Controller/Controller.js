const UserData = require('../Model/Model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var isAuth = require('../Middleware/isAuth');
var ObjectId = require('mongoose').Types.ObjectId;
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');

exports.get_a_data = function (req, res) {
  UserData.find({}, function (err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.read_a_task = function (req, res) {
  UserData.findById(req.params.taskId, function (err, task) {
    if (!err)
      res.json(task);
  });
};

exports.update_a_task = function (req, res) {
  UserData.findOneAndUpdate({ _id: req.params.taskId }, req.body, { new: true }, function (err, task) {
    if (!err)
      res.json(task);
  });
};

exports.delete_a_task = function (req, res) {
  UserData.remove({ _id: req.params.taskId }, function (err, task) {
    if (!err)
      res.json({ message: 'Task successfully deleted' });
  });
};

exports.GetUserById = function (req, res) {
  const User_ID = req.params.UserId;
  UserData.findById({ _id: User_ID })
    .then(user => {
      res.json(user);
    });
};

exports.signup = function (req, res) {
  const reg_email = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/;
  const reg_pwd = /^[a-zA-Z0-9@*#]{8,15}$/;
  if (!reg_pwd.test(req.body.password)) {
    res.send('password is invalid');
  }
  if (reg_email.test(req.body.email)) {
    UserData.find({ email: req.body.email }, function (err, data) {
      if (data != null && data != '') {
        res.send('User already exists');
      }
      else {
        var userData = new UserData(req.body);
        const pword = cryptr.encrypt(req.body.password);
        userData.password = pword;
        userData.save(function (err, data) {
          if (err)
            res.send(err.message);
          res.json('User Created Succesfully');
        })
      }
    });
  }
  else {
    res.send('Email is invalid');
  }
};

exports.changepassword = (req, res) => {
  const pword = cryptr.encrypt(req.body.password);
  req.body.password = pword;
  UserData.findOneAndUpdate({ email: req.body.email }, req.body, { new: true }, function (err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.userSignin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const role = req.body.role;
  let loadedUser;
  UserData.findOne({ email: email })
    .then(user => {
      if (!user) {
        const error = new Error('A user with this email could not be found.');
        error.statusCode = 401;
        throw error;
      }
      loadedUser = user;
      const pword = cryptr.decrypt(user.password);
      return (password === pword);
    })
    .then(isEqual => {
      if (!isEqual) {
        const error = new Error('wrong password.');
        error.statusCode = 401;
        throw error;
      }
      const token = jwt.sign(
        {
          email: loadedUser.email,
          userId: loadedUser._id.toString()
        }, 'secret')
      return res.status(200).json({ token: token, userId: loadedUser._id.toString(), Firstname: loadedUser.Firstname })
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
} 