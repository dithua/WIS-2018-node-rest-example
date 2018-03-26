'use strict';


var mongoose = require('mongoose'),
  Post = mongoose.model('Posts');

exports.all = function(req, res) {
  Post.find({}, function(err, post) {
    if (err)
      res.send(err);
    res.json(post);
  });
};


exports.new = function(req, res) {
  var new_post = new Post(req.body);

  new_post.save(function(err, post) {
    if (err)
      res.send(err);
    res.json(post);
  });
};


exports.get = function(req, res) {
  Post.findById(req.params.postId, function(err, post) {
    if (err)
      res.send(err);
    res.json(post);
  });
};


exports.update = function(req, res) {
  Post.findOneAndUpdate({_id: req.params.postId}, req.body, {new: true}, function(err, post) {
    if (err)
      res.send(err);
    res.json(post);
  });
};


exports.delete = function(req, res) {
  Post.remove({
    _id: req.params.postId
  }, function(err, post) {
    if (err)
      res.send(err);
    res.json({ message: 'Post successfully deleted' });
  });
};
