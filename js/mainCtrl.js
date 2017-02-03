angular.module('app')
.controller('mainCtrl', function($scope, mainService) {

   mainService.getPets().then(function(response) {
      $scope.pets = response.data;
   })
})
