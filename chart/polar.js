
syncApp.controller('ChartCtrl', function ($scope) {
    $scope.Points1 = [{ x: "North", y: 42 }, { x: "NorthEast", y: 28 },
							 { x: "East", y: 40 }, { x: "SouthEast", y: 45 },
                             { x: "South", y: 20 }, { x: "SouthWest", y: 40 },
							 { x: "West", y: 25 }, { x: "NorthWest", y: 40 }];
	 $scope.Points2 = [{ x: "North", y: 63 }, { x: "NorthEast", y: 73 },
                                 { x: "East", y: 58 }, { x: "SouthEast", y: 65 },
                                 { x: "South", y: 47 }, { x: "SouthWest", y: 70 },
                                 { x: "West", y: 45 }, { x: "NorthWest", y: 70 }];
	$scope.Points3 =  [{ x: "North", y: 80 }, { x: "NorthEast", y: 88 },
                                 { x: "East", y: 79 }, { x: "SouthEast", y: 83 },
                                 { x: "South", y: 78 }, { x: "SouthWest", y: 90 },
                                 { x: "West", y: 78 }, { x: "NorthWest", y: 85 }];
});

