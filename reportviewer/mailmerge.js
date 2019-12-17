syncApp.controller('MailMergeCrtl', function ($scope, $interval) {
    $scope.reportServiceUrl = window.baseurl + 'api/ReportViewer';
    $scope.remoteMode = ej.ReportViewer.ProcessingMode.Remote;
    $scope.rdlReportPath = 'MailMerge.rdl';

    $scope.success = function (args) {
        $compile(args.content)($scope);
    };
});