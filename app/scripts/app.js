'use strict';

/**
 * @ngdoc overview
 * @name ktoolsApp
 * @description
 * # ktoolsApp
 *
 * Main module of the application.
 */
angular
  .module('ktoolsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'ui.tree',
    'ui.bootstrap',
    'ktoolsApp.mainlayout',
    'ktoolsApp.simply7',
    'fileSystem',
    'mwl.calendar'
  ]).config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
        $stateProvider.state('home', {
            url: '/home',
            parent: 'index',
            params: {},
            views: {
                'main@': {
                    controller: 'MainCtrl',
                    templateUrl: '0210/0210Home.html'
                }
            },
            data: {
                pageMainTitle: 'K Tools',
                displayName: 'K Tools',
                pageSubTitle: null
            }
        })
        .state('kfs', {
            url: '/kfs',
            params: {},
            views: {
                'main@': {
                    controller: 'KfsCtrl',
                    templateUrl: 'views/fileSystem/kfs.html'
                }
            },
            data: {
                pageMainTitle: 'K File System',
                displayName: 'K File System',
                pageSubTitle: null
            }
        })
        .state('rpht', {
            url: '/rpht',
            params: {},
            views: {
                'main@': {
                    controller: 'rphRadioCtrl',
                    templateUrl: 'views/misce/rphradio.html'
                }
            },
            data: {
                pageMainTitle: 'Raphael Text Anim',
                displayName: 'Raphael Text Anim',
                pageSubTitle: null
            }
        });
}]);
