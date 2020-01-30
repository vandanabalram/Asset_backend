var express = require('express');
var app = express();
var port = process.env.PORT || 3001;
var mongoose = require('mongoose');
var Tasks = require('./Model/Model');
var Tasks1 = require('./Model/DesktopModel');
var Tasks2 = require('./Model/LaptopModel');
var MisDesktop = require('./Model/MiscellaneousDesktopModel');
var MisLap = require('./Model/MisLapModel');


var cors = require('cors')
var bodyParser = require('body-parser');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Register', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

var routes = require('./Router/Router');
routes(app);


app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({
    message: message
  });
});

app.listen(port);


console.log('todo list RESTful API server started on: ' + port);

