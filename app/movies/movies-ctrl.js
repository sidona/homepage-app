/**
 * Created by sdonose on 9/28/2015.
 */
app.controller('moviesCtrl', function ($scope, $http) {
  var pendingTask;
  if ($scope.search === undefined) {
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

app.controller('movieListCtrl', ['$scope', '$filter', 'Movie', function ($scope, $filter, Movie) {

  Movie.query(function (data) {
    $scope.manageMovies(data);
   // $scope.showMovies(data);
   // $scope.numberOfPages();
    //console.log('$scope.movies', $scope.movies);
  });
  /*$scope.showMovies = function (data) {
    $scope.curPage = 0;
    $scope.pageSize = 6;
    $scope.movies=data;
  };


  $scope.numberOfPages = function () {
    return Math.ceil($scope.movies.length / $scope.pageSize);
  };
*/
  $scope.manageMovies = function (data) {
    $scope.movies = data;
    $scope.lineChartYData = [];
    $scope.lineChartXData = [];
    angular.forEach($scope.movies, function (movie) {
      $scope.lineChartYData.push(movie.year);
      $scope.lineChartXData.push(movie.title);
    });
console.log('$scope.lineChartYData', $scope.lineChartYData, '$scope.lineChartXData', $scope.lineChartXData);

    // charts
    var orderProductAmount = $filter("orderBy")($scope.movies);
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

  };

  $scope.deleteMovie = function (movie) {
    Movie.remove({id: movie._id}, function () {
      $scope.movies.forEach(function (p, index) {
        if (p._id == movie._id) $scope.movies.splice(index, 1);
      });
    })
  };


  /*$scope.movie = null;
   $scope.movies = $firebase(fb, {recordFactory: Movie}).$asArray();
   $scope.loadMovie = function (movie) {
   $scope.movie = movie;
   }*/

  // changes the date on a book record, note that we're working
  // with Date objects here



  // left side filter criteria
  $scope.filter = "$";
  $scope.search = {title: '', ranking: '', $: '', rating: '', year: ''};
  $scope.changeFilterTo = function (pr) {
    $scope.filter = pr;
  };
  $scope.mySortFunction = function (item) {
    if (isNaN(item[$scope.sortExpression]))
      return item[$scope.sortExpression];
    return parseInt(item[$scope.sortExpression]);
  }

}]);


app.controller('movieDetailCtrl', ['$scope', '$stateParams', 'Movie', function ($scope, $stateParams, Movie, $http) {
  // $scope.movieDetail=Movie.findMovie($stateParams.id);

  $scope.movieDetail = Movie.get({id: $stateParams.id});


}]);
app.controller('movieAddCtrl', function ($scope, $state, $stateParams, Movie) {
  $scope.movie = new Movie();

  $scope.addMovie = function () {
    $scope.movie.$save(function () {
      $state.go('movie');
    });
  };
});

app.controller('movieEditCtrl', function ($scope, $state, $stateParams, Movie) {
  $scope.updateMovie = function () {
    $scope.movie.$update(function () {
      $state.go('movie');
    });

  }

});