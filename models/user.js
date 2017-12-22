//mongo DB model for users
'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName    : String,
  email       : String,
  profPicUrl  : String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;