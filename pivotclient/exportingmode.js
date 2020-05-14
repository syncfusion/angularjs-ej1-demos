syncApp.controller('PivotClientExportCtrl', function ($scope) {
    $scope.datasource = {
        data: "//bi.syncfusion.com/olap/msmdpump.dll;Locale identifier=1033;", //data
        catalog: "Adventure Works DW 2008 SE",
        cube: "Adventure Works",
        rows: [
            {
                fieldName: "[Customer].[Customer Geography]"
            }
        ],
        columns: [
            {
                fieldName: "[Date].[Fiscal]"
            }
        ],
        values: [
            {
                measures: [
                    {
                        fieldName: "[Measures].[Customer Count]",
                    }
                ],
                axis: "columns"
            }
        ]
    };
    $scope.customObject = { Language: "en-US" };
    $scope.dataSource = $scope.datasource;
    $scope.exportingMode = ["Chart and Grid", "Chart Only", "Grid Only"];
    $scope.exportingModeText = "Chart and Grid";
    $scope.ChangeMode = function (args) {
        var clientObj = $("#PivotClientExport").data("ejPivotClient");
        clientObj.model.clientExportMode = args.value.replace(/\s/g, '').toLowerCase();
    }
});
function setChartProperties(args) {
    this.element.find(".titleText").remove();
    this.model.load = "loadTheme";
    if (args._successAction == undefined || args._successAction == "Filter") {
        this._pivotChart.model.legend.rowCount = 2;
        this._pivotChart.model.primaryXAxis = { title: { text: "Fiscal Year" }, labelRotation: 270 };
        this._pivotChart.model.primaryYAxis = { title: { text: "Internet Sales Amount" } };
    }
}
function Export(args) {
    args.url = window.baseurl + "api/PivotClient/Olap/Export";
}
function saveReportSettings(args) {
    if (args.fetchReportSetting)
        args.fetchReportSetting.url = window.baseurl + "api/PivotClient/Olap";
    else if (args.loadReportSetting)
        args.loadReportSetting.url = window.baseurl + "api/PivotClient/Olap";
    else
        args.saveReportSetting.url = window.baseurl + "api/PivotClient/Olap";
    return args;
}