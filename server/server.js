const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.header('content-type', 'text/html');
  res.end();
});

app.post('/dunno', (req, res) => {
  res.header('content-type', 'application/json');
  res.end(JSON.stringify(req.body));
});

app.listen(3000, (err) => {
  if (err) console.error(err);
  else console.log('Connected to port 3000');
});

module.exports = app;