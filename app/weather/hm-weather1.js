/**
 * Created by sdonose on 9/23/2015.
 */

(function () {
    app.directive('hmWeather1', hmWeatherDirective);
    function hmWeatherDirective($http) {
        return {
            restrict: 'E',
            templateUrl: 'weather/hm-weather1.html',
            link: hmWeatherDirectiveLinkFn
        }


        function hmWeatherDirectiveLinkFn($scope, attrs, el) {
            $scope.geoLocation = function () {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(function (position) {
                        $scope.latitude = position.coords.latitude;
                        $scope.longitude = position.coords.longitude;
                        //console.log(latitude);
                        // console.log(longitude);


                        var pagesShown = 1;
                        var pageSize = 4;
                        $scope.weatherLimit = function () {
                            return pageSize * pagesShown;
                        };

                        $scope.showMoreWeather = function () {
                            pagesShown = pagesShown + 1;
                        };
                        $http.jsonp("https://api.forecast.io/forecast/cdfba6aefd8d7913b292cfdd579abf0b/" + $scope.latitude + "," + $scope.longitude + "?units=si&exclude=flags=metric&callback=JSON_CALLBACK")
                            .success(function (data, status, headers, config) {
                                $scope.weather = data;
                            });
                        $scope.toggle = function () {
                            $scope.myVar = !$scope.myVar;
                        }


                        $scope.$apply();
                    })

                }

            };

            $scope.geoLocation();


        }


    }

    hmWeatherDirective.$inject = ['$http'];
})();