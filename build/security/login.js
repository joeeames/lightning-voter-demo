angular.module('app').component('login', {
    templateUrl: '/security/login.html',
    bindings: {},
    controller: (function () {
        function LoginCtrl($location, currentIdentity, auth, toastr) {
            this.$location = $location;
            this.auth = auth;
            this.toastr = toastr;
            if (currentIdentity.authenticated()) {
                $location.path('/home');
            }
        }
        LoginCtrl.prototype.login = function () {
            var _this = this;
            this.auth.login({
                username: this.email,
                password: "pass"
            }).then(function () {
                _this.$location.path('/home');
            }, function (err) {
                _this.toastr.error(err);
            });
        };
        return LoginCtrl;
    }())
});
//# sourceMappingURL=login.js.map