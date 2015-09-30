/**
 * Created by sdonose on 9/24/2015.
 */

app.factory('listMovieApi', ['$http','_', function ($http,_) {
    var services={

        getMovies: function () {
            return $http.get('data/top250.json')
                .success(function (data) {
                    return data;
                })
                .error(function (err) {
                    return err;
                });


        },
        getMovieById:function(id,_){
            services.getMovies().then(function (result) {
                return _.find(result,function(movie){
                    movie.id==id
                });
            })


        }

    }
    return services;


}])


/*app.factory('Movie',['$resource',
 function($resource){
 return $resource('data/:movieId.json',{},{
 query: {method:'GET', params:{movieId:'top250'}, isArray:true}
 })
 }])*/
