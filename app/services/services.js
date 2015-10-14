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
app.factory('FeedLoader', function ($resource) {
    return $resource('http://ajax.googleapis.com/ajax/services/feed/load', {}, {
        fetch: {method: 'JSONP', params: {v: '1.0', callback: 'JSON_CALLBACK'}}
    });
})
app.service('FeedList', function ($rootScope, FeedLoader) {
    var feeds = [];
    this.get = function () {
        var feedSources = [
            {title: '"Blog Radu Constantinescu', url: 'http://www.radufconstantinescu.ro/feeds/posts/default'}
        ];
        if (feeds.length === 0) {
            for (var i = 0; i < feedSources.length; i++) {
                FeedLoader.fetch({q: feedSources[i].url, num: 7}, {}, function (data) {
                    var feed = data.responseData.feed;
                    feeds.push(feed);
                });
            }
        }
        return feeds;
    };
})