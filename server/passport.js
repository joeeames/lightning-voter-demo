var passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy,
  users = require('./database/users');
  
  
module.exports = function() {
  passport.use(new LocalStrategy(
    function(username, password, done) {
      var found = users.find(user => {
        return user.email.toLowerCase() === username;
      })
      if(found) {
        return done(null, found);  
      } else {
        return done(null, false);
      }
      
    }
  ));

  passport.serializeUser(function(user, done) {
    // console.log(5, user, done);
    if(user) {
      done(null, user.id);
    }
  });

  passport.deserializeUser(function(id, done) {
    // console.log(3);
    var found = users.find(user => {
      return user.id === id;
    })
    if(found) {
      return done(null, found);  
    } else {
      return done(null, false);
    }
  })

}