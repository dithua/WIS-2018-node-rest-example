'use strict';
var mongoose = require('mongoose');
var validator = require('validator');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Please specify username for user']
  },
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email'
    }
  },
  role: {
    type: String,
    enum: ['admin', 'moderator', 'tester'],
    required: false
  }
});

module.exports = mongoose.model('Users', UserSchema);
