syncApp.controller('ConditionalFormattingCrtl', function ($scope, $interval) {
    $scope.reportServiceUrl = window.baseurl + 'api/ReportViewer';
    $scope.remoteMode = ej.ReportViewer.ProcessingMode.Remote;
    $scope.rdlReportPath = 'ConditionalFormating.rdl';

    $scope.success = function (args) {
        $compile(args.content)($scope);
    };
});