// MODULE
var angularApp = angular.module('angularApp', ['ngMessages','ngRoute']);

angularApp.config(function ($routeProvider){
    $routeProvider

    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })

    .when('/second/', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })

    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })

});

// SERVICE
angularApp.service('nameService', function(){
    var self = this;
    this.name = 'Matty';

    this.namelength = function() {
        return self.name.length;
    };

});

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$log', 'nameService', function ($scope, $log, nameService) {
   
   $scope.name = nameService.name;
   
   $scope.$watch('name', function(){
    nameService.name = $scope.name;
   })

   $log.log(nameService.name);
   $log.log(nameService.namelength());

}]);

angularApp.controller('secondController', ['$scope', '$log', '$routeParams', 'nameService', function ($scope, $log, $routeParams, nameService) {

    $scope.num = $routeParams.num || 1;

    $scope.name = nameService.name;

    $scope.$watch('name', function(){
        nameService.name = $scope.name;
    });
 }]);