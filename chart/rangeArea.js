
syncApp.controller('ChartCtrl', function ($scope) {
   $scope.load = "onchartLoading";
		
});

function onchartLoading(sender) 
			{
				loadTheme(sender);
				var data = GetData();
				sender.model.series[0].dataSource = data.Open;
				sender.model.series[0].xName = "XValue";
				sender.model.series[0].high = "high";
				sender.model.series[0].low = "low";                
			}
			
		function GetData() 
			{
				var series1 = [];
				var series2 = [];
				var value = 70;
				var value1 = 50;
				for (var i = 1; i < 1000; i++) 
				{
					if (Math.random() > .5) 
						{
							value += Math.random();                        
						} 
					else 
						{
							value -= Math.random();                      
						}
				var point1 = { XValue: new Date(1930, i + 2, i), high: value,low:value+20 };                    
				series1.push(point1);                    
				}
				var data = { Open: series1 };
				return data;
			}
	

