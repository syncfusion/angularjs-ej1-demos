syncApp.controller('TerritorySalesCrtl', function ($scope, $interval) {
	$scope.ServerUrl = '//104.207.134.201/reportserver';
    $scope.reportServiceUrl = window.baseurl + 'api/ReportViewer';
    $scope.remoteMode = ej.ReportViewer.ProcessingMode.Remote;
    $scope.ssrsReportPath = "/SSRSSamples2/Territory Sales new";

    $scope.success = function (args) {
        $compile(args.content)($scope);
    };
});