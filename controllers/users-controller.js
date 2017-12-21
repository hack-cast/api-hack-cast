// users controller

// wahib API
// zuhri FB login

const ObjectId    = require('mongodb').ObjectId;
const User        = require('../models/user');
const bcrypt      = require('bcryptjs');
const salt        = bcrypt.genSaltSync(10);
const jwt         = require('jsonwebtoken');

class UserController{

  // login
  static login(){

  }

  static deleteUser(){

  }

  static findAllUser(){

  }

  static findUserById(){

  }

}

module.exports = UserController