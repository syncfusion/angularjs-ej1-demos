
syncApp.controller('ChartCtrl', function ($scope) {
  $scope.ChartData = window.chartData;
  $scope.Axes = [	
			{
				opposedPosition: true,
				name: 'yaxis',
				majorGridLines: {visible: false}
			}
		];
  $scope.TooltipFormat = "#point.x#<br/>Open : $#point.open#<br/>High : $#point.high#<br/>Low : $#point.low#<br/>Close : $#point.close#<br/>";  
  $('#signalLine').change(function () 
	{
        var option = $("#signalLine option:selected").text();
        var chart = $("#chartContainer").ejChart("instance");
		var value =getColorValue(option);
		chart.model.indicators[0].fill=value;
        $("#chartContainer").ejChart("redraw");
    });
});


	
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
	

