
syncApp.controller('PivotChartNamedsetCtrl', function ($scope) {
    $scope.dataSource = {
        data: "//bi.syncfusion.com/olap/msmdpump.dll", //data
        catalog: "Adventure Works DW 2008 SE",
        cube: "Adventure Works",
        rows: [
            {
                fieldName: "[Core Product Group]", isNamedSets: true
            }
        ],
        columns: [
            {
                fieldName: "[Customer].[Customer Geography]"
            }
        ],
        values: [
            {
                measures: [
                    {
                        fieldName: "[Measures].[Internet Sales Amount]"
                    }
                ],
                axis: "columns"
            }
        ]
    };

    $scope.dataSource = $scope.dataSource;
    $scope.title = "PivotChart in Essential JS";
    $scope.isResponsive = true;
	$scope.zooming = { enableScrollbar : true};
    $scope.ctype = ej.PivotChart.ChartTypes.Column;
    $scope.showTooltip = true;
    $scope.size = { height: "480px", width: "95%" };
    $scope.primaryXAxis = { labelRotation: 0 };
    $scope.primaryYAxis = { title: { text: "Amount" } };
    $scope.legend = { visible: true, rowCount: 2 };
});