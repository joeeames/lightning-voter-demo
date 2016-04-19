angular.module('app').directive('unreviewedTalk', function() {
  return {
    templateUrl: '/home/unreviewedTalk.html',
    scope: {
      session: '=',
      voteYes: '&',
      voteNo: '&'
    },
    controllerAs: '$ctrl',
    bindToController: true,
    controller: function() {
      
      this.yes = function() {
        this.voteYes();
      }
      
      this.no = function() {
        this.voteNo();
      }
    }
  }
})