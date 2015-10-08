/**
 * Created by sdonose on 9/22/2015.
 */
var app = angular.module('app', ['ui.bootstrap', 'ui.router', 'ui.map', 'ui.event','ngResource', 'ngAnimate','underscore','ngSanitize','lrDragNDrop','angular-skycons','nvd3','nvd3ChartDirectives','angularCharts']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('homepage', {
            url: '/',
            templateUrl: 'homepage/homepage.html'
        })

        .state('weather', {
            url: '/weather',
            templateUrl: 'weather/weather.html'
        })
        .state('london', {
            url: '/weather/london',
            templateUrl: 'weather/weather-london.html'
        })
        .state('sydney', {
            url: '/weather/sydney',
            templateUrl: 'weather/weather-sydney.html'
        })
        .state('newYork', {
            url: '/weather/newYork',
            templateUrl: 'weather/weather-newYork.html'
        })
        .state('news', {
            url: '/news',
            templateUrl: 'news/news.html'
        })
        .state('movie', {
            url: '/movie',
            templateUrl: 'movies/listMovie.html'
        })
        .state('movieDetail', {
            url: '/movie/:id',
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
