
syncApp.controller('RotatCtrl', function ($scope) {  
    $scope.sourceid = "thumbElement"; 
	$scope.pagerposition = ej.Rotator.PagerPosition.Outside;
	$scope.orientation = ej.Orientation.Horizontal;
	$scope.animationtype = "slide";
});