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

app.controller('movieListCtrl',['$scope','$filter','$firebase','firebaseUrl','$firebaseArray',function($scope,$filter,$firebase,firebaseUrl,$firebaseArray){
    var fb = new Firebase(firebaseUrl+"/movie");

    /*$scope.movie = null;
    $scope.movies = $firebase(fb, {recordFactory: listMovie}).$asArray();
    $scope.loadMovie = function (movie) {
        $scope.movie = movie;
    }*/

    // changes the date on a book record, note that we're working
    // with Date objects here

    $scope.showData = function( ) {
        $scope.curPage = 0;
        $scope.pageSize = 6;
        $scope.movies = $firebaseArray(fb);
    }
    $scope.addMovie = function() {
        $scope.movies.$add({
            title: $scope.newMovie


        });
        console.log('add');
    };


    $scope.numberOfPages = function() {
        return Math.ceil($scope.movies.length / $scope.pageSize);
    };


    //$scope.lineChartYData=movies.year
   // $scope.lineChartXData=movies.title
       // $scope.data=listMovie.list();
   /* var orderProductAmount = $filter("orderBy")(listMovie.list());
    var filteredProductsAmount = $filter("limitTo")(orderProductAmount, 3);


    var chartDataAmount = [];
    for (var i = 0; i < filteredProductsAmount.length; i++) {

        chartDataAmount.push({
            x: filteredProductsAmount[i].title,
            y: [filteredProductsAmount[i].ranking]
            //filteredProductsAmount[i].price]
            //filteredProductsAmount[i].marginAmount]
        });
    }
    $scope.dataAmount = {
        series: ["ranking"],
        data: chartDataAmount
    };

    /*$scope.xFunction = function () {
        return function (d) {
            return d.title;
        };
    }
    $scope.yFunction = function () {
        return function (d) {
            return d.year;
        };
    }*/

    $scope.filter = "$";
    $scope.search = {title:'', ranking:'', $:'',rating:'',year:''};
    $scope.changeFilterTo = function(pr) {
        $scope.filter = pr;
    }
    $scope.mySortFunction = function(item) {
        if(isNaN(item[$scope.sortExpression]))
            return item[$scope.sortExpression];
        return parseInt(item[$scope.sortExpression]);
    }

}])




app.controller('movieDetailCtrl',['$scope','$stateParams','$firebaseObject','firebaseUrl',function($scope,$stateParams,$firebaseObject,firebaseUrl){
   // $scope.movieDetail=listMovie.findMovie($stateParams.id);

    var fbId = new Firebase(firebaseUrl+'/movie/'+$stateParams.id);
    $scope.movieDetail = $firebaseObject(fbId);

}])

