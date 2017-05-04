
(function () {
    'use strict';

    angular
        .module('MyApp')
        .controller('DashboardController', TestFormController);

    TestFormController.$inject = ['$location', '$state' , '$http', '$window','$scope' , '$document'];
    function TestFormController($location, $state , $http, $window, $scope, $documet) {
    
    $scope.drug = function() {
    $state.go("lession");
    };



}
})();
