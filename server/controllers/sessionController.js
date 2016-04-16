var sessions = require('../database/sessions'),
  getNextId = require('./getNextId');

var nextId = getNextId(sessions);

exports.getSessions = function(req, res) {
  res.send(sessions);
}

exports.getSessionsByUser = function(req, res) {
  res.send(sessions.filter(session => session.userId === parseInt(req.params.id)))
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

exports.incrementVote = function(req, res) {
  
  var sessionId = parseInt(req.params.sessionId)

  var session = sessions.find(session => session.id === sessionId);
  if(session) {
    session.voteCount++;
    res.status(200);
  } else {
    res.status(500)
  }
  res.end();
}

