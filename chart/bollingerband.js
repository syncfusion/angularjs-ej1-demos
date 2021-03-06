
syncApp.controller('ChartCtrl', function ($scope) {
     $scope.TooltipFormat =  "#point.x#<br/>Open : $#point.open#<br/>High : $#point.high#<br/>Low : $#point.low#<br/>Close : $#point.close#<br/>" ;
	 $scope.ChartData = window.chartData;
	 $scope.Axes = [{
            opposedPosition: true,
            range:{ min:55,max:75,interval:5},
            name: 'yaxis',             
        }];

		
  $("#Period").ejNumericTextbox({
                value: 14, width: "80px", minValue :1, maxValue: 50, change: "period", 
            });
	$("#standardDeviations").ejNumericTextbox({
                value: 2, width: "80px", minValue :1, maxValue: 10, change: "standarddeviations", 
          });
		  $('#upLine').change(function () 
	{
        var option = $("#upLine option:selected").text();
        var chart = $("#container").ejChart("instance");
		var value =getColorValue(option);
		chart.model.indicators[0].upperLine.fill=value;
        $("#container").ejChart("redraw");
    });
	
	$('#signalLine').change(function () 
	{
        var option = $("#signalLine option:selected").text();
        var chart = $("#container").ejChart("instance");
		var value =getColorValue(option);
		chart.model.indicators[0].fill=value;
        $("#container").ejChart("redraw");
    });
	
	$('#lowLine').change(function ()
	{
        var option = $("#lowLine option:selected").text();
        var chart = $("#container").ejChart("instance");
		var value =getColorValue(option);
		chart.model.indicators[0].lowerLine.fill=value;
        $("#container").ejChart("redraw");
    });		
});


	function track(sender) 
	{
        sender.data.Location.X = sender.data.Location.X + 1;
            if (sender.data.Series.name == "Hilo") 
			{
                if (this.model.indicators[0].segment.length > 0) 
				{
                    if (this.model.indicators[0].segment[0].points[sender.data.pointIndex].y != null){
					  if(this.model.indicators[0].standardDeviations > 0)
                        sender.data.currentText = sender.data.currentText + "Upper Band : " + "$" 
						+ this.model.indicators[0].segment[0].points[sender.data.pointIndex].y.toFixed(2) 
						+ "<br/>Signal Line " + " :" + "  $" 
						+ this.model.indicators[0].segment[2].points[sender.data.pointIndex].y.toFixed(2) 
						+ "<br/>" + "Lower Band : " + "$" 
						+ this.model.indicators[0].segment[1].points[sender.data.pointIndex].y.toFixed(2) + "<br/>" + "<br/>";
					  else
					     sender.data.currentText = sender.data.currentText + "Signal Line " + " :" + "  $" 
						+ this.model.indicators[0].segment[2].points[sender.data.pointIndex].y.toFixed(2) +
						"<br/>" + "<br/>";
					}
                    else{
					  if(this.model.indicators[0].standardDeviations > 0)
                        sender.data.currentText = sender.data.currentText + "Upper Band : " + "$" 
						+ this.model.indicators[0].segment[0].points[sender.data.pointIndex].y 
						+ "<br/>Signal Line " + " :" + "  $" 
						+ this.model.indicators[0].segment[2].points[sender.data.pointIndex].y 
						+ "<br/>" + "Lower Band : " + "$" 
						+ this.model.indicators[0].segment[1].points[sender.data.pointIndex].y + "<br/>" + "<br/>";
					 else
						 sender.data.currentText = sender.data.currentText + "Signal Line " + " :" + "  $" 
						+ this.model.indicators[0].segment[2].points[sender.data.pointIndex].y +
						"<br/>" + "<br/>";
					}
					
                }
            }
    }
	
	function period(sender) 
	{
       var chartObj = $("#container").ejChart("instance");
       chartObj.model.indicators[0].period=parseInt(sender.value);
       $("#container").ejChart("redraw");
	}
	
	function standarddeviations(sender)
	{
       var chartObj = $("#container").ejChart("instance");
       chartObj.model.indicators[0].standardDeviations=parseInt(sender.value);
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
	

