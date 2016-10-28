const nodeSpy = {};

  nodeSpy.log = (req, res, next) => {
    const log = {
      Method: req.method,
      URL: req.url,
      Body: req.body,
      Cookies: req.cookies
    }
    nodeSpy.statify(log);
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
    nodeSpy.statify(logExt);
    res.write(JSON.stringify(logExt));
    next();
  }
    
    nodeSpy.statify = (log) => {
      let JSONlog = JSON.stringify(log);
      return App.statifyLog(JSONlog)
  }

module.exports = nodeSpy;