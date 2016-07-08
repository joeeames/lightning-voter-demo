angular.module('app').service('auth', (function () {
    function Auth($q, $http, currentIdentity) {
        this.$q = $q;
        this.$http = $http;
        this.currentIdentity = currentIdentity;
    }
    Auth.prototype.login = function (credentials) {
        var _this = this;
        var dfd = this.$q.defer();
        this.$http.post('/api/login', credentials).then(function (response) {
            _this.currentIdentity.setUser(response.data.user);
            dfd.resolve();
        }, function (response) {
            dfd.reject("Invalid Credentials");
        });
        return dfd.promise;
    };
    Auth.prototype.logout = function () {
        var _this = this;
        var dfd = this.$q.defer();
        this.$http.post('/api/logout').then(function (response) {
            _this.currentIdentity.clearUser();
            dfd.resolve();
        }, function (response) {
            dfd.reject("Error Logging Out");
        });
        return dfd.promise;
    };
    Auth.prototype.waitForAuth = function () {
        var _this = this;
        var dfd = this.$q.defer();
        this.$http.get('/api/currentIdentity').then(function (response) {
            if (!!response.data) {
                _this.currentIdentity.setUser(response.data);
            }
            dfd.resolve(_this.currentIdentity);
        });
        return dfd.promise;
    };
    Auth.prototype.requireLogin = function () {
        var _this = this;
        return this.waitForAuth().then(function () {
            if (_this.currentIdentity.authenticated()) {
                return true;
            }
            else {
                return _this.$q.reject('AUTH_REQUIRED');
            }
        });
    };
    Auth.prototype.requireAdmin = function () {
        var _this = this;
        return this.waitForAuth().then(function () {
            if (_this.currentIdentity.authenticated() && _this.currentIdentity.currentUser.isAdmin) {
                return true;
            }
            else {
                return _this.$q.reject('AUTH_REQUIRED');
            }
        });
    };
    return Auth;
}()));
//# sourceMappingURL=auth.js.map