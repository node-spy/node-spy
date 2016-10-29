module.exports = {
  
  hello: (req, res, next) => {
    console.log('hello');
    next();
  },

  goodbye: (req, res, next) => {
    console.log('goodbye');
    next();
  },

  user: (req, res, next) => {
    let user = req.body;
    console.log(user);
    next();
  }

};
