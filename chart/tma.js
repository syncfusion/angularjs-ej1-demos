 var chartData = window.chartData;

syncApp.controller('ChartCtrl', function ($scope) {
	$scope.load = "onchartloading";
	 $scope.Axes =  [
                {
                    name: 'yaxis',
					labelFormat: '{value}',
                    opposedPosition: true,											
                    range: {min:55, max:75,interval:5}
                }			
			];
	$scope.TooltipFormat = "#point.x#<br/>Open : $#point.open#<br/>High : $#point.high#<br/>Low : $#point.low#<br/>Close : $#point.close#<br/>" ;
			$("#period").ejNumericTextbox({
                value: 14, width: "80px", minValue :1, maxValue: 50, change: "period", 
            });
			
		
$('#signalLine').change(function ()
		{
			var option = $("#signalLine option:selected").text();
			var chart = $("#container").ejChart("instance");
			var value =getColorValue(option);
			chart.model.indicators[0].fill=value;
			$("#container").ejChart("redraw");
		});       
		
		$("#period").change(function () 
		{
			var chart = $("#container").ejChart("instance");
			var num = parseInt(period.value);
			chart.model.indicators[0].period = num;
			chart.redraw();
		});
		$("#container").ejWaitingPopup({ showOnInit: false })
	
	$(document).on("click", ".render", function ()
	{
        renderCanvas();
    });
	
});

 function onchartloading(sender) 
	 {
		loadTheme(sender);
        sender.model.series[0].dataSource = window.chartData;
        sender.model.series[0].xName = "xDate";
        sender.model.series[0].open = "Open";
        sender.model.series[0].high = "High";
        sender.model.series[0].low = "Low";
        sender.model.series[0].close = "Close";
    }
	

	
	function getColorValue(name)
	{
		var val;
		switch(name)
		{
			case "Red":
				val="#FF0000";
			break;
			case "Green":
				val="#009900";
			break;
			case "Yellow":
				val="#D8B213";
			break;
			case "Blue":
				val="#0000FF";
			break;	   
		}
		return val;
	}
	
	function changeIndex(period)
	{     
	    var obj=$("#container").ejChart("instance");
	    obj.model.indicators[0].period=parseInt(period.value);
		$("#container").ejChart("redraw"); 	 
	}   
	
	function track(sender)
	{
        sender.data.Location.X = sender.data.Location.X + 1;
            if (sender.data.Series.name == "indicator")
			{
                if (this.model.indicators[0].segment.length > 0) 
				{
                    if (this.model.indicators[0].segment[0].points[sender.data.pointIndex].y != null)
                        sender.data.currentText = sender.data.currentText + "Signal Line " + " :" + "  $"
						+ this.model.indicators[0].segment[0].points[sender.data.pointIndex].y.toFixed(2) + "<br/>";
                    else
                        sender.data.currentText = sender.data.currentText + "Signal Line " + " :" + "  $"
						+ this.model.indicators[0].segment[0].points[sender.data.pointIndex].y + "<br/>";
                }
            }
    }
	
	  function period(sender)
	{
       var chartObj = $("#container").ejChart("instance");
       chartObj.model.indicators[0].period=parseInt(sender.value);
       $("#container").ejChart("redraw");
    }
	

