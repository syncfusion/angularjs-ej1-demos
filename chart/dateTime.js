
syncApp.controller('ChartCtrl', function ($scope) {
     $scope.RangeSetting = {min: new Date(2000, 6, 1), max: new Date(2010, 6, 1), interval: 1}; 
	 $scope.Points1 = [{ x: new Date(2000, 06, 11), y: 10 }, { x: new Date(2002, 03, 07), y: 30 }, 
							 { x: new Date(2004, 03, 06), y: 15 }, { x: new Date(2006, 03, 30), y: 65 }, 
							 { x: new Date(2008, 03, 08), y: 90 }, { x: new Date(2010, 03, 08), y: 85 }];
	 $scope.TooltipFormat = "Date : #point.x#  <br/> Profit : #point.y# ";
							 
});

	

