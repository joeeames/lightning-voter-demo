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



angular.module('app').directive('zoomIn', function() {
  return {
    restrict: 'A',
    link: function(scope, el, attrs) {
      el.on('mouseenter', function() {
        el[0].style.transform="scale(1.1,1.1)"
      })
      el.on('mouseleave', function() {
        el[0].style.transform="scale(1,1)"
      })
    }
  }
})


angular.module('app').filter('talkDuration', function() {
  return function(duration) {
    return "Duration: " + duration + " minutes";
  }
})
