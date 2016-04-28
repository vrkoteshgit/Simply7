/**
 * @ngdoc object
 * @description
 *
 */
(function() {
    'use strict';
    angular.module('ktoolsApp.simply7', [])
        .config(['$stateProvider', function($stateProvider) {
           $stateProvider.state('s7', {
                url: '/s7',
                parent: 'index',
                params: {},
                views: {
                    'main@': {
                        controller: 'Simply7Ctrl',
                        templateUrl: 'simply/Simply7_index.html'

                        //templateUrl: 'simply/Simply7_Home.htm'
                    }
                },
                data: {
                    pageMainTitle: 'Simply Seven',
                    displayName: 'Simply Seven',
                    pageSubTitle: null
                }
            })
           .state('s7sh', {
                url: '/s7sh',
                parent: 'index',
                params: {},
                views: {
                    'main@': {
                        controller: 'Simply7ScheduleCtrl',
                        templateUrl: 'modules/simply7/simply7.schedule.template.html'
                    }
                },
                data: {
                    pageMainTitle: 'Simply Schedule',
                    displayName: 'Simply Schedule',
                    pageSubTitle: null
                }
            })
            .state('1', {
                url: '/1',
                parent: 'index',
                params: {},
                views: {
                    'main@': {
                        controller: 'Simply7Ctrl',
                        templateUrl: 'simply/1/1.htm'
                    }
                },
                data: {
                    pageMainTitle: '1',
                    displayName: '1',
                    pageSubTitle: null
                }
            })
            .state('2', {
                url: '/2',
                parent: 'index',
                params: {},
                views: {
                    'main@': {
                        controller: 'Simply7Ctrl',
                        templateUrl: 'simply/2/2.htm'
                    }
                },
                data: {
                    pageMainTitle: '2',
                    displayName: '2',
                    pageSubTitle: null
                }
            })
            .state('3', {
                url: '/3',
                parent: 'index',
                params: {},
                views: {
                    'main@': {
                        controller: 'Simply7Ctrl',
                        templateUrl: 'simply/3/3.htm'
                    }
                },
                data: {
                    pageMainTitle: '3',
                    displayName: '3',
                    pageSubTitle: null
                }
            })
            .state('4', {
                url: '/4',
                parent: 'index',
                params: {},
                views: {
                    'main@': {
                        controller: 'SsevenMenuCtrl',
                        templateUrl: 'simply/4/4.htm'
                    }
                },
                data: {
                    pageMainTitle: '4',
                    displayName: '4',
                    pageSubTitle: null              
               }
            })
            .state('5', {
                url: '/5',
                parent: 'index',
                params: {},
                views: {
                    'main@': {
                        controller: 'Simply7Ctrl',
                        templateUrl: 'simply/5/5.htm'
                    }
                },
                data: {
                    pageMainTitle: '5',
                    displayName: '5',
                    pageSubTitle: null              
               }
            })
            .state('6', {
                url: '/6',
                parent: 'index',
                params: {},
                views: {
                    'main@': {
                        controller: 'Simply7Ctrl',
                        templateUrl: 'simply/6/6.htm'
                    }
                },
                data: {
                    pageMainTitle: '6',
                    displayName: '6',
                    pageSubTitle: null
              
               }
            })
            .state('7', {
                url: '/7',
                parent: 'index',
                params: {},
                views: {
                    'main@': {
                        controller: 'SevenCtrl',
                        templateUrl: 'simply/7/7.htm'
                    }
                },
                data: {
                    pageMainTitle: '7',
                    displayName: '7',
                    pageSubTitle: null
               }
            });
      }]);
})();