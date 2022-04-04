syncApp.controller('PivotGridNamedSetCtrl', function ($scope) {
    $scope.dataSource = {
        data: "//bi.syncfusion.com/olap/msmdpump.dll", //data
        catalog: "Adventure Works DW 2008 SE",
        cube: "Adventure Works",
        rows: [
            {
                fieldName: "[Date].[Fiscal]"
            }
        ],
        columns: [
            {
                fieldName: "[Core Product Group]", isNamedSets: true
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
        $scope.isResponsive = true;
        $scope.datasource = $scope.dataSource;
    });