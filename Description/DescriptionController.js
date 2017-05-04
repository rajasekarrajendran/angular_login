
(function () {
    'use strict';

    angular
        .module('MyApp')
        .controller('DescriptionController', DescriptionController);

    DescriptionController.$inject = ['$location', '$http', '$state', '$window','$scope' , '$document'];
    function DescriptionController($location, $http, $state ,  $window, $scope, $documet) {
    
 

  $scope.chapter = function() {
  
	 $state.go("drug");
  }

}
})();
