
syncApp.controller('PivotChartOlapCtrl', function ($scope) {
    $scope.dataSource = {
        data: "//bi.syncfusion.com/olap/msmdpump.dll", //data
        catalog: "Adventure Works DW 2008 SE",
        cube: "Adventure Works",
        rows: [{

            fieldName: "[Date].[Fiscal]"

        }],
        columns: [{

            fieldName: "[Customer].[Customer Geography]"
        }],
        values: [{

            measures: [
              { fieldName: "[Measures].[Internet Sales Amount]" },
              { fieldName: "[Measures].[customer count]" }
              ],
            axis: "columns"
        }]
    };

    $scope.dataSource = $scope.dataSource;
    $scope.title = "PivotChart in Essential JS";
    $scope.isResponsive = true;
    $scope.ctype = ej.PivotChart.ChartTypes.Column;
    $scope.showTooltip = true;
    $scope.size = { height: "600px", width: "95%" };
    $scope.primaryYAxis = { title: { text: "Customer Count" } };
    $scope.legend = { visible: true, rowCount: 4 };
    $scope.axes = [
           {
               orientation: 'vertical',
               rowIndex: 0,
               majorGridLines: { visible: false },
               axisLine: { visible: true },
               name: 'yAxisConfig',
               title: { text: "Internet Sales Amount" },
               opposedPosition: true,
               labelFormat: 'c',
           }]
    });
    

        function onBeforeRender(args) {
           for (var i = 0; i < args.series.length; i++) {
               if (args.series[i].name.indexOf("Internet Sales Amount") > -1) {
                args.series[i].yAxisName = "yAxisConfig";
                args.series[i].type = "spline";
                args.series[i].marker.visible = true;
               }
           }
        return args;
      }