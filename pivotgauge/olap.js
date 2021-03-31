﻿var scale = [{
    showRanges: true,
    radius: 150, showScaleBar: true, size: 1,
    border: {
        width: 0.5
    },
    showIndicators: true, showLabels: true,
    pointers: [{
        showBackNeedle: true,
        backNeedleLength: 20,
        length: 125,
        width: 7
    },
                {
                    type: "marker",
                    markerType: "diamond",
                    distanceFromScale: 5,
                    placement: "center",
                    backgroundColor: "#29A4D9",
                    length: 25,
                    width: 15
                }],
    ticks: [{
        type: "major",
        distanceFromScale: 2,
        height: 16,
        width: 1, color: "#8c8c8c"
    }, {
        type: "minor",
        height: 6,
        width: 1,
        distanceFromScale: 2,
        color: "#8c8c8c"
    }],
    labels: [{
        color: "#8c8c8c"
    }],
    ranges: [{
        distanceFromScale: -5,
        backgroundColor: "#fc0606",
        border: {
            color: "#fc0606"
        }
    }, {
        distanceFromScale: -5
    }],
    customLabels: [{
        position: { x: 180, y: 290 },
        font: { size: "10px", fontFamily: "Segoe UI", fontStyle: "Normal" }, color: "#666666"
    }, {
        position: { x: 180, y: 320 },
        font: { size: "10px", fontFamily: "Segoe UI", fontStyle: "Normal" }, lcolor: "#666666"
    }, {
        position: { x: 180, y: 150 },
        font: { size: "12px", fontFamily: "Segoe UI", fontStyle: "Normal" }, color: "#666666"
    }]
}];

syncApp.controller('PivotGaugeOlapCtrl', function ($scope) {
    $scope.dataSource = {
        data: "//bi.syncfusion.com/olap/msmdpump.dll",
        catalog: "Adventure Works DW 2008 SE",
        cube: "Adventure Works",
        rows: [
            {
                fieldName: "[Date].[Fiscal]",
                filterItems: { filterType: "include", values: ["[Date].[Fiscal].[Fiscal Year].&amp;[2004]"] }
            },
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
                    },
                    {
                        fieldName: "[Measures].[Internet Revenue Status]"
                    },
                      {
                          fieldName: "[Measures].[Internet Revenue Trend]"
                      },
                  {
                      fieldName: "[Measures].[Internet Revenue Goal]"
                  },
                ],
                axis: ej.PivotGauge.AxisName.Columns
            }
        ]
    };
        $scope.dataSource = $scope.dataSource;
        $scope.enableTooltip = true;
        $scope.rowsCount = 2;
        $scope.columnsCount = 3;
        $scope.scales = scale;
        $scope.labelFormatSettings = { decimalPlaces: 2 };
        $scope.backgroundColor = "transparent";
    });
