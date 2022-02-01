
syncApp.controller('ChartCtrl', function ($scope) {
	$scope.load = "onchartloading";
   		
	$scope.Axes = [
                {
                    majorGridLines:
                    {
                        visible: false
                    },
                    orientation: 'Horizontal',
                    hidePartialLabels: false,
                    rowIndex: 0,
                    valueType: 'datetime',
                    labelRotation: 90,
                    crosshairLabel: { visible: true },
                    name: 'xAxis1'
				},
                {
                    majorGridLines:
                    {
						visible: false
                    },
                    orientation: 'Vertical',
                    rowIndex: "0",
                    opposedPosition: true,
                    range:{min:0, max:160, interval:20},
                    name: 'yAxis',
                    crosshairLabel: { visible: true },
                    labelFormat: '{value}mm',
                    title: { text: "Rainfall" }
                }
			];			
	
});


    function onchartloading(sender) 
	{
        var data = GetData();
        sender.model.series[1].dataSource =data.Open;
	    sender.model.series[1].xName= "XValue",
		sender.model.series[1].yName= "YValue";
        sender.model.series[0].dataSource =  data.Close;
		sender.model.series[0].xName= "XValue",
		sender.model.series[0].yName= "YValue";
		loadTheme(sender);  
    }
	
    function GetData() 
	{
        var series1 = [];
        var series2 = [];
        var value = 100;
        var value1 = 50;
        for (var i = 1; i < 2000; i++)
		{
            if (Math.random() > .5)
			{
                value += Math.random();
            }
			else 
			{
                value -= Math.random();
            }
            var point = { XValue: new Date(1900, i, 1), YValue: value };
            series1.push(point);
        }
        for (var j = 1; j < 2000; j++) 
		{
            if (Math.random() > .5) 
			{
                value1 += Math.random();
            } 
			else 
			{
                value1 -= Math.random();
            }
            var point1 = { XValue: new Date(2000, 1, j), YValue: value1 };
            series2.push(point1);
        }
        var data = { Open: series1, Close:series2 };
        return data;
    }    

	

