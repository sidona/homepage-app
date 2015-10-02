/**
 * Created by sdonose on 9/22/2015.
 */
var app = angular.module('app', ['ui.bootstrap', 'ui.router', 'ui.map', 'ui.event', 'ngAnimate', 'ngResource','underscore','ngSanitize','lrDragNDrop']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('homepage', {
            url: '/',
            templateUrl: 'homepage/homepage.html'
        })
        .state('movies', {
            url: '/movies',
            templateUrl: 'movies/movies.html'
        })
        .state('weather', {
            url: '/weather',
            templateUrl: 'weather/weather.html'
        })
        .state('news', {
            url: '/news',
            templateUrl: 'news/news.html'
        })
        .state('listMovie', {
            url: '/listMovie',
            templateUrl: 'movies/listMovie.html'
        })
        .state('movieDetail', {
            url: '/listMovie/:id',
            templateUrl: 'movies/movie-detail.html',
            controller: 'movieDetailCtrl'
            /*resolve:   {

                id:function($stateParams) {
                    return $stateParams.id;
                },
                    movie:function($http,id,listMovieApi){
                        return listMovieApi.getMovies().then(function(res){
                            return res.data[id];
                        })
                    }
                }

*/

        })




})
app.run(['$rootScope', '$state', '$stateParams',
    function($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }
])