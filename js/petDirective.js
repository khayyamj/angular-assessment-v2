angular.module('app')
.directive('petDir', function() {
   return {
      restrict: 'E',
      templateUrl: './views/pet-tmpl.html',
      scope: {
         pet: '='
      },
      controller: function($scope) {
         $scope.showNoShow = false;
      }
   }
})
