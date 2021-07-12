syncApp.controller('ChartCtrl', function ($scope) {
	$scope.load = "onchartLoading";
	$scope.Axes = [
                {
                    name: 'y1SecondQuater',
                    opposedPosition:true,
                    font: { size: '14px' },
                    title: { text: "Million USD" },
					range: { min: 82, max: 88, interval: 2 },
                    rowIndex: 0
                }
            ];
});

function onchartLoading(sender) 
	{
		loadTheme(sender);             
        sender.model.series[0].dataSource = window.chartData;  
        sender.model.series[0].xName = "xDate";
		sender.model.series[0].yName = "High";
        sender.model.series[1].dataSource = window.chartData; 
		sender.model.series[1].xName = "xDate";
		sender.model.series[1].high = "High";
		sender.model.series[1].low = "Low";
		sender.model.series[1].open = "Open";
		sender.model.series[1].close = "Close";
	}
 
	
	

