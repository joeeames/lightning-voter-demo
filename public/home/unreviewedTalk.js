angular.module('app').directive('unreviewedTalk', function() {
  return {
    templateUrl: '/home/unreviewedTalk.html',
    scope: {
      session: '=',
      voteYes: '&',
      voteNo: '&'
    },
    // controllerAs: 'vm',
    // bindToController: true,
    controller: function($scope) {
      
      $scope.yes = function() {
        this.voteYes();
      }
      
      $scope.no = function() {
        this.voteNo();
      }
    }
  }
})