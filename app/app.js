/**
 * Created by sdonose on 9/22/2015.
 */
var app = angular.module('app', ['ui.bootstrap', 'firebase', 'ui.router', 'ui.map', 'ui.event', 'ngResource', 'ngAnimate', 'underscore', 'ngSanitize', 'lrDragNDrop', 'angular-skycons', 'nvd3', 'nvd3ChartDirectives', 'angularCharts'])
    .constant('firebaseUrl', "https://myhomepage.firebaseio.com/");
app.config(function ($stateProvider, $urlRouterProvider, firebaseUrl) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('homepage', {
            url: '/homepage',
            templateUrl: 'homepage/homepage.html',
            resolve: {
                "currentAuth": ["$firebaseAuth", function ($firebaseAuth) {
                    // $requireAuth returns a promise if authenticated, rejects if not
                    var ref = new Firebase(firebaseUrl);
                    var authObj = $firebaseAuth(ref);

                    return authObj.$requireAuth();
                }]
            }
        })
        .state('authenticated', {
            url: '/authenticated',
            templateUrl: 'partial-authenticated.html',
            resolve: {
                "currentAuth": ["$firebaseAuth", function ($firebaseAuth) {
                    // $requireAuth returns a promise if authenticated, rejects if not
                    var ref = new Firebase(firebaseUrl);
                    var authObj = $firebaseAuth(ref);

                    return authObj.$requireAuth();
                }]
            }
        })


        .state('weather', {
            url: '/homepage/weather',
            templateUrl: 'weather/weather.html',
            resolve: {
                "currentAuth": ["$firebaseAuth", function ($firebaseAuth) {
                    // $requireAuth returns a promise if authenticated, rejects if not
                    var ref = new Firebase(firebaseUrl);
                    var authObj = $firebaseAuth(ref);

                    return authObj.$requireAuth();
                }]
            }
        })
        .state('london', {
            url: '/homepage/weather/london',
            templateUrl: 'weather/weather-london.html'
        })
        .state('sydney', {
            url: '/homepage/weather/sydney',
            templateUrl: 'weather/weather-sydney.html'
        })
        .state('newYork', {
            url: '/homepage/weather/newYork',
            templateUrl: 'weather/weather-newYork.html'
        })
        .state('news', {
            url: '/homepage/news',
            templateUrl: 'news/news.html',
            resolve: {
                "currentAuth": ["$firebaseAuth", function ($firebaseAuth) {
                    // $requireAuth returns a promise if authenticated, rejects if not
                    var ref = new Firebase(firebaseUrl);
                    var authObj = $firebaseAuth(ref);

                    return authObj.$requireAuth();
                }]
            }
        })
        .state('movie', {
            url: '/homepage/movie',
            templateUrl: 'movies/listMovie.html',
            resolve: {
                "currentAuth": ["$firebaseAuth", function ($firebaseAuth) {
                    // $requireAuth returns a promise if authenticated, rejects if not
                    var ref = new Firebase(firebaseUrl);
                    var authObj = $firebaseAuth(ref);

                    return authObj.$requireAuth();
                }]
            }
        })
        .state('movieDetail', {
            url: '/homepage/movie/:id',
            templateUrl: 'movies/movie-detail.html',
            controller: 'movieDetailCtrl',
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
/*app.run(['$rootScope', '$firebaseAuth', 'firebaseUrl', function ($rootScope, $firebaseAuth, firebaseUrl) {
    $rootScope.$on('$locationChangeStart', function ($event, nextLocation, previousLocation) {
        // check if user is authenticated
        var checkAuth = function () {
            // $requireAuth returns a promise if authenticated, rejects if not
            var ref = new Firebase(firebaseUrl);
            var authObj = $firebaseAuth(ref);

            return authObj.$requireAuth();
        };

        checkAuth().then(function (isAuthenticated) {
            console.log('isAuthenticated', isAuthenticated);
            if (checkAuth()) {
                console.log(checkAuth());
            }
        });

    });
}]);*/
