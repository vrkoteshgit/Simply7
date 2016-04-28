/**
 * @ngdoc object
 * @description
 *
 */
(function() {
    'use strict';
    angular.module('ktoolsApp.mainlayout', [])
        .config(['$stateProvider', function($stateProvider) {
            $stateProvider
                .state('index', {
                    abstract: false,
                    views: {
                        'header@': {
                            controller: 'MainHeaderCtrl',
                            templateUrl: 'modules/navigation/header.fixedtop.html'
                        },
                        'left-nav@': {
                            controller: 'MainMenuCtrl',
                            templateUrl: 'modules/navigation/mainmenu.html'
                        },
                        'footer@': {
                            controller: 'MainFooterCtrl',
                            templateUrl: 'modules/navigation/footer.template.html'
                        }
                    },
                    data: {
                        pageMainTitle: null,
                        pageSubTitle: null,
                        displayName: 'Index',
                        bodyClassName: ''
                    }
                });
        }]);
})();
