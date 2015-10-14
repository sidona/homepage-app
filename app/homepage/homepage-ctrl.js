/**
 * Created by sdonose on 9/28/2015.
 */
app.controller('hm-movie-ctrl', ['$scope', 'listMovie', 'firebaseUrl', function ($scope, listMovie, firebaseUrl) {
    var fb = new Firebase(firebaseUrl + "/movie");
    var pagesShown = 1;
    var pageSize = 6;
    $scope.movies = listMovie(fb);
    $scope.moviesLimit = function () {
        return pageSize * pagesShown;
    };
    $scope.hasMoreMovieToShow = function () {
        return pagesShown < ($scope.movies.length / pageSize);
    };
    $scope.showMoreMovies = function () {
        pagesShown = pagesShown + 1;
    };


}]);


app.controller('FeedCtrl', function ($scope, FeedList) {
    var feeds = [];
    $scope.feeds = FeedList.get();
    $scope.$on('FeedList', function (event, data) {
        $scope.feeds = data;
    });
});

app.controller('hm-weather-ctrl', ['$scope', '$http', function ($scope, $http) {

}])
app.controller('authenticatedCtrl', function ($scope) {
    $scope.showModal = false;
    $scope.toggleModal = function () {
        $scope.showModal = !$scope.showModal;
    };
});
