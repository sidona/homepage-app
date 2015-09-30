/**
 * Created by sdonose on 9/28/2015.
 */
app.controller('hm-movie-ctrl', ['$scope', 'listMovie', function ($scope, listMovie) {
    var pagesShown = 1;
    var pageSize = 4;
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