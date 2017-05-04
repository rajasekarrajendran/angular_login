var app = angular.module("MyApp", ['ui.router', 'ngRoute', 'ngAnimate','ngSanitize']);

app.config(function($httpProvider, $stateProvider, $urlRouterProvider) {
    
   $httpProvider.defaults.headers.post = {};
   

    $stateProvider
        
        .state('home', {
            url: '/home', 
            templateUrl: 'Dashboard/dashboard.html',
            controller: 'DashboardController',       
            
        })
        .state('drug', {
            url: '/drug-developmet-process', 
            templateUrl: 'DrugDevelopment/drug-development.html',
            controller: 'DrugController',       
            
        }) 
         .state('lession', {
            url: '/lession', 
            templateUrl: 'LessionController/LessionController.html',
            controller: 'LessionController',       
            
        }) 
          .state('desc', {
            url: '/description', 
            templateUrl: 'Description/description.html',
            controller: 'DescriptionController',       
            
        }) 
        
        .state('selftest', {
            url: '/self-test', 
            templateUrl: 'SelfTest/self-test.html',
            controller: 'SelfTestController',       
            
        }) 
        
        .state('chapter', {
            url: '/chapter-2', 
            templateUrl: 'Chapter/chapter.html',
            controller: 'ChapterController',       
            
        }) 
       $urlRouterProvider.otherwise('/home');
        
}

);

 

