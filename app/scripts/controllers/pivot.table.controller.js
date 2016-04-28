'use strict';

/**
 * @ngdoc function
 * @name ktoolsYoApp.controller:pivotTableCtrl
 * @description
 * # pivotTableCtrl
 * Controller of the ktoolsYoApp
 */
angular.module('ktoolsYoApp', ['agGrid'])
  .controller('pivotTableCtrl', function($scope, $http) {
    $scope.periodIndexes = [];
    var responseColumnDefs = [{
        headerName: 'PRODUCT',
        field: 2,
        width: 250
    }];
    /* for (var p = 0; p < 38; p++) {
         responseColumnDefs.push({
             headerName: p, //change header name here
             field: p,
             width: 70,
             editable: true
         });
     }*/

    function setColumnDefs() {
        $http.get('modules/pivot.table/LatestJson2.json')
            .then(function(res) {
                console.log('Response !---> ', res);
                $scope.periodIndexes = res.data.periodIds;
                console.log('periodIndexes !--->', $scope.periodIndexes);
                console.log('periods length' + $scope.periodIndexes.length);
                $scope.gridOptions.api.setRowData(res.data.csvRows);
                if ($scope.periodIndexes && $scope.periodIndexes.length > 0) {
                    console.log('inside length' + $scope.periodIndexes.length);
                    var q = 1;
                    for (var p = 20; p < $scope.periodIndexes.length; p++) {
                        if(p%3 !== 0){
                            responseColumnDefs.push({
                                headerName: $scope.periodIndexes[p],
                                headerGroup: 'Quarter' + q,
                                field: p,
                                editable: true,
                                newValueHandler: numberNewValueHandler,
                                headerGroupShow: 'open',
                                width: 100,
                                cellStyle: overrideCss
                            });
                        }else{
                            responseColumnDefs.push({
                                headerName: $scope.periodIndexes[p],
                                headerGroup: 'Quarter' + q,
                                field: p,
                                editable: true,
                                newValueHandler: numberNewValueHandler,
                                headerGroupShow: 'open',
                                width: 100,
                                cellStyle: overrideCss
                            });
                             responseColumnDefs.push({
                                headerName: 'Quarter' + q + 'Total',
                                headerGroup: 'Quarter' + q,
                                aggFunc : 'sum',
                                newValueHandler: numberNewValueHandler,
                                editable: false,
                                headerGroupShow: 'close',
                                width: 100,
                                cellStyle: {'background-color': '#F6F6F6', 'text-align': 'right', 'font-weight': 'bold'}
                            });
                            q = q + 1;
                        }
                    }
                    $scope.gridOptions.api.setColumnDefs(responseColumnDefs);
                }
                console.log('responseColumnDefs!--->', responseColumnDefs);
            });

        return responseColumnDefs;
    }
    function overrideCss(params) {
        if (params.value!==null && params.value!==undefined && params.value > 50 && params.value < 100) {
            return {'border-color': 'red', 'text-align': 'right', 'font-weight': 'bold'};
        }else if (params.value!==null && params.value!==undefined && params.value == 0.000000001) {
            return {'border-color': 'green', 'text-align': 'right', 'font-weight': 'bold'};
        }else if (params.value!==null && params.value!==undefined && params.value == 100) {
            return {'border-color': 'blue', 'text-align': 'right', 'font-weight': 'bold'};
        }else {
            return {'text-align': 'right'};
        }
    }
    
    $scope.gridOptions = {
        columnDefs: JSON.stringify(setColumnDefs()),
        rowData: null,
        groupUseEntireRow: true,
        pinnedColumnCount: 1,
        groupKeys: [5],
        groupAggFields: $scope.periodIndexes,
        groupHeaders: true,
        showToolPanel: false,
        enableColResize: true,
        onReady: function() {
            console.log('Grid ready');
        }
    };
     $scope.toggleToolPanel = function() {
        var showing = $scope.gridOptions.api.isToolPanelShowing();
        $scope.gridOptions.api.showToolPanel(!showing);
    };

    /*function groupAggFunction(nodes) {
        var colsToSum = $scope.periodIndexes;
        var sums = {};
        colsToSum.forEach(function(key) { sums[key] = 0; });

        nodes.forEach(function(node) {
            colsToSum.forEach(function(key) {
                sums[key] += node.data[key];
            });
        });
        return sums;
    }*/
    function numberNewValueHandler(params) {
        var valueAsNumber = parseFloat(params.newValue);
        var field = params.colDef.field;
        var data = params.data;
        data[field] = valueAsNumber;
    }


});
