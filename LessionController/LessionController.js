
(function () {
    'use strict';

    angular
        .module('MyApp')
        .controller('LessionController', LessionController);

    LessionController.$inject = ['$location', '$http', '$state', '$window','$scope' , '$document'];
    function LessionController($location, $http, $state ,  $window, $scope, $documet) {
    
 

  $scope.getstart = function() {
  
	 $state.go("desc");
  }

}
})();
