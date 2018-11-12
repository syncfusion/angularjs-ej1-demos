syncApp.controller('reportdesignerCrtl', function ($scope, $interval) {
    $scope.serviceUrl = window.baseurl + 'api/ReportDesigner';
    $scope.openReport = function() {
   	    var designer = $('#container').data('ejReportDesigner');
        designer.openReport('/Catagory2/Tickets Sales Analysis');
	};
});