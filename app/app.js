/**
 * Created by sdonose on 9/22/2015.
 */
var app=angular.module('app',['ui.bootstrap','ui.router','ui.map','ui.event','ngAnimate','ngResource']);

app.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('movies',{
            url:'/movies',
            templateUrl:'pages/movies.html'
        })
        .state('weather',{
            url:'/weather',
            templateUrl:'pages/weather.html'
        })
        .state('listMovie',{
            url:'/listMovie',
            templateUrl:'pages/listMovie.html'
        })
        .state('detailMovie',{
        url:'/detailMovie',
        templateUrl:'pages/detailMovie.html'
    })




})