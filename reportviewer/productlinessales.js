syncApp.controller('ProductLinesSalesCrtl', function ($scope, $interval) {
    $scope.reportServiceUrl = window.baseurl + 'api/ReportViewer';
    $scope.remoteMode = ej.ReportViewer.ProcessingMode.Remote;
    $scope.rdlReportPath = 'ProductLineSales.rdl';

    $scope.success = function (args) {
        $compile(args.content)($scope);
    };
});