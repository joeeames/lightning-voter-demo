angular.module('app').config(function($firebaseRefProvider) {
  $firebaseRefProvider.registerUrl('http://ng-lightning-voter.firebaseio.com');
})