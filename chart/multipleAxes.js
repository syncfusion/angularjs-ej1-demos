var chartData = window.chartData;
syncApp.controller('ChartCtrl', function ($scope) {
	
	$scope.TooltipFormat = " #series.name#  <br/> #point.x# : #point.y#";
	$scope.Points1 =  [{ x: "Jan", y: 15 }, { x: "Feb", y: 20 }, { x: "Mar", y: 35 }, { x: "Apr", y: 40 }, 
							 { x: "May", y: 80 }, { x: "Jun", y: 70 }, { x: "Jul", y: 65 }, { x: "Aug", y: 55 }, 
							 { x: "Sep", y: 50 }, { x: "Oct", y: 30 }, { x: "Nov", y: 35 }, { x: "Dec", y: 35 }];
   $scope.Points2 = [{ x: "Jan", y: 33 }, { x: "Feb", y: 31 }, { x: "Mar", y: 30 }, { x: "Apr", y: 28 },
                             { x: "May", y: 29 }, { x: "Jun", y: 30 }, { x: "Jul", y: 33 }, { x: "Aug", y: 32 },
                             { x: "Sep", y: 34 }, { x: "Oct", y: 32 },  { x: "Nov", y: 32 }, { x: "Dec", y: 31 }];
  $scope.Points3 =  [{ x: "Jan", y: 28 }, { x: "Feb", y: 28.3 }, { x: "Mar", y: 28.7 }, { x: "Apr", y: 29 },
                             { x: "May", y: 29.5 }, { x: "Jun", y: 29 }, { x: "Jul", y: 28.9 }, { x: "Aug", y: 28.4 },
                             { x: "Sep", y: 28.6 }, { x: "Oct", y: 28 }, { x: "Nov", y: 28.2 }, { x: "Dec", y: 28 }];
	$scope.Axes = [
                {
                    majorGridLines:
                        {
							visible: false
                        },
                    orientation: 'Vertical',
                    rowIndex: "1",
                    opposedPosition: true,
                    axisLine: { visible: false },
                    range: { min: 24, max: 36, interval: 2 },
                    name: 'yAxis',
                    labelFormat: '{value}C',
                    title: { text: "Temperature(Celsius)" }
                },

                {
                    orientation: 'Vertical',
                    hidePartialLabels: false,
                    rowIndex: 1,
					plotOffset:20,
					range: { min: 24, max: 30, interval: 2 },
                    majorGridLines: { visible: true },
                    axisLine: { visible: false },
                    name: 'yAxis1',
                    labelFormat: '{value}K',
                    title: { text: "Temperature(Kelvin)" },
                    opposedPosition: false
                }
            ];

});

 
	
	

