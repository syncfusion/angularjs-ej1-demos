syncApp.controller('DialogCtrl', function ($scope) {
    $("#btnOpen").hide();
	$scope.containment=".cols-sample-area";
	$scope.contenturl="content/samplecontent/twitter.html";
	$scope.contenttype="ajax";
	$scope.content=".cols-sample-area";
    $scope.openDialog = function (args) {
        $("#btnOpen").hide();
        $("#dialog").ejDialog("open");
    }
    $scope.closeDialog=function(args) {
        $("#btnOpen").show();
    }
});