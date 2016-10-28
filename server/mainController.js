module.exports = {
  
  hello: (req, res, next) => {
    console.log('hello');
    next();
  },

  goodbye: (req, res, next) => {
    console.log('goodbye');
    res.end();
  }
};
