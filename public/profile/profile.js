System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1;
    var profileComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            profileComponent = (function () {
                function profileComponent(currentIdentity, $location) {
                    this.currentIdentity = currentIdentity;
                    this.$location = $location;
                    this.profile = angular.copy(currentIdentity.currentUser);
                    this.currentIdentity = currentIdentity;
                }
                profileComponent.prototype.save = function () {
                    this.currentIdentity.updateUser(this.profile);
                    // toastr.success('Profile Saved!');
                };
                profileComponent.prototype.cancel = function () {
                    this.$location.path('/home');
                };
                profileComponent = __decorate([
                    core_1.Component({
                        selector: 'profile',
                        templateUrl: '/profile/profile.html'
                    }),
                    __param(0, core_1.Inject('currentIdentity')),
                    __param(1, core_1.Inject('currentIdentity')), 
                    __metadata('design:paramtypes', [Object, Object])
                ], profileComponent);
                return profileComponent;
            }());
            exports_1("profileComponent", profileComponent);
        }
    }
});
//# sourceMappingURL=profile.js.map