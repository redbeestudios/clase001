'use strict';

/**
 * @ngdoc overview
 * @name cursoApp
 * @description
 * # cursoApp
 *
 * Main module of the application.
 */
angular
  .module('cursoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
