syncApp.controller('DialogCtrl', function ($scope) {
	$scope.target=".control";
	$scope.containment=".cols-sample-area";
	$scope.tooltip={ close: "بند کریں" };
    $("#btnOpen").hide();
    $scope.openDialog = function (args) {
        $("#btnOpen").hide();
        $("#rtlDialog").ejDialog("open");
    }
    $scope.closeDialog=function(args) {
        $("#btnOpen").show();
    }
});