angular.module('app').component('unreviewedTalk', {
  templateUrl: '/home/unreviewedTalk.html',
  bindings: {
    session: '=',
    voteYes: '&',
    voteNo: '&'
  },
  controller: function() {
    
    this.yes = function() {
      this.voteYes();
    }
    
    this.no = function() {
      this.voteNo();
    }
  }
})