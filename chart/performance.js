
syncApp.controller('ChartCtrl', function ($scope) {
	
		
});
function loadPoints()
	{			 
		var chart = $("#container").ejChart("instance");
        var data = GetData(100000);			 
        chart.model.series[0].dataSource=data.Open;
		chart.model.series[0].xName="XValue";
		chart.model.series[0].yName= "YValue";
		var dt1 = new Date();                                                   
		$("#container").ejChart("redraw");
		var dt2 = new Date();                                                  
		var elapsed = dt2.getTime() - dt1.getTime();
		$("#timeTaken").text(elapsed + " ms");                                 
    }
	
	function GetData(option) 
	{
        var series1 = [];
		var value = 0;
        for (var i = 0; i < option; i++)
		{
            value += (Math.random() * 10 - 5);
            var point1 = { XValue: i, YValue: value };
            series1.push(point1);
        }
		var data = { Open: series1 };
        return data;
    }
	
	

