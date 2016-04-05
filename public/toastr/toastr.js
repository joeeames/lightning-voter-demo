(function() {
  var toastrModule = angular.module('toastr', []);
  
  toastrModule.value('toastr', toastr);
  
}())