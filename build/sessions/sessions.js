angular.module('app').service('sessions', (function () {
    function Sessions($http, $q) {
        this.$http = $http;
        this.$q = $q;
    }
    Sessions.prototype.getSessionsByUser = function (userId) {
        var dfd = this.$q.defer();
        this.$http.get('/api/sessions/user/' + userId).then(function (response) {
            dfd.resolve(response.data);
        }, function () {
            dfd.reject();
        });
        return dfd.promise;
    };
    Sessions.prototype.getAllSessions = function () {
        var dfd = this.$q.defer();
        this.$http.get('/api/sessions').then(function (response) {
            dfd.resolve(response.data);
        }, function () {
            dfd.reject();
        });
        return dfd.promise;
    };
    Sessions.prototype.createNewSession = function (newSession) {
        return this.$http.post('/api/sessions', newSession);
    };
    Sessions.prototype.getNextUnreviewedSession = function (userId) {
        return this.$http.get("/api/users/" + userId + "/randomUnreviewedSession");
    };
    Sessions.prototype.addReviewedSession = function (userId, sessionId) {
        return this.$http.post('/api/users/' + userId + '/reviewSession/' + sessionId);
    };
    Sessions.prototype.incrementVote = function (sessionId) {
        return this.$http.put('/api/sessions/' + sessionId + '/incrementVote/');
    };
    Sessions.prototype.getUnreviewedCount = function (userId) {
        return this.$http.get('/api/users/' + userId + '/unreviewedSessionCount');
    };
    return Sessions;
}()));
//# sourceMappingURL=sessions.js.map