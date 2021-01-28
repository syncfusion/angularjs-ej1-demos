
$(document).on("keydown", function (e) {
                if (e.altKey && e.keyCode === 74) { // j- key code.
                    $("#sliderContent")[0].focus();
                }
            });
syncApp.controller('RotatCtrl', function ($scope) {  
    $scope.sourceid = "slide"; 
	$scope.pagerposition = ej.Rotator.PagerPosition.Outside;
	$scope.orientation = ej.Orientation.Horizontal;
	$scope.animationtype = "slide";
});