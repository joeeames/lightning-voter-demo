var auth = require('./auth'),
  sessions = require('./controllers/sessionController'),
  users = require('./controllers/userController');

var fs = require('fs');


module.exports = function(app) {

  app.post('/api/login', auth.authenticate);
  app.get('/api/currentIdentity', auth.getCurrentIdentity);
  app.get('/api/sessions', sessions.getSessions);
  app.get('/api/sessions/user/:id', sessions.getSessionsByUser);
  app.post('/api/sessions', sessions.createSession);
  app.put('/api/users/:id', users.updateUser);
  app.get('/api/users/:id/randomUnreviewedSession', users.getRandomUnreviewedSession);
  app.post('/api/users/:id/reviewSession/:sessionId', users.setReviewedSession);
  app.put('/api/sessions/:sessionId/incrementVote', sessions.incrementVote);
  app.get('/api/users/:id/unreviewedSessionCount', users.getUnreviewedSessionCount);
  app.post('/api/users/', users.createUser);
  app.get('/api/users/', users.getUsers);
  
  app.post('/api/logout', function(req, res) {
    req.logout();
    res.end();
  });

  app.get('*', function(req, res) {
    res.sendStatus(404);
  });
}