syncApp.controller('DrillDownCrtl', function ($scope, $interval) {
    $scope.reportServiceUrl = window.baseurl + 'api/ReportViewer';
    $scope.localMode = ej.ReportViewer.ProcessingMode.Local;
    $scope.rdlcReportPath = 'drilldown.rdlc';

    $scope.success = function (args) {
        $compile(args.content)($scope);
    };
});
