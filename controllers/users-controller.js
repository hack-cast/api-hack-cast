// users controller

// wahib API
// zuhri FB login

const ObjectId    = require('mongodb').ObjectId;
const User        = require('../models/user');
const bcrypt      = require('bcryptjs');
const salt        = bcrypt.genSaltSync(10);
const jwt         = require('jsonwebtoken');

class UsersController{

  // login
  static login(req, res){

  }

  static deleteUser(req, res){

  }

  static findAllUser(req, res){

  }

  static findUserById(req, res){

  }

}

module.exports = UsersController