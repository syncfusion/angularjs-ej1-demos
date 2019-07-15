syncApp.controller('ProductSalesAnalysisCrtl', function ($scope, $interval) {
    $scope.reportServiceUrl = window.baseurl + 'api/ReportViewer';
    $scope.remoteMode = ej.ReportViewer.ProcessingMode.Remote;
    $scope.rdlReportPath = 'SalesAnalysis.rdl';

    $scope.success = function (args) {
        $compile(args.content)($scope);
    };
});