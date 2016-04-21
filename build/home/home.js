angular.module('app').component('home', {
    templateUrl: '/home/home.html',
    bindings: {
        userSessions: '='
    },
    controller: function (currentIdentity, sessions, toastr, unreviewedSessionCount) {
        this.currentUser = currentIdentity.currentUser;
        this.setNextSessionToReview = function () {
            var _this = this;
            sessions.getNextUnreviewedSession(currentIdentity.currentUser.id)
                .then(function (response) {
                _this.currentSessionToReview = response.data;
            });
        };
        this.setNextSessionToReview();
        this.voteYes = function () {
            sessions.incrementVote(this.currentSessionToReview.id)
                .then(function () {
                return sessions.addReviewedSession(this.currentUser.id, this.currentSessionToReview.id);
            }.bind(this))
                .then(function () {
                this.setNextSessionToReview();
                // pull updated value
                unreviewedSessionCount.updateUnreviewedSessionCount();
            }.bind(this));
        };
        this.voteNo = function () {
            sessions.addReviewedSession(this.currentUser.id, this.currentSessionToReview.id)
                .then(function () {
                this.setNextSessionToReview();
                // pull updated value
                unreviewedSessionCount.updateUnreviewedSessionCount();
            }.bind(this));
        };
    }
});
//# sourceMappingURL=home.js.map