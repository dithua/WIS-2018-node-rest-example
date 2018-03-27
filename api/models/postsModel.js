'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Please add a title for the post']
  },
  body: {
    type: String,
    required: [true, 'Post without a body is not a post']
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'Users'
  },
});

module.exports = mongoose.model('Posts', PostSchema);
