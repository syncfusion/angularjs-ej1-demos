syncApp.controller('PivotClientCustomizationCtrl', function ($scope) {
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
    $scope.ctrlPlace = ["Tab", "Tile"];
    $scope.ctrlPlaceValue = ej.PivotClient.ControlPlacement.Tab;
    $scope.dispMode = ["Chart and Grid", "Chart Only", "Grid Only"];
    $scope.dispModeValue = ej.PivotClient.DisplayMode.ChartAndGrid;
    $scope.ApplyChanges = function (args) {
        ddlTarget1 = $('#ctrlPlace').data("ejDropDownList");
        ddlTarget2 = $('#dispMode').data("ejDropDownList");
        rbTarget1 = $('#Radio1').data("ejRadioButton"); rbTarget2 = $('#Radio2').data("ejRadioButton");
        rbTarget3 = $('#Radio3').data("ejRadioButton"); rbTarget4 = $('#Radio4').data("ejRadioButton");
        rbTarget5 = $('#Radio5').data("ejRadioButton"); rbTarget6 = $('#Radio6').data("ejRadioButton");
        clientTarget = $('#PivotClientCustomization').data("ejPivotClient");
        if (ddlTarget1.text == "Tab" && ddlTarget2.text == "Chart and Grid" && rbTarget3.model.checked && rbTarget4.model.checked)
            return false;
        else {
            var ctlPlace = ddlTarget1.model.text == "Tab" ? "tab" : ddlTarget1.model.text == "Tile" ? "tile" : "";
            var dispMode = ddlTarget2.model.text == "Chart and Grid" ? ej.PivotClient.DisplayMode.ChartAndGrid : ddlTarget2.model.text == "Chart Only" ? ej.PivotClient.DisplayMode.ChartOnly : ddlTarget2.model.text == "Grid Only" ? ej.PivotClient.DisplayMode.GridOnly : ""
            var dftView = rbTarget1.model.checked ? "grid" : rbTarget2.model.checked ? "chart" : "grid";
            var tglPanel = rbTarget3.model.checked ? true : rbTarget4.model.checked ? false : false;
            var responsive = rbTarget5.model.checked ? true : rbTarget6.model.checked ? false : false;
            if (clientTarget != null) {
                clientTarget._destroy();
                $("#PivotClientCustomization").ejPivotClient({
                    dataSource: {
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
                    title: "OLAP Browser", isResponsive: responsive,
                    displaySettings: {
                        mode: dispMode,
                        defaultView: dftView,
                        controlPlacement: ctlPlace,
                        enableTogglePanel: tglPanel,
                    }, load: "OnLoad", renderSuccess: "setChartProperties", beforeExport: "Export", saveReport: "saveReportSettings", fetchReport: "saveReportSettings", loadReport: "saveReportSettings"
                });
            }
        }
    }
});
function setChartProperties(args) {
    this.element.find(".titleText").remove();
    if (this.model.displaySettings.mode != ej.PivotClient.DisplayMode.GridOnly) {
        this.model.load = "loadTheme";
        if (args._successAction == undefined || args._successAction == "Filter") {
            this._pivotChart.model.legend.rowCount = 2;
            this._pivotChart.model.primaryXAxis = { title: { text: "Fiscal Year" }, labelRotation: 270 };
            this._pivotChart.model.primaryYAxis = { title: { text: "Internet Sales Amount" } };
        }
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