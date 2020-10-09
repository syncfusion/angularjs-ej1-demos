

syncApp.controller('SplitterCtrl', function ($scope) {
    $scope.properties1 = [{ paneSize: 60, minSize: 30 }, { minSize: 30 }];
	$scope.properties2 = [{ paneSize: "40%", minSize: 30 }, { paneSize: "30%", minSize: 30 }, { minSize: 30 }];
})
