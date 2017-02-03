angular.module('app')
.controller('routes', function($scope, $state, mainService) {

   var id = $state.params.id;
   mainService.getPetBio(id).then(function(response) {
      $scope.bio = response.data;
      console.log($scope.bio);
   })


})
