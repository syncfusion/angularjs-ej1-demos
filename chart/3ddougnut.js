
syncApp.controller('ChartCtrl', function ($scope) {
	 $scope.CommonOptionsProperties = {
                labelPosition: 'outside',
                tooltip: { visible: true, format: "#point.x# : #point.y#%" },
		        marker:
				{
					dataLabel: 
					{ 
						shape: 'none', 
						visible: true, 
						textPosition: 'top', 
						border: { width: 1},
						connectorLine: { height: 30, stroke:'black' } 
					}
                }
            };
			
	$scope.SeriesOptionsProperties = 	[
                {
                    points: [{ x: "Watching TV", text: "Watching TV", y: 56 },
							 { x: "Socializing", text: "Socializing", y: 26 }, 
							 { x: "Reading", text: "Reading", y: 3 }, 
							 { x: "Sports", text: "Sports", y: 7 }, 
							 { x: "Others", text: "Others", y: 8 }], 
							 
					type: 'doughnut', 
					explodeIndex: 4, 
					doughnutCoefficient: 0.5, 
					doughnutSize: 0.8
                }
            ];
});

