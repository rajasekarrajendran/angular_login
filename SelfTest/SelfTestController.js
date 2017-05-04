
(function () {
    'use strict';

    angular
        .module('MyApp')
        .controller('SelfTestController', SelfTestController);

    SelfTestController.$inject = ['$location', '$http', '$window','$scope' , '$document'];
    function SelfTestController($location, $http, $window, $scope, $documet) {
    
 

  
$scope.validate = function() {

var ans1;
var ans2;
var result = 0;
ans1 = $scope.one;
ans2 = $scope.two;
$scope.total = 2;
$scope.finresult = 0;
ans2 =="In-vitro and in-vivo"

if (ans1 == "Drug")
{
result = 1;
$scope.finresult = result;

}
else 
{
result = 0;
}

if (ans2 == "In-vitro and in-vivo")
{
$scope.finresult = result + 1;


}
else 
{
result = 0;
}


};

}
})();
