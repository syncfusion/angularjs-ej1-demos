syncApp.controller('PivotClientPagingCtrl', function ($scope) {
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
                fieldName: "[Date].[Date]"
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
        ],
        pagerOptions: {
            categoricalPageSize: 3,
            seriesPageSize: 3,
            categoricalCurrentPage: 1,
            seriesCurrentPage: 1
        }
    };
    $scope.customObject = { Language: "en-US" };
    $scope.dataSource = $scope.datasource;
    $scope.renderPivotClient = function (args) {
        var vScrolling = $('#vScrolling').data("ejRadioButton"), paging = $('#paging').data("ejRadioButton");
        $(".e-pivotclient").remove();
        var clientData = {
            data: "//bi.syncfusion.com/olap/msmdpump.dll",
            catalog: "Adventure Works DW 2008 SE", cube: "Adventure Works",
            columns: [{ fieldName: "[Customer].[Customer Geography]" }], rows: [{ fieldName: "[Date].[Date]" }],
            values: [{ measures: [{ fieldName: "[Measures].[Internet Sales Amount]" }], axis: "columns" }],
            filters: [],
            pagerOptions: {
                categoricalPageSize: 3,
                seriesPageSize: 3,
                categoricalCurrentPage: 1,
                seriesCurrentPage: 1
            }
        }
        var targetPanel = ej.buildTag("div#PivotClientPaging", "", { "min-height": "300px", width: "100%" })[0].outerHTML;
        if (paging.model.checked) {
            $(targetPanel).appendTo(".control");
            $("#PivotClientPaging").ejPivotClient({ dataSource: clientData, enablePaging: true, title: "OLAP Browser", beforeExport: "Export", saveReport: "saveReportSettings", fetchReport: "saveReportSettings", loadReport: "saveReportSettings" });
        }
        else {
            $(targetPanel).appendTo(".control");
            $("#PivotClientPaging").ejPivotClient({ dataSource: clientData, enableVirtualScrolling: true, title: "OLAP Browser", beforeExport: "Export", saveReport: "saveReportSettings", fetchReport: "saveReportSettings", loadReport: "saveReportSettings" });
        }
    }
});

function setChartProperties(args) {
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