syncApp.controller('PivotChartWCFCtrl', function ($scope) {
    $scope.url = window.baseurl + "wcf/PivotChart/Relational.svc";
    $scope.title = "PivotChart in Essential JS";
    $scope.isResponsive = true;
	$scope.zooming = { enableScrollbar : true};
    $scope.ctype = ej.PivotChart.ChartTypes.Column;
    $scope.showTooltip = true;
    $scope.size = { height: "460px", width: "95%" };
    $scope.primaryXAxis = { labelRotation: 0 };
    $scope.primaryYAxis = { title: { text: "Amount" } };
    $scope.legend = { visible: true, rowCount: 2 };
	$scope.serviceMethodSettings = { initialize: "Initialize", drillDown: "Drill" };
});