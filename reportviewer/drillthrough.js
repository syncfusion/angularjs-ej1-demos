syncApp.controller('DrillThroughCrtl', function ($scope, $interval) {
    $scope.reportServiceUrl = window.baseurl + 'api/ReportViewer';
    $scope.localMode = ej.ReportViewer.ProcessingMode.Local;
    $scope.rdlcReportPath = 'Sales_by_Region_2008.rdlc';
    $scope.toolBarSettings = { items: ej.ReportViewer.ToolbarItems.All & ~ej.ReportViewer.ToolbarItems.Parameters }

    $scope.success = function (args) {
        $compile(args.content)($scope);
    };
});
