 
syncApp.controller('ChartCtrl', function ($scope) {
$scope.Points1 = [{ x: 'N', y: 0.1 }, { x: 'NNE', y: 0.1 }, { x: 'NE', y: 0.1 }, { x: 'ENE', y: 0.1 }, 
							  { x: 'E', y: 0.1 }, { x: 'ESE', y: 0.1 }, { x: 'SE', y: 0.1 }, { x: 'SSE', y: 0.1 },
                              { x: 'S', y: 0.1 }, { x: 'SSW', y: 0.1 }, { x: 'SW', y: 0.1 }, { x: 'WSW', y:0.1 }, 
							  { x: 'W', y: 0.1 }, { x: 'WNW', y: 0.1 }, { x: 'NW', y: 0.1 }, { x: 'NNW', y: 0.1 }];

$scope.Points2 =  [{ x: 'N', y: 0.8 }, { x: 'NNE', y: 0.7 }, { x: 'NE', y: 0.8 }, { x: 'ENE', y: 0.6 }, 
							 { x: 'E', y: 0.7 }, { x: 'ESE', y: 0.6 }, { x: 'SE', y: 0.5 }, { x: 'SSE', y: 0.7 },
                             { x: 'S', y: 0.9 }, { x: 'SSW', y: 1.9 }, { x: 'SW', y: 1.9 }, { x: 'WSW', y: 0.9 }, 
							 { x: 'W', y: 1.8 }, { x: 'WNW', y: 1.9 }, { x: 'NW', y: 1.4 }, { x: 'NNW', y: 0.9 }];
							 
$scope.Points3 =  [{ x: 'N', y: 1 }, { x: 'NNE', y: 0.9 }, { x: 'NE', y: 0.7 }, { x: 'ENE', y: 0.9 }, 
							 { x: 'E', y: 0.9 }, { x: 'ESE', y: 0.8 }, { x: 'SE', y: 0.7 }, { x: 'SSE', y: 1.4 },
                             { x: 'S', y: 2 }, { x: 'SSW', y: 2 }, { x: 'SW', y: 2.2 }, { x: 'WSW', y: 1.8 }, 
							 { x: 'W', y: 1.6}, { x: 'WNW', y:1.2 }, { x: 'NW', y: 2}, { x: 'NNW', y: 1.8 }];
$scope.Points4 = [{ x: 'N', y: 0.8 }, { x: 'NNE', y: 0.7 }, { x: 'NE', y: 0.8 }, { x: 'ENE', y: 1 },
							 { x: 'E', y: 0.6 }, { x: 'ESE', y: 0.5 }, { x: 'SE', y:0.4 }, { x: 'SSE', y: 0.4 },
                             { x: 'S', y: 1.2 }, { x: 'SSW', y: 2.5 }, { x: 'SW', y: 2 }, { x: 'WSW', y: 1.1 }, 
							 { x: 'W', y: 1.8 }, { x: 'WNW', y: 1.2 }, { x: 'NW', y: 2.5 }, { x: 'NNW', y: 1.1 }];
							 
 $scope.Points5 = [{ x: 'N', y: 0.8 }, { x: 'NNE', y: 0.7 }, { x: 'NE', y: 0.5}, { x: 'ENE', y: 0.4 }, 
							 { x: 'E', y: 0.9 }, { x: 'ESE', y: 0.7 }, { x: 'SE', y: 0.6 }, { x: 'SSE', y: 0.5 },
							 { x: 'S', y: 0.6 }, { x: 'SSW', y: 2 }, { x: 'SW', y: 1.8 }, { x: 'WSW', y: 0.8 }, 
							 { x: 'W', y: 2.1 }, { x: 'WNW', y: 1.5 }, { x: 'NW', y:2 }, { x: 'NNW', y:0.8}];
							 
$scope.Points6 = [{ x: 'N', y: 0.3 }, { x: 'NNE', y:0.3 }, { x: 'NE', y: 1.1 }, { x: 'ENE', y: 0.9 }, 
							  { x: 'E', y: 0.5 }, { x: 'ESE', y: 0.3 }, { x: 'SE', y: 0.5 }, { x: 'SSE', y: 0.4 },
                              { x: 'S', y: 0.6 }, { x: 'SSW', y: 1}, { x: 'SW', y: 1 }, { x: 'WSW', y: 0.1 },
							  { x: 'W', y: 1 }, { x: 'WNW', y: 1.3 }, { x: 'NW', y: 1 }, { x: 'NNW', y: 0.1 }];
							  
$scope.Points7 = [{ x: 'N', y: 0.2 }, { x: 'NNE', y: 0.2 }, { x: 'NE', y: 1.2 }, { x: 'ENE', y: 1 },
							 { x: 'E', y: 0.7 }, { x: 'ESE', y: 0.8 }, { x: 'SE', y: 0.5 }, { x: 'SSE', y: 0.6 },
                             { x: 'S', y: 0.4 }, { x: 'SSW', y: 0.5 }, { x: 'SW', y: 0.4 }, { x: 'WSW', y: 0.4 },
							 { x: 'W', y: 0.4 }, { x: 'WNW', y: 1.1}, { x: 'NW', y: 0.3 }, { x: 'NNW', y: 0.4 }];
							 
$scope.Points8 = [{ x: 'N', y: 0.2 }, { x: 'NNE', y: 0.2 },{ x: 'NE', y: 0.5 }, { x: 'ENE', y: 0.4 },
							 { x: 'E', y: 0.4 },{ x: 'ESE', y: 0.3 }, { x: 'SE', y: 0.3 }, { x: 'SSE', y: 0.2 },
							 { x: 'S', y: 0.4 }, { x: 'SSW', y: 0.3 }, { x: 'SW', y: 0.2 },{ x: 'WSW', y: 0.2 },
							 { x: 'W', y: 0.4 }, { x: 'WNW', y: 1.2 },{ x: 'NW', y: 0.7 }, { x: 'NNW', y: 0.2 }];
		
});

   