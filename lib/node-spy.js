module.exports = {
  log: (req, res, next) => {
    const log = {
      Method: req.method,
      URL: req.url,
      Body: req.body,
      Cookies: req.cookies
    }
    res.write(JSON.stringify(log));
    next();
  }
}
