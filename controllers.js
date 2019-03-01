weatherApp.controller('mainController', ['$scope', '$routeParams', '$location', 'getCity', function($scope, $routeParams, $location, getCity) {
    $scope.city = getCity.city;

    $scope.$watch('city', function(){
        getCity.city = $scope.city;

    });

    $scope.submit = function(){
        $location.path("/forecast");
    }
}]);


weatherApp.controller('forcastController', ['$scope', '$resource', '$routeParams', 'getCity', function($scope, $resource, $routeParams, getCity) {
    $scope.days = $routeParams.days || 2;

    console.log($scope.days);
    $scope.city = getCity.city;
    const API_KEY = '5c1700fcc59bf093f844f17ccfa5b0f5';
    $scope.weatherAPI =

        $resource(`http://api.openweathermap.org/data/2.5/forecast/?=${$scope.city},appid=${API_KEY}`, );

    $scope.weatherResult = $scope.weatherAPI.get({q: $scope.city, cnt: $scope.days, appid: API_KEY});

    $scope.convertToCelsius = function(degC) {
        return Math.round((1.8 * (degC - 273.15)));
    }

    
    
}]);