angular.module('app').component('detailPanel', {
  transclude: true,
  templateUrl: '/components/detailPanel.html',
  bindings: {
    title: '@',
    initialCollapsed: '@collapsed'
  },
  controller: function() {
    this.collapsed = (this.initialCollapsed === 'true');

    this.collapse = function() {
      this.collapsed = !this.collapsed;
    }
  }
})







