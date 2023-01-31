var axios = require('axios');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var prociarRouter = require('./routes/procriar');
var callbackRouter = require('./routes/callback');
var checkRouter = require('./routes/check');
var removerRouter = require('./routes/remover');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/callback', callbackRouter);
app.use('/create', prociarRouter);
app.use('/check', checkRouter);
app.use('/remove', removerRouter);

console.log("Server [PARENT] activated!");

module.exports = app;
