syncApp.controller('SplitterCtrl', function ($scope) {
    $scope.proper1 = [{ paneSize: 60, minSize: 30 }, { minSize: 30 }];
	$scope.proper2 = [{ paneSize: "33%", minSize: 30 }, { paneSize: "33%", minSize: 30 }, {minSize: 30 }];
})