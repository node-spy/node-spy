const events = require('events');

const nodeSpy = {};

  nodeSpy.log = (req, res, next) => {
    function log() {
      const log = {
        Method: req.method,
        URL: req.url,
        Body: req.body,
        Cookies: req.cookies
      }
      console.log('hi');
      res.write(JSON.stringify(log));
    }
    let oldNext = next;
    next = function() {
      log();
      oldNext();
    }
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
      },
    }
    res.write(JSON.stringify(logExt));
    next();
  }

module.exports = nodeSpy;