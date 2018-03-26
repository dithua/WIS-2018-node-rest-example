'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PostSchema = new Schema({
  title: {
    type: String,
    required: 'Kindly enter the title of the post'
  },
  body: {
    type: String,
    required: 'Kindly enter the body of the post'
  },
});

module.exports = mongoose.model('Posts', PostSchema);
