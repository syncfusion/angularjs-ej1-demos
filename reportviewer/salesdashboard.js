syncApp.controller('SalesDashboardCrtl', function ($scope, $interval) {
    $scope.reportServiceUrl = window.baseurl + 'api/ReportViewer';
    $scope.remoteMode = ej.ReportViewer.ProcessingMode.Remote;
    $scope.rdlReportPath = 'Sales Dashboard.rdl';

    $scope.success = function (args) {
        $compile(args.content)($scope);
    };
});