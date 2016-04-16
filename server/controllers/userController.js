
var users = require('../database/users'),
  reviewedSessions = require('../database/reviewedSessions'),
  sessions = require('../database/sessions'),
  getNextId = require('./getNextId');

var nextId = getNextId(users);


exports.updateUser = function(req, res) {
  var updatedUser = req.body;
  
  var foundUser = users.find(user => user.id === parseInt(req.params.id));
  if(foundUser) {
    foundUser.firstName = updatedUser.firstName;
    foundUser.lastName = updatedUser.lastName;
    foundUser.password = updatedUser.password;
  }

  res.send(foundUser);
  res.end();
}

exports.createSession = function(req, res) {
  var newSession = req.body;
  newSession.id = nextId;
  newSession.voteCount = 0;
  nextId++;
  sessions.push(newSession);

  res.send(newSession);
  res.end();
}

exports.getRandomUnreviewedSession = function(req, res) {
  var userReviewedSessions = reviewedSessionsForUser(req.user.id)
  
  var unreviewedSessions = sessions.filter(session => {
    var reviewedSess = userReviewedSessions.find(revSession => revSession.id === session.id);
    return !(reviewedSess || session.userId === req.user.id) 
  })
  
  res.send(unreviewedSessions[Math.floor(Math.random() * unreviewedSessions.length)]);
  
}

exports.setReviewedSession = function(req, res) {
  var userReviewedSessions = reviewedSessionsForUser(req.user.id);
  
  var found = userReviewedSessions.find(revSess => revSess.id === parseInt(req.params.sessionId))
  if(!found) {
    userReviewedSessions.push({id: parseInt(req.params.sessionId)});
  }
  res.status(200).end();
}

exports.getUnreviewedSessionCount = function(req, res) {
  var userId = parseInt(req.user.id);
  var userReviewedSessions = reviewedSessionsForUser(userId);
  
  var unreviewedSessions = sessions.filter(session => {
    var isReviewed = userReviewedSessions
      .find(revSess => revSess.id === session.id );
      
    return session.userId !== userId && !isReviewed;
  })
  res.status(200).send({count: unreviewedSessions.length});
}

exports.createUser = function(req, res) {
  var newUser = req.body;
  newUser.id = nextId;
  nextId++;
  users.push(newUser);
  
  reviewedSessions.push({userId: newUser.id, sessions: []})
  

  res.send(newUser);
  res.end(); 
}

exports.getUsers = function(req, res) {
  res.send(users);
  res.end();
}

function reviewedSessionsForUser(userId) {
  return reviewedSessions.find(item => item.userId === userId).sessions  
}