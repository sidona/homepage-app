/**
 * Created by sdonose on 9/28/2015.
 */
app.controller('hm-movie-ctrl', ['$scope', 'listMovie', function ($scope, listMovie) {
    var pagesShown = 1;
    var pageSize = 6;
    $scope.movies = listMovie.list();
    $scope.moviesLimit = function() {
        return pageSize * pagesShown;
    };
    $scope.hasMoreMovieToShow = function() {
        return pagesShown < ($scope.movies.length / pageSize);
    };
    $scope.showMoreMovies = function() {
        pagesShown = pagesShown + 1;
    };


}]);

var feeds = [];
app.factory('FeedLoader', function ($resource) {
    return $resource('http://ajax.googleapis.com/ajax/services/feed/load', {}, {
        fetch: { method: 'JSONP', params: {v: '1.0', callback: 'JSON_CALLBACK'} }
    });
})
    app.service('FeedList', function ($rootScope, FeedLoader) {
        this.get = function() {
            var feedSources = [
                {title: '"Blog Radu Constantinescu', url: 'http://www.radufconstantinescu.ro/feeds/posts/default'}
            ];
            if (feeds.length === 0) {
                for (var i=0; i<feedSources.length; i++) {
                    FeedLoader.fetch({q: feedSources[i].url, num: 7}, {}, function (data) {
                        var feed = data.responseData.feed;
                        feeds.push(feed);
                    });
                }
            }
            return feeds;
        };
    })
    app.controller('FeedCtrl', function ($scope, FeedList) {
        $scope.feeds = FeedList.get();
        $scope.$on('FeedList', function (event, data) {
            $scope.feeds = data;
        });
    });

app.controller('hm-weather-ctrl', ['$scope', '$http', function ($scope, $http) {

}])
