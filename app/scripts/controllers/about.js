'use strict';

/**
 * @ngdoc function
 * @name ktoolsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ktoolsApp
 */
angular.module('ktoolsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
