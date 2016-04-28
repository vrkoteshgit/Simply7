'use strict';

/**
 * @ngdoc function
 * @name ktoolsApp.controller:MainMenuCtrl
 * @description
 * # MainMenuCtrl
 * Controller of the ktoolsApp
 */
angular.module('ktoolsApp')
  .controller('Simply7ScheduleCtrl', function ($scope, $location, $rootScope, moment, alert) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.$watchCollection('$scope.schedeuledModules', function() {
          console.log($scope.schedeuledModules);
          $rootScope.currentModules = $scope.scheduleModules;
          $scope.$emit('menuitem::added', $scope.currentModules);
    });
    $scope.bindOpen = false;
    $scope.exOpen = true;
    $scope.schOpen = true;
    $scope.schCalOpen = false;
    $scope.showLeftMenu = false;
    $scope.schEditEnabled = false;
    $scope.exEditEnabled = false;
    $scope.scheduleModules = [];
    $scope.calendarView = 'day';
    $scope.viewDate = new Date();

    $scope.calendarView = 'month';
    $scope.viewDate = new Date();
    $scope.events = [
      {
        title: 'An event',
        type: 'warning',
        startsAt: moment().startOf('week').subtract(2, 'days').add(8, 'hours').toDate(),
        endsAt: moment().startOf('week').add(1, 'week').add(9, 'hours').toDate(),
        draggable: true,
        resizable: true
      }, {
        title: '<i class="glyphicon glyphicon-asterisk"></i> <span class="text-primary">Another event</span>, with a <i>html</i> title',
        type: 'info',
        startsAt: moment().subtract(1, 'day').toDate(),
        endsAt: moment().add(5, 'days').toDate(),
        draggable: true,
        resizable: true
      }, {
        title: 'This is a really long event title that occurs on every year',
        type: 'important',
        startsAt: moment().startOf('day').add(7, 'hours').toDate(),
        endsAt: moment().startOf('day').add(19, 'hours').toDate(),
        recursOn: 'year',
        draggable: true,
        resizable: true
      }
    ];

    $scope.isCellOpen = true;

    $scope.eventClicked = function(event) {
      alert.show('Clicked', event);
    };

    $scope.eventEdited = function(event) {
      alert.show('Edited', event);
    };

    $scope.eventDeleted = function(event) {
      alert.show('Deleted', event);
    };

    $scope.eventTimesChanged = function(event) {
      alert.show('Dropped or resized', event);
    };

    $scope.toggle = function($event, field, event) {
      $event.preventDefault();
      $event.stopPropagation();
      event[field] = !event[field];
    };


    /*$scope.events = [{
      title: 'No event end date',
      startsAt: moment().hours(3).minutes(0).toDate(),
      type: 'info'
    }, {
      title: 'No event end date',
      startsAt: moment().hours(5).minutes(0).toDate(),
      type: 'warning'
    }];*/

/*    $scope.events = [{
                        title: 'My event title', // The title of the event
                        type: 'info', // The type of the event (determines its color). Can be important, warning, info, inverse, success or special
                        startsAt: new Date(), // A javascript date object for when the event starts
                        endsAt: new Date(2016,8,26,15), // Optional - a javascript date object for when the event ends
                        editable: false, // If edit-event-html is set and this field is explicitly set to false then dont make it editable.
                        deletable: false, // If delete-event-html is set and this field is explicitly set to false then dont make it deleteable
                        draggable: true, //Allow an event to be dragged and dropped
                        resizable: true, //Allow an event to be resizable
                        incrementsBadgeTotal: true, //If set to false then will not count towards the badge total amount on the month and year view
                        recursOn: 'year', // If set the event will recur on the given period. Valid values are year or month
                        cssClass: 'a-css-class-name' //A CSS class (or more, just separate with spaces) that will be added to the event when it is displayed on each view. Useful for marking an event as selected / active etc
                      }];
*/
    /*$scope.events = [];

    $scope.externalEvents = [
      {
        title: 'Event 1',
        type: 'warning',
        startsAt: moment().startOf('month').toDate(),
        draggable: true
      },
      {
        title: 'Event 2',
        type: 'danger',
        startsAt: moment().startOf('month').toDate(),
        draggable: true
      }
    ];

    $scope.calendarView = 'month';
    $scope.viewDate = moment().startOf('month').toDate();
    $scope.isCellOpen = true;

    $scope.eventDropped = function(event, start, end) {
      var externalIndex = $scope.externalEvents.indexOf(event);
      if (externalIndex > -1) {
        $scope.externalEvents.splice(externalIndex, 1);
        $scope.events.push(event);
      }
      event.startsAt = start;
      if (end) {
        event.endsAt = end;
      }
    };*/

    $scope.remove = function (scope) {
      scope.remove();
      $rootScope.currentModules = $scope.scheduleModules;
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
        content: nodeData.title + '.' + (nodeData.nodes.length + 1),
        nodes: []
      });
      $rootScope.currentModules = $scope.scheduleModules;
    };
    $scope.existingModules = [{
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
    $scope.scheduleModules = [{
      'id': 1,
      'title': 'Simply Seven',
      'routeKey': 's7',
      'nodes': []
    }];
  });