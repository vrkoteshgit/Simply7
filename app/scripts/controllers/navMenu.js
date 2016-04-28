'use strict';

/**
 * @ngdoc function
 * @name ktoolsApp.controller:MainMenuCtrl
 * @description
 * # MainMenuCtrl
 * Controller of the ktoolsApp
 */
angular.module('ktoolsApp')
  .controller('MainMenuCtrl', function ($state, $scope, $rootScope, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.toggleLeftNav = function() {
      $rootScope.viewLeftNav = !$rootScope.viewLeftNav;
    };
    $scope.toggle = function (scope) {
      scope.toggle();
      var nodeData = scope.$modelValue;
      $location.path('/' + nodeData.routeKey);
    };

    $scope.openMenu =  function(scope) {
      var nodeData = scope.$modelValue;
      //$location.path('/' + nodeData.routeKey);
      $state.go(nodeData.routeKey);
    };
  });