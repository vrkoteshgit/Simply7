'use strict';

/**
 * @ngdoc function
 * @name ktoolsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ktoolsApp
 */
angular.module('ktoolsApp')
  .controller('MainCtrl', function ($scope, $rootScope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $rootScope.mainDivBg = '';
    $rootScope.viewLeftNav = true;
    $scope.toggleLeftNav = function() {
    	$rootScope.viewLeftNav = !$rootScope.viewLeftNav;
    };
  });
