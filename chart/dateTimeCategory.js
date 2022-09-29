
syncApp.controller('ChartCtrl', function ($scope) {
			
	$scope.TooltipFormat = "Date : #point.x#  <br/> Sales : #point.y# ";
	$scope.Points1 = [{ x: new Date(2015, 02, 02), y: 30 }, { x: new Date(2015, 02, 03), y: 50 }, 
						   { x: new Date(2015, 02, 04), y: 45 }, { x: new Date(2015, 02, 05), y: 65 }, 
						   { x: new Date(2015, 02, 06), y: 90 }, { x: new Date(2015, 02, 09), y: 85 },
						   { x: new Date(2015, 02, 10), y: 30 }, { x: new Date(2015, 02, 11), y: 55 }, 
						   { x: new Date(2015, 02, 12), y: 25 }, { x: new Date(2015, 02, 13), y: 40 }, 
						   { x: new Date(2015, 02, 16), y: 75 }, { x: new Date(2015, 02, 17), y: 70 },
					       { x: new Date(2015, 02, 18), y: 60 }, { x: new Date(2015, 02, 19), y: 30 }, 
						   { x: new Date(2015, 02, 20), y: 15 }
						   ];
							
});

	

