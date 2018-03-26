'use strict';
module.exports = function(app) {
  var posts = require('../controllers/postsController');

  // post Routes
  app.route('/posts')
    .get(posts.all)
    .post(posts.new);

  app.route('/posts/:postId')
    .get(posts.get)
    .put(posts.update)
    .delete(posts.delete);
};
