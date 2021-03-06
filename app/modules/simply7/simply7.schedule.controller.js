'use strict';

/**
 * @ngdoc function
 * @name ktoolsApp.controller:MainMenuCtrl
 * @description
 * # MainMenuCtrl
 * Controller of the ktoolsApp
 */
angular.module('ktoolsApp')
  .controller('Simply7ScheduleCtrl', function ($scope, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.isBinding = false;
    $scope.showAllRes = false;
    $scope.showSchRes = true;
    $scope.showLeftMenu = false;
    $scope.remove = function (scope) {
      scope.remove();
    };

    $scope.toggle = function (scope) {
      scope.toggle();
      var nodeData = scope.$modelValue;
      $location.path('/' + nodeData.routeKey);
    };

    $scope.openMenu =  function(scope) {
      var nodeData = scope.$modelValue;
      $location.path('/' + nodeData.routeKey);
    };

    $scope.newSubItem = function (scope) {
      var nodeData = scope.$modelValue;
      nodeData.nodes.push({
        id: nodeData.id * 10 + nodeData.nodes.length,
        title: nodeData.title + '.' + (nodeData.nodes.length + 1),
        nodes: []
      });
    };

       $scope.tree1 = [{
      'id': 1,
      'title': 'Home',
      'nodes': []
    }, {
      'id': 2,
      'title': 'tree1 - item2',
      'nodes': []
    }, {
      'id': 3,
      'title': 'tree1 - item3',
      'nodes': []
    }, {
      'id': 4,
      'title': 'tree1 - item4',
      'nodes': []
    }];
    $scope.tree2 = [{
      'id': 1,
      'title': 'Simply Seven',
      'routeKey': 's7',
      'nodes': []
    }, {
      'id': 2,
      'title': 'tree2 - item2',
      'nodes': []
    }, {
      'id': 3,
      'title': 'tree2 - item3',
      'nodes': []
    }, {
      'id': 4,
      'title': 'tree2 - item4',
      'nodes': []
    }];
  });