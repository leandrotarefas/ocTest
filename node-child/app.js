var axios = require('axios');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var greetingRouter = require('./routes/greeting');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/greeting', greetingRouter);


async function mandarUmSinal() {    

    const PARENT_URL = process.env.PARENT_URL;

    if(!PARENT_URL){
        console.log("Url de callback invalida!");
        return;
    }

    console.log("=> enviando sinal que nasceu!");
    let payload = { msg: 'Fala ae mano, eu nasci!' };
    let res = await axios.post(`http://${PARENT_URL}/callback`, payload);
    let data = res.data;
    console.log("Resposta do callback: ",  data);
}

module.exports = app;

mandarUmSinal();