syncApp.controller('GroupingAggregateCrtl', function ($scope, $interval) {
    $scope.reportServiceUrl = window.baseurl + 'api/ReportViewer';
    $scope.remoteMode = ej.ReportViewer.ProcessingMode.Remote;
    $scope.rdlReportPath = 'GroupingAgg.rdl';

    $scope.success = function (args) {
        $compile(args.content)($scope);
    };
});