const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const events = require('events');

const main = require('./mainController');
const nodeSpy = require('../lib/node-spy');

app.use(bodyParser.json());
app.use(cookieParser());
app.use(nodeSpy.log);

app.get('/', main.hello, main.goodbye);
app.get('/another', main.hello);

app.listen(3000, (err) => {
  if (err) console.error(err);
  else console.log('Connected to port 3000');
});

module.exports = app;