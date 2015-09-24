/**
 * Created by sdonose on 9/24/2015.
 */

app.factory('listMovieApi', ['$http', function ($http) {
    return {
        getMovies: getMovies
    }
    function getMovies() {
        return $http.get('data/top250.json')
            .success(function (data) {
                return data;
            })
            .error(function (err) {
                return err;
            });
    }


}])

