weatherApp.config(function ($routeProvider){
    $routeProvider

    .when('/',{
        templateUrl: 'pages/home.html',
        controller: 'mainController'
    })
    .when('/forecast',{
        templateUrl: 'pages/forecast.html',
        controller: 'forcastController'
    })
    .when('/forecast/:days',{
        templateUrl: 'pages/forecast.html',
        controller: 'forcastController'
    })
    
});