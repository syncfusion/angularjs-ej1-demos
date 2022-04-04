syncApp.controller('PivotClientWCFCtrl', function ($scope) {
    $scope.customObject = { Language: "en-US" };
    $scope.url = window.baseurl + 'wcf/PivotClient/Relational.svc';
	$scope.serviceMethodSettings = { initialize: "Initialize", nodeDropped: "DropNode", memberExpand: "ExpandMember", cubeChanged: "CubeChange", measureGroupChanged: "MeasureGroup" };
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
        args.fetchReportSetting.url = window.baseurl + "api/PivotClient/Relational";
    else if (args.loadReportSetting)
        args.loadReportSetting.url = window.baseurl + "api/PivotClient/Relational";
    else
        args.saveReportSetting.url = window.baseurl + "api/PivotClient/Relational";
    return args;
}