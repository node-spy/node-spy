'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const main = require('./mainController');
const nodeSpy = require('../lib/node-spy');

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());

app.get('/', main.hello, main.goodbye);
app.post('/another', nodeSpy.log, main.user, nodeSpy.log, main.hello, nodeSpy.log, main.goodbye, nodeSpy.reveal);


app.listen(3000, (err) => {
  if (err) console.error(err);
  else console.log('Connected to port 3000');
});

module.exports = app;
