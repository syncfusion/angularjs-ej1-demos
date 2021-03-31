
syncApp.controller('ChartCtrl', function ($scope) {
    $scope.size = { height: "460px", width: "100%" };
    $scope.combinationdata = [{ xName: 'Jan', yName: 45, yName1: 1000 }, { xName: 'Feb', yName: 100, yName1: 3000 }, { xName: 'March', yName: 25, yName1: 1000 }, { xName: 'April', yName: 100, yName1: 7000 }, { xName: 'May', yName: 85, yName1: 5000 }, { xName: 'June', yName: 140, yName1: 7000 }];
    $scope.combinationcommonSeriesOptions = { tooltip: { visible: true } };
    $scope.combinationprimaryXAxis = { title: { text: 'Month' } };
    $scope.combinationprimaryYAxis = { alignment: 'far', edgeLabelPlacement: 'shift', title: { text: 'Unit Sold' } };
    $scope.combinationtooltip = { format: '#point.x# <br/> Unit Sold :  #point.y# <br/>' };
    $scope.combinationtooltip1 = { format: '#point.x# <br/> Profit :  #point.y# <br/>' };
    $scope.combinationmarker = { shape: 'circle', size: { height: 8, width: 8 }, visible: true };
    $scope.combinationborder = { width: 2 };
    $scope.combinationtitle = { text: 'Sales Report ' };
    $scope.combinationlegend = { visible: true, font: { size: '15px' }, shape: 'seriesType', position: 'top', itemStyle: { width: 15, height: 15 } };
    $scope.combinationaxes = [{
        majorGridLines: { visible: false }, orientation: 'Vertical', opposedPosition: true, axisLine: { visible: false }, rangePadding: 'normal', name: 'yAxis',
        labelFormat: '${value}',
        title: { text: "Total Transactions" }
    }
    ];
    $scope.combinationsize = { height: "600" };
});

