(function() {
  var toastrModule = angular.module('toastr', []);
  
  toastr.options.timeOut = 1000;
  
  toastrModule.value('toastr', toastr);
  
}())