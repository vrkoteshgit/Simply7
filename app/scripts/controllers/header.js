
'use strict';

/**
 * @ngdoc function
 * @name ktoolsApp.controller:MainHeaderCtrl
 * @description
 * # MainHeaderCtrl
 * Controller of the ktoolsApp
 */
angular.module('ktoolsApp')
  .controller('MainHeaderCtrl', function ($scope, $rootScope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $rootScope.viewLeftNav = true;
    $scope.toggleLeftNav = function() {
    	$rootScope.viewLeftNav = !$rootScope.viewLeftNav;
    };
  });