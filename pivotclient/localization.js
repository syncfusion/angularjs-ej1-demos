syncApp.controller('PivotClientLocalizationCtrl', function ($scope) {
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
    $scope.locale = ["en-US", "fr-FR", "es-ES"];
    $scope.localeText = "en-US";
    $scope.localeChange = function (args) {
        $("#PivotClientLocalization").remove();
        var clientpannel = ej.buildTag("div#PivotClientLocalization", "", { "min-height": "275px", "min-width": " 525px" })[0].outerHTML;
        $(clientpannel).appendTo(".control");
        $("#PivotClientLocalization").ejPivotClient({
            dataSource: {
                data: "//bi.syncfusion.com/olap/msmdpump.dll; Locale Identifier=" + (args.value == "fr-FR" ? "1036" : args.value == "es-ES" ? "1034" : "1033"), //data
                catalog: "Adventure Works DW 2008 SE",
                cube: "Adventure Works",
                rows: [
                    {
                        fieldName: "[Date].[Fiscal]"
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
            },
            title: "OLAP Browser Language: " + args.value, locale: args.value,
            chartLoad: "setChartProperties", beforeExport: "Export",
            saveReport: "saveReportSettings",
            fetchReport: "saveReportSettings",
            loadReport: "saveReportSettings"
        });
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