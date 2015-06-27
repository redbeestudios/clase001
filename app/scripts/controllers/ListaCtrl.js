'use strict';

/**
 * @ngdoc function
 * @name cursoApp.controller:ListaCtrl
 * @description
 * # ListaCtrl
 * Controller of the cursoApp
 */
angular.module('cursoApp')
  .controller('ListaCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
