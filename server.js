var {mongoose} = require('./db/mongoose');


var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  post = require('./api/models/postsModel'), //created model loading here
  bodyParser = require('body-parser');


app.get('/', (req,res) => {
    res.send('Hello World!');
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/postsRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('Posts RESTful API server started on: ' + port);