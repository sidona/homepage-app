/**
 * Created by sdonose on 9/24/2015.


    app.factory('hmWeather', ['$scope','$http',function() {


        function geoLocation($scope, $http) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    $scope.latitude = position.coords.latitude;
                    $scope.longitude = position.coords.longitude;
                    //console.log(latitude);
                    // console.log(longitude);
                    $http.jsonp("https://api.forecast.io/forecast/cdfba6aefd8d7913b292cfdd579abf0b/" + $scope.latitude + "," + $scope.longitude + "?units=si&exclude=minutely,hourly,daily,alerts,flags=metric&callback=JSON_CALLBACK")
                        .success(function (data) {
                            return data;
                        });
                    $scope.$apply();
                })

            }
            return {
                geoLocation: geoLocation
            }
        }
    }]);


*/