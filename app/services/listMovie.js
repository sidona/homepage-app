/**
 * Created by sdonose on 9/28/2015.
 */
app.factory('listMovie',function ($firebase,firebaseUrl,$firebaseArray) {
var fb=new Firebase(firebaseUrl+"/movie");
    var movies=$firebaseArray(fb);

    var getMovies=function(){
        return movies;
    }
    return{
        getMovies:getMovies()
    }
});


   /* return {
        list: function () {
            return movies;
        },
        findMovie: function (id) {
            return _.find(movies, function (movie) {
                return movie.id == id
            })
        },

    }*/



