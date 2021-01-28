syncApp.controller('PivotGridKPICtrl', function ($scope) {
    $scope.dataSource = {
        data: "//bi.syncfusion.com/olap/msmdpump.dll", //data
        catalog: "Adventure Works DW 2008 SE",
        cube: "Adventure Works",
        rows: [
            {
                fieldName: "[Date].[Fiscal]"
            },
        ],
        columns: [
            {
                fieldName: "[Product].[Product Categories]"
            }
        ],
        values: [
            {
                measures: [
                    {
                        fieldName: "[Measures].[Internet Sales Amount]"
                    },
                    {
                        fieldName: "[Measures].[Growth in Customer Base Trend]"
                    }
                ],
                axis: ej.olap.AxisName.Column
            }
        ]
    };
        $scope.isResponsive = true;
        $scope.datasource = $scope.dataSource;
    });