
syncApp.controller('ChartCtrl', function ($scope) {
	$scope.load="onchartloading";
	$scope.TooltipFormat = "#point.x#  : ej.format(#point.y#,n2)";
	$scope.TooltipFormat1 = "#point.x#  : ej.format(#point.y#,n2)";
});

function onchartloading(sender) 
	{
		loadTheme(sender); 
        var data = GetData();
		sender.model.series[0].dataSource=data.Open;
		sender.model.series[0].xName="XValue";
		sender.model.series[0].yName= "YValue";
		sender.model.series[1].dataSource = data.Close;
		sender.model.series[1].xName="XValue";
		sender.model.series[1].yName= "YValue";
    }
    
	function GetData() 
	{
        var series1 = [];
        var series2 = [];
        var value = 100;
        var value1 = 120;
        for (var i = 1; i < 1000; i++)
		{
			if (Math.random() > .5) 
			{
                value += Math.random();
                value1 += Math.random();
            } 
			else 
			{
                value -= Math.random();
                value1 -= Math.random();
            }
            var point1 = { XValue: new Date(1930, i+2, i), YValue: value };
            var point2 = { XValue: new Date(1930, i+2, i), YValue: value1 };
            series1.push(point1);
            series2.push(point2);
        }
		var data = { Open: series1, Close: series2 };
        return data;
    }
	