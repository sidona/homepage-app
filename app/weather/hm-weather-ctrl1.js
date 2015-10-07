/**
 * Created by sdonose on 9/28/2015.
 */
app.controller('weatherCtrl', ['$scope', '$http', "$filter",function ($scope, $http,$filter) {

    var pagesShown = 1;
    var pageSize = 4;
    $scope.weatherLimit = function() {
        return pageSize * pagesShown;
    };

    $scope.showMoreWeather = function() {
        pagesShown = pagesShown + 1;
    };


    $http.jsonp("https://api.forecast.io/forecast/cdfba6aefd8d7913b292cfdd579abf0b/51.5171,-0.1062?units=si&exclude=flags=metric&callback=JSON_CALLBACK")
        .success(function(data, status, headers, config) {
            populateWeatherChartLondon(data)

        });

    function populateWeatherChartLondon(data){
        console.log("weather data,", data);
        $scope.london = data;
        var orderWeatherLondon = $filter("orderBy")($scope.london.hourly.data);
        var filteredWeatherLondon = $filter("limitTo")(orderWeatherLondon, 10);
        console.log('orderWeatherLondon', orderWeatherLondon);
        console.log('filteredWeatherLondon', filteredWeatherLondon);
        var chartDataWeatherLondon = [];
        for (var i = 0; i < filteredWeatherLondon.length; i++) {

            chartDataWeatherLondon.push({
                x: $filter('timestampToDate')(filteredWeatherLondon[i].time).getHours(),
                y: [filteredWeatherLondon[i].temperature]
                //filteredWeatherSydney[i].price]
                //filteredWeatherSydney[i].marginAmount]
            });
        }
        $scope.dataLondon = {
            series: ["temperature"],
            data: chartDataWeatherLondon
        };

    }

}])
app.controller('weather-sydneyCtrl',['$scope','$filter', '$http',function ($scope,$filter, $http) {

    var pagesShown = 1;
    var pageSize = 4;
    $scope.weatherLimit = function() {
        return pageSize * pagesShown;
    };

    $scope.showMoreWeather = function() {
        pagesShown = pagesShown + 1;
    };


    $http.jsonp("https://api.forecast.io/forecast/cdfba6aefd8d7913b292cfdd579abf0b/-33.8683,151.2086?units=si&exclude=flags=metric&callback=JSON_CALLBACK")
        .success(function(data, status, headers, config) {
            populateWeatherChartSydney(data)

        });

function populateWeatherChartSydney(data){
    console.log("weather data,", data);
    $scope.sydney = data;
    var orderWeatherSydney = $filter("orderBy")($scope.sydney.hourly.data);
    var filteredWeatherSydney = $filter("limitTo")(orderWeatherSydney, 10);
    console.log('orderWeatherSydney', orderWeatherSydney);
    console.log('filteredWeatherSydney', filteredWeatherSydney);
    var chartDataWeatherSydney = [];
    for (var i = 0; i < filteredWeatherSydney.length; i++) {

        chartDataWeatherSydney.push({
            x: $filter('timestampToDate')(filteredWeatherSydney[i].time).getHours(),
            y: [filteredWeatherSydney[i].temperature]
            //filteredWeatherSydney[i].price]
            //filteredWeatherSydney[i].marginAmount]
        });
    }
    $scope.dataSydney = {
        series: ["temperature"],
        data: chartDataWeatherSydney
    };

}



}])

app.controller('weather-newYorkCtrl',['$scope', '$http', "$filter",function ($scope, $http,$filter) {

    var pagesShown = 1;
    var pageSize = 4;
    $scope.weatherLimit = function() {
        return pageSize * pagesShown;
    };

    $scope.showMoreWeather = function() {
        pagesShown = pagesShown + 1;
    };
    $scope.title="Temperature";

    $http.jsonp("https://api.forecast.io/forecast/cdfba6aefd8d7913b292cfdd579abf0b/40.7142,-74.0064?units=si&exclude=flags=metric&callback=JSON_CALLBACK")
        .success(function(data, status, headers, config) {
            populateWeatherChartNewYork(data)

        });

    function populateWeatherChartNewYork(data){
        console.log("weather data,", data);
        $scope.newYork = data;
        var orderWeatherNewYork = $filter("orderBy")($scope.newYork.hourly.data);
        var filteredWeatherNewYork = $filter("limitTo")(orderWeatherNewYork, 10);
        console.log('orderWeatherNewYork', orderWeatherNewYork);
        console.log('filteredWeatherNewYork', filteredWeatherNewYork);
        var chartDataWeatherNewYork = [];
        for (var i = 0; i < filteredWeatherNewYork.length; i++) {

            chartDataWeatherNewYork.push({
                x: $filter('timestampToDate')(filteredWeatherNewYork[i].time).getHours(),
                y: [filteredWeatherNewYork[i].temperature]
               // filteredWeatherNewYork[i].precipIntensity]
                //filteredWeatherSydney[i].marginAmount]
            });
        }
        $scope.dataNewYork = {
            series: ["temperature","precipitasion"],
            data: chartDataWeatherNewYork
        };

    }


}])