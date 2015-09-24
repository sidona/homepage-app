/**
 * Created by sdonose on 9/22/2015.
 */

app.controller('mainCtrl', function ($scope) {
    $scope.msg = "hello sidona";
})

app.controller('moviesCtrl', function ($scope, $http) {


    var pendingTask;
    if ($scope.search === undefined) {
        $scope.search = "Survivor";
        fetch();
    }
    $scope.change = function() {
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
    $scope.select = function() {
        this.setSelectionRange(0, this.value.length);
    }




   /* $scope.moviesArray = [];
    $scope.titlesArray = [
        'survivor',
        'the godfather',
        'the matrix'
    ];

    angular.forEach($scope.titlesArray, function (title) {
        $http.get("http://www.omdbapi.com/?t=" + title + "&y=&plot=short&r=json").success(function (response) {
            $scope.moviesArray.push(response);
        })
    })*/
});


app.controller('weatherCtrl',function($scope){


})