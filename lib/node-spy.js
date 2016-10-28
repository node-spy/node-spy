const nodeSpy = {};

  nodeSpy.log = (req, res, next) => {
    const log = {
      Method: req.method,
      URL: req.url,
      Body: req.body,
      Cookies: req.cookies
    }
    res.write(JSON.stringify(log));
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