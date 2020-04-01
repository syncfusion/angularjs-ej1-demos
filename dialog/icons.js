syncApp.controller('DialogCtrl', function ($scope) {
	$scope.containment=".cols-sample-area";
	$scope.actionbuttons=["close", "collapsible", "maximize", "minimize", "pin"];
    $("#btnOpen").hide();
    $scope.openDialog = function (args) {
        $("#btnOpen").hide();
        $("#dialogIcon").ejDialog("open");
    }
    $scope.closeDialog=function(args) {
        $("#btnOpen").show();
    }
});