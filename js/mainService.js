angular.module('app')
.service('mainService', function($http) {

   this.getPets = function() {
      return $http.get('http://practiceapi.devmounta.in/pets')
   }

   this.getPetBio = function(id) {
      return $http.get('http://practiceapi.devmounta.in/pets/' + id)
   }

})
