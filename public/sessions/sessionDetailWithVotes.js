angular.module('app').directive('sessionDetailWithVotes', function() {
  return {
    templateUrl: '/sessions/sessionDetailWithVotes.html',
    scope: {
      session: '=',
      initialCollapsed: '@'
    },
    bindToController: true,
    controllerAs: 'vm',
    controller: function() {
    }
  }
})
