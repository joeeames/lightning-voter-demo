angular.module('app').filter('talkDuration', function() {
  return function(duration) {
    return "Duration: " + duration + " minutes";
  }
})