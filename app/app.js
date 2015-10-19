var app = angular.module('app', ['ui.bootstrap',
  'ui.router',
  'ui.map',
  'ui.event',
  'ngResource',
  'ngAnimate',
  'underscore',
  'ngSanitize',
  'lrDragNDrop',
  'angular-skycons',
  'nvd3',
  'nvd3ChartDirectives',
  'angularCharts'])
  .constant('ENDPOINT_URI', 'http://localhost:3000/api');
app.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('homepage', {
      url: '/homepage',
      templateUrl: 'homepage/homepage.html'
    })
    .state('login', {
      url: '/homepage/login',
      templateUrl: 'login/login.html',
      controller: "loginController"
    })
    .state('register', {
      url: '/homepage/register',
      templateUrl: 'login/register.html',
      controller: 'registerController',
      access: {restricted: false}
    })
    /*
     * Weather states
     */
    .state('weather', {
      url: '/homepage/weather',
      templateUrl: 'weather/weather.html'
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
      templateUrl: 'news/news.html'

    })
    /*
     * Movies state
     */
    .state('movie', {
      url: '/homepage/movie',
      templateUrl: 'movies/listMovie.html'
    })
    .state('movieDetail', {
      url: '/homepage/movie/:id',
      templateUrl: 'movies/movie-detail.html',
      controller: 'movieDetailCtrl'
    })
    .state('newMovie', {
      url: '/homepage/newMovie',
      templateUrl: 'movies/movie-add.html',
      controller: 'movieAddCtrl'
    })
    .state('editMovie', {
      url: '/homepage/movie/:id/edit',
      templateUrl: 'movies/movie-edit.html',
      controller: 'movieEditCtrl'
    });

});

