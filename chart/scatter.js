 
syncApp.controller('ChartCtrl', function ($scope) {		
  $scope.load = "onchartloading";
});

 function onchartloading(sender) 
	 {
		loadTheme(sender); 
        var data = GetData();
        sender.model.series[0].dataSource = data.Series1;
		sender.model.series[0].xName= "XValue";
		sender.model.series[0].yName= "YValue";
        sender.model.series[1].dataSource = data.Series2;
		sender.model.series[1].xName= "XValue";
		sender.model.series[1].yName= "YValue";
    }
	
    function GetData() 
	{
        var series1 = [];
        var series2 = [];
        var value = 100;
        var value1 = 100;
        for (var i = 1; i < 100; i++)
		{
			if (Math.random() > .5)
			{
                value += Math.random();
            } 
			else 
			{
                value -= Math.random();
            }
            var point = { XValue: i, YValue: value };
            series1.push(point);
            }
            for (var j = 1; j < 100; j = j + 2)
			{
				if (Math.random() > .5)
				{
                    value1 += Math.random();
                }
				else 
				{
                    value1 -= Math.random();
                }
            var point1 = { XValue: j, YValue: value1 };
            series2.push(point1);
            }
			var data = { Series1: series1, Series2: series2 };
			return data;
        }

