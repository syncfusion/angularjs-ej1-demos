
syncApp.controller('ChartCtrl', function ($scope) {
     $scope.TooltipFormat = "#point.x#<br/>Open : $#point.open#<br/>High : $#point.high#<br/>Low : $#point.low#<br/>Close : $#point.close#<br/>";
	 $scope.Axes = [
                {
                    name: 'yaxis',
                    opposedPosition: true,
                    majorGridLines: { visible: false }
                }
			];
	$scope.ChartData = window.chartData;
		
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
	
});


	 function period(sender)
	{
		var chartObj = $("#container").ejChart("instance");
		chartObj.model.indicators[0].period=parseInt(sender.value);
		$("#container").ejChart("redraw");
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
	
	
	
	function track(sender) 
	{
		sender.data.Location.X = sender.data.Location.X + 1;
		if (sender.data.Series.name == "Hilo")
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
	

