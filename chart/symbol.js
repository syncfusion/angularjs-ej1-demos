 var chartData = window.chartData;

syncApp.controller('ChartCtrl', function ($scope) {
    $scope.Points1 = [{ x: 1950, y: 0.8 }, { x: 1955, y: 1.2 }, { x: 1960, y: 0.9 }, { x: 1965, y: 1 },
							  { x: 1970, y: 0.8 }, { x: 1975, y: 1 }, { x: 1980, y: 1 }, { x: 1985, y: 1.2 }, 
							  { x: 1990, y: 1.1 }, { x: 1995, y: 1.2 }, { x: 2000, y: 1.4 }];
  $scope.Points2 = [{ x: 1950, y: 1.4 }, { x: 1955, y: 1.7 }, { x: 1960, y: 1.5 }, { x: 1965, y: 1.6 }, 
							 { x: 1970, y: 1.4 }, { x: 1975, y: 1.8 }, { x: 1980, y: 1.7 }, { x: 1985, y: 1.9 }, 
							 { x: 1990, y: 1.7 }, { x: 1995, y: 1.8 }, { x: 2000, y: 2 }];
  $scope.Points3 = [{ x: 1950, y: 2 }, { x: 1955, y: 2.4 }, { x: 1960, y: 2.2 }, { x: 1965, y: 2.5 }, 
							 { x: 1970, y: 2.2 }, { x: 1975, y: 2.4 }, { x: 1980, y: 2 }, { x: 1985, y: 2.3 },
							 { x: 1990, y: 2 }, { x: 1995, y: 2.2 }, { x: 2000, y: 2.4 }];							 
	});
	
	 function symbolChanged(sender) 
	{
        $("#container").ejChart("option", { "model": symbol(sender, sender.options[sender.selectedIndex].text) });
    }
	
    function symbol(sender, data) 
	{
        if (sender.id == "symbol") 
		{
            var symbolShape = data.toLowerCase();
            return 
			{
                series: 
				[ 
					{
                        marker:
						{
                            shape: symbolShape
                        }
                    }
				]
            };
        }
    }
		

 
	

