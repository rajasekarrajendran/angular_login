
(function () {
    'use strict';

    angular
        .module('MyApp')
        .controller('ChapterController', ChapterController);

    ChapterController.$inject = ['$location', '$http', '$state', '$window','$scope' , '$document'];
    function ChapterController($location, $http, $state, $window, $scope, $documet) {
    
     var finaltime = 0;
 
     var vid = document.getElementById("MyVid");
  
     vid.ontimeupdate = function() {myFunction()};
  
function myFunction() {
    // Display the current position of the video in a p element with id="demo"
    document.getElementById("demo").innerHTML = vid.currentTime;
     console.log(vid.duration);
     finaltime = vid.currentTime;
    console.log("FinalTime"+finaltime);
       
if (finaltime > vid.duration - 5 && finaltime < vid.duration)
{
$("#myModal").modal();
console.log("Hello");
}
   }


  
$scope.SelfTest = function () {

$state.go('selftest');
    
    };


}
})();
