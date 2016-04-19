angular.module('app').directive('detailPanel', function() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: '/components/detailPanel.html',
    scope: {
      title: '@',
      initialCollapsed: '@collapsed'
    },
    controllerAs: 'vm',
    bindToController: true,
    controller: function() {
      this.collapsed = (this.initialCollapsed === 'true');

      this.collapse = function() {
        this.collapsed = !this.collapsed;
      }
    }
  }
})
