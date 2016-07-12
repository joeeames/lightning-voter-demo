System.register(['@angular/core', '../common/talkDuration.pipe'], function(exports_1, context_1) {
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
    var core_1, talkDuration_pipe_1;
    var UnreviewedTalkComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (talkDuration_pipe_1_1) {
                talkDuration_pipe_1 = talkDuration_pipe_1_1;
            }],
        execute: function() {
            UnreviewedTalkComponent = (function () {
                function UnreviewedTalkComponent() {
                    this.voteYes = new core_1.EventEmitter();
                    this.voteNo = new core_1.EventEmitter();
                }
                UnreviewedTalkComponent.prototype.yes = function () {
                    this.voteYes.emit(null);
                };
                UnreviewedTalkComponent.prototype.no = function () {
                    this.voteNo.emit(null);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], UnreviewedTalkComponent.prototype, "session", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], UnreviewedTalkComponent.prototype, "voteYes", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], UnreviewedTalkComponent.prototype, "voteNo", void 0);
                UnreviewedTalkComponent = __decorate([
                    core_1.Component({
                        selector: 'unreviewed-talk',
                        templateUrl: '/home/unreviewedTalk.html',
                        pipes: [talkDuration_pipe_1.TalkDurationPipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], UnreviewedTalkComponent);
                return UnreviewedTalkComponent;
            }());
            exports_1("UnreviewedTalkComponent", UnreviewedTalkComponent);
        }
    }
});
//# sourceMappingURL=unreviewedTalk.js.map