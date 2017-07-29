angular.module('app').component('sessionDetail',{
  templateUrl: './sessionDetail.html',
  bindings: {
    session: '=',
    initialCollapsed: '@'
  },
  controller: function() {
  }
})
