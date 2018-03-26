var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds<code>.mlab.com:<port>/<user>');

module.exports = {mongoose};
