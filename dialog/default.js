syncApp.controller('DialogCtrl', function ($scope) {
	$scope.containment=".cols-sample-area";
    $("#btnOpen").hide();
    $scope.openDialog = function (args) {
        $("#btnOpen").hide();
        $("#dialog").ejDialog("open");
    }
    $scope.closeDialog=function(args) {
        $("#btnOpen").show();
    }
});