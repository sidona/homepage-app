/**
 * Created by sdonose on 9/28/2015.
 */
app.controller('moviesCtrl', function ($scope, $http) {


    var pendingTask;
    if ($scope.search === undefined) {
        $scope.search = "Survivor";
        fetch();
    }
    $scope.change = function () {
        if (pendingTask) {
            clearTimeout(pendingTask);
        }
        pendingTask = setTimeout(fetch, 800);
    };

    function fetch() {
        $http.get("http://www.omdbapi.com/?t=" + $scope.titles + "&&y=&plot=short&r=json").success(function (response) {
            $scope.movies = response;
        });
    }

    $scope.select = function () {
        this.setSelectionRange(0, this.value.length);
    }



});
app.controller('movieListCtrl',['$scope','listMovie',function($scope,listMovie){
    $scope.showData = function( ) {
        $scope.curPage = 0;
        $scope.pageSize = 3;
        $scope.movies = listMovie.list();
    }
    $scope.numberOfPages = function() {
        return Math.ceil($scope.movies.length / $scope.pageSize);
    };

}])

app.controller('movieDetailCtrl',['$scope','$stateParams', 'listMovie',function($scope,$stateParams,listMovie){
    $scope.movieDetail=listMovie.findMovie($stateParams.id);
}])

