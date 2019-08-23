
syncApp.controller('ChartCtrl', function ($scope) {
	
	$scope.ChartData = window.chartData;
	
	$scope.TooltipFormat = "#point.x#<br/>Open : $#point.open#<br/>High : $#point.high#<br/>Low : $#point.low#<br/>Close : $#point.close#<br/>";
	
	 $scope.Axes = [
                {
                    name: 'yaxis',
                    opposedPosition: true,
                    majorGridLines: { visible: false }
                }
			];
		
 $("#shortPeriod").ejNumericTextbox({
                value: 14, width: "80px", minValue :1, maxValue: 50, change: "shortperiod", 
            });
	    $("#longPeriod").ejNumericTextbox({
                value: 2, width: "80px", minValue :1, maxValue: 10, change: "longperiod", 
          });
		 $("#trigger").ejNumericTextbox({
                value: 14, width: "80px", minValue :1, maxValue: 50, change: "trigger", 
            });	
			
	$('#macdType').change(function () 
	{		  
        var option = $("#macdType option:selected").text();
        var chart = $("#container").ejChart("instance");
		chart.model.indicators[0].macdType=option.toLowerCase();
        $("#container").ejChart("redraw");
    });	
	
});
 
		
	function shortperiod(sender)
	{
		var chartObj = $("#container").ejChart("instance");
		chartObj.model.indicators[0].shortPeriod=parseInt(sender.value);
		$("#container").ejChart("redraw");
	}
	
	function longperiod(sender)
	{
		var chartObj = $("#container").ejChart("instance");
		chartObj.model.indicators[0].longPeriod=parseInt(sender.value);
		$("#container").ejChart("redraw");
	}
	
	function trigger(sender)
	{
		var chartObj = $("#container").ejChart("instance");
		chartObj.model.indicators[0].trigger=parseInt(sender.value);
		$("#container").ejChart("redraw");
	}	
	
	function macdTypeChange(args)
	{
        if (args.itemId != 0)
		{
			var chartObj = $("#container").ejChart("instance");
			chartObj.model.indicators[0].macdType=args.text;
			$("#container").ejChart("redraw");
		}  
	}
	
	function track(sender)
	{
		sender.data.Location.X = sender.data.Location.X + 1;
		if (sender.data.Series.name == "Hilo") 
		{
			if (this.model.indicators[0].segment.length > 0) 
			{
				if ((this.model.indicators[0].macdType == "both")) 
				{
					if (this.model.indicators[0].segment[0].points[sender.data.pointIndex].y != null)
					{
						sender.data.currentText = sender.data.currentText +
						"Histogram : " + "$" 
						+ this.model.indicators[0].segment[0].points[sender.data.pointIndex].y.toFixed(2) +
						"<br/>" + "MACD " + " :" + "  $" 
						+ this.model.indicators[0].segment[2].points[sender.data.pointIndex].y.toFixed(2) +
						"<br/>" + "Signal : " + "$" 
						+ this.model.indicators[0].segment[1].points[sender.data.pointIndex].y.toFixed(2) + "<br/>" + "<br/>";
					}
					else 
					{
						sender.data.currentText = sender.data.currentText +
						"Histogram : " + "$" + this.model.indicators[0].segment[0].points[sender.data.pointIndex].y +
						"<br/>" + "MACD " + " :" + "  $" 
						+ this.model.indicators[0].segment[2].points[sender.data.pointIndex].y +
						"<br/>" + "Signal : " + "$"
						+ this.model.indicators[0].segment[1].points[sender.data.pointIndex].y + "<br/>" + "<br/>";
					}
				}
				
				if ((this.model.indicators[0].macdType == "line")) 
				{
					if (this.model.indicators[0].segment[1].points[sender.data.pointIndex].y != null)
					{
						sender.data.currentText = sender.data.currentText +
						"MACD " + " :" + "  $" 
						+ this.model.indicators[0].segment[0].points[sender.data.pointIndex].y.toFixed(2) +
						"<br/>" + "Signal : " + "$"
						+ this.model.indicators[0].segment[1].points[sender.data.pointIndex].y.toFixed(2) + "<br/>" + "<br/>";
					}
					else 
					{
						sender.data.currentText = sender.data.currentText +
						"MACD " + " :" + "  $" 
						+ this.model.indicators[0].segment[0].points[sender.data.pointIndex].y +
						"<br/>" + "Signal : " + "$" 
						+ this.model.indicators[0].segment[1].points[sender.data.pointIndex].y + "<br/>" + "<br/>";
					}
				}
				if ((this.model.indicators[0].macdType == "histogram"))
				{
					if (this.model.indicators[0].segment[0].points[sender.data.pointIndex].y != null)
					{
						sender.data.currentText = sender.data.currentText +
                       "Histogram : " + "$" 
					   + this.model.indicators[0].segment[0].points[sender.data.pointIndex].y.toFixed(2) + "<br/>" + "<br/>";
					}
					else
					{
						sender.data.currentText = sender.data.currentText +
						"Histogram : " + "$" 
						+ this.model.indicators[0].segment[0].points[sender.data.pointIndex].y + "<br/>" + "<br/>";
					}
				}
			}
		}
	}
	

