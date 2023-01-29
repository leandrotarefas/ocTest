var axios = require('axios');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var prociarRouter = require('./routes/procriar');
var callbackRouter = require('./routes/callback');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/callback', callbackRouter);
app.use('/procriar', prociarRouter);


console.log("Servidor [PARENT] ativo!");

module.exports = app;


