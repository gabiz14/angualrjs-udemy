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
   
   $scope.people = [
       {
       name: 'Matty',
       address: '4 Falconer Court',
       city: 'North Shields',
       county: 'Tyne and Wear',
       postcode: 'NE30 4an'
       },
       {
       name: 'Bob',
       address: '2 Falconer Court',
       city: 'North Shields',
       county: 'Tyne and Wear',
       postcode: 'NE30 4an'
       },
       {
       name: 'John',
       address: '61 Broad Gores',
       city: 'Retford',
       county: 'Notss',
       postcode: 'DN22 9JX'
       }
   ];

   $scope.formattedAddress = function(person){

    return person.address + ', ' + person.city + ', ' + person.city + ', ' + person.county + ', ' + person.postcode;

   };

}]);

angularApp.controller('secondController', ['$scope', '$log', '$routeParams', 'nameService', function ($scope, $log, $routeParams, nameService) {

    $scope.num = $routeParams.num || 1;

    $scope.name = nameService.name;

    $scope.$watch('name', function(){
        nameService.name = $scope.name;
    });
 }]);

 angularApp.directive("searchResult", function(){
    return {
        templateUrl: 'directives/searchresult.html',
        replace: true,
        scope: {
            personObject: "=",
            formattedAddressFunction: "&"
        },
        link: function(scope, elements){
            if (scope.personObject.county == 'Tyne and Wear') {
                elements.addClass('alert-success');
            }
        },
        transclude: true
    }

 });

 angularApp.directive("header", function(){
    return {
        templateUrl: 'directives/header.html',
        replace: false
    }
 });