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
