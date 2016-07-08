angular.module('app').service('users', (function () {
    function Users($http, $q) {
        this.$http = $http;
        this.$q = $q;
    }
    Users.prototype.createNewUser = function (newUser) {
        return this.$http.post('/api/users', newUser);
    };
    Users.prototype.getAllUsers = function () {
        var dfd = this.$q.defer();
        this.$http.get('/api/users').then(function (response) {
            dfd.resolve(response.data);
        });
        return dfd.promise;
    };
    return Users;
}()));
//# sourceMappingURL=users.js.map