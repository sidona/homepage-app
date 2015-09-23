/**
 * Created by sdonose on 9/22/2015.
 */

app.controller('mainCtrl', function ($scope) {
    $scope.msg = "hello sidona";
})

app.controller('moviesCtrl', function ($scope, $http) {
    $scope.moviesArray = [];
    $scope.titlesArray = [
        'survivor',
        'the godfather',
        'the matrix'
    ];

    angular.forEach($scope.titlesArray, function (title) {
        $http.get("http://www.omdbapi.com/?t=" + title + "&y=&plot=short&r=json").success(function (response) {
            $scope.moviesArray.push(response);
        })
    })
});


app.controller('weather',function($scope){


})