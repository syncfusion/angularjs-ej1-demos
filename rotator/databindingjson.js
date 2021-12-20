 var website = [
          { text: "Colorful Night", url: "content/images/rotator/night.jpg" },
		  { text: "Technology", url: "content/images/rotator/tablet.jpg" },
          { text: "Nature", url: "content/images/rotator/nature.jpg" },
          { text: "Snow Fall", url: "content/images/rotator/snowfall.jpg" },
          { text: "Credit Card", url: "content/images/rotator/card.jpg" },
          { text: "Beautiful Bird", url: "content/images/rotator/bird.jpg" },
          { text: "Amazing Sculptures", url: "content/images/rotator/sculpture.jpg" }
            ];

syncApp.controller('RotatCtrl', function ($scope) {
    $scope.dataList = website;
	$scope.pagerposition = ej.Rotator.PagerPosition.Outside;
	$scope.orientation = ej.Orientation.Horizontal;
	$scope.animationtype = "slide";
});