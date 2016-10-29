const events = require('events');

const nodeSpy = {};

nodeSpy.cache = [];

nodeSpy.log = (req, res, next) => {
  const log = {
    Method: req.method,
    URL: req.url,
    Body: req.body,
    Cookies: req.cookies
  }
  nodeSpy.cache.push(log);
  next();
}

nodeSpy.logExt = (req, res, next) => {
  const logExt = {
    Method: req.method,
    URL: req.url,
    Body: req.body,
    Params: req.params,
    Cookies: req.cookies,
    Headers: {
      Host: req.headers.host,
      Connection: req.headers.connection,
      'Content-Type': req.headers['content-type'],
      'User-Agent': req.headers['user-agent'],
      Accept: req.headers.accept,
      'if-modified-since': req.headers['if-modified-since']
    }
  }
  nodeSpy.cache.push(logExt);
  next();
}

nodeSpy.reveal = (req, res, next) => {
  // send/render data polled from logging to nodeSpy page

  console.log(nodeSpy.cache);
  res.end();
}

module.exports = nodeSpy;