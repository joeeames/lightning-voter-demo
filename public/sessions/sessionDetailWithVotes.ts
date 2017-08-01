angular.module('app').component('sessionDetailWithVotes', {
  templateUrl: './sessionDetailWithVotes.html',
  bindings: {
    session: '=',
    initialCollapsed: '@'
  },
  controller: function() {
  }
})
