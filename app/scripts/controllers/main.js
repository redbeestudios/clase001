'use strict';

/**
 * @ngdoc function
 * @name cursoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cursoApp
 */
angular.module('cursoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.addToDo = function(newTodo){
      var todo = {
        task: newTodo,
          done: false
      };

      $scope.todoList.push(todo);
      console.log("new todo: " + newTodo);
    }

    $scope.completeTodo = function(todo){
      todo.done = true;
    }

    $scope.deleteTodo = function(todo){
      var index = $scope.todoList.indexOf(todo);
      $scope.todoList.splice(index, 1);
    }

    $scope.volverTodo = function(todo){
      todo.done = false;
    }
    $scope.todoList = [];
  });
