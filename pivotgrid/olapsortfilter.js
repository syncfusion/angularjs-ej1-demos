syncApp.controller('PivotGridFilterCtrl', function ($scope) {
    $scope.dataSource = {
        data: "//bi.syncfusion.com/olap/msmdpump.dll",
        enableAdvancedFilter: true,
        catalog: "Adventure Works DW 2008 SE",
        cube: "Adventure Works",
        rows: [{
            fieldName: "[Date].[Fiscal]",
            advancedFilter: [{
                name: "[Date].[Fiscal].[Fiscal Year]",
                labelFilterOperator: ej.olap.LabelFilterOptions.EndsWith,
                advancedFilterType: "label",
                values: ["002"]
            }]
        }],
        columns: [{
            fieldName: "[Customer].[Customer Geography]"
        }],
        values: [{
            measures: [{
                fieldName: "[Measures].[Internet Sales Amount]",
            }],
            axis: "columns"
        }]
    };
        $scope.isResponsive = true;
        $scope.datasource = $scope.dataSource;
    });