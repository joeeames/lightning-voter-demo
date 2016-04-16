angular.module('app').directive('detailPanel', function() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: '/components/detailPanel.html',
    replace: true,
    scope: {
      title: '@',
      initialCollapsed: '@collapsed'
    },
    controller: function($scope) {
      $scope.collapsed = ($scope.initialCollapsed === 'true');

      $scope.collapse = function() {
        $scope.collapsed = !$scope.collapsed;
      }
    }
  }
})
