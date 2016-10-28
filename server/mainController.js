module.exports = {
  
  hello: (req, res, next) => {
    req.something = 'x';
    res.write('hello');
    next();
  },

  goodbye: (req, res, next) => {
    res.write('goodbye');
    res.end();
  }
};