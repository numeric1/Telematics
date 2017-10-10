var app = angular.module('gpstrk', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/data');
    
    $stateProvider
        
      .state('home', {
            url: '/data',
            templateUrl: 'data.html',
            controller:'gpsCtrl'
        });
        
});