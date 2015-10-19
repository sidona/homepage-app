/**
 * Created by sdonose on 9/28/2015.
 */
app.controller('hm-movie-ctrl', ['$scope', 'Movie', function ($scope, Movie) {
  Movie.query(function (data) {
    $scope.movies = data;
    var pagesShown = 1;
    var pageSize = 4;

    $scope.moviesLimit = function () {
      return pageSize * pagesShown;
    };
    $scope.hasMoreMovieToShow = function () {
      return pagesShown < ($scope.movies.length / pageSize);
    };
    $scope.showMoreMovies = function () {
      pagesShown = pagesShown + 1;
    };
  });


}]);


app.controller('FeedCtrl', function ($scope, FeedList) {
  var feeds = [];
  $scope.feeds = FeedList.get();
  $scope.$on('FeedList', function (event, data) {
    $scope.feeds = data;
  });
});

app.controller('hm-weather-ctrl', ['$scope', '$http', function ($scope, $http) {

}]);

