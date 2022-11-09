 var chartData = window.chartData;

syncApp.controller('ChartCtrl', function ($scope) {
		
	$scope.ChartData = chartData;
	 $scope.Axes = [
                {
                    name: 'yaxis',
                    opposedPosition: true,
                    majorGridLines: { visible: false },
					range:{min:0,max:100,interval:10}
                }
			];
			
		$("#period").ejNumericTextbox({
                value: 14, width: "80px", minValue :1, maxValue: 50, change: "period", 
            });
	    $("#kperiod").ejNumericTextbox({
                value: 2, width: "80px", minValue :1, maxValue: 10, change: "kperiod", 
          });
		 $("#dperiod").ejNumericTextbox({
                value: 14, width: "80px", minValue :1, maxValue: 50, change: "dperiod", 
            });
	
	$('#upLine').change(function () 
	{
        var option = $("#upLine option:selected").text();
        var chart = $("#container").ejChart("instance");
		var value =getColorValue(option);
		chart.model.indicators[0].upperLine.fill=option.toLowerCase();
         $("#container").ejChart("redraw");
    });
	
	$('#signalLine').change(function () 
	{
        var option = $("#signalLine option:selected").text();
        var chart = $("#container").ejChart("instance");
		var value =getColorValue(option);
		chart.model.indicators[0].fill=option.toLowerCase();
        $("#container").ejChart("redraw");
    });
	
	$('#lowLine').change(function () 
	{
        var option = $("#lowLine option:selected").text();
        var chart = $("#container").ejChart("instance");
		var value =getColorValue(option);
		chart.model.indicators[0].lowerLine.fill=option.toLowerCase();
        $("#container").ejChart("redraw");
    });
	
	$('#periodLine').change(function () 
	{
        var option = $("#periodLine option:selected").text();
        var chart = $("#container").ejChart("instance");
		var value =getColorValue(option);
		chart.model.indicators[0].periodLine.fill=option.toLowerCase();
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
				if (this.model.indicators[0].segment[3].points[sender.data.pointIndex].y != null)
                sender.data.currentText = sender.data.currentText + "Stochastic : " + "$" 
				+ this.model.indicators[0].segment[2].points[sender.data.pointIndex].y.toFixed(2) 
				+ "<br/>Signal : " + "$" 
				+ this.model.indicators[0].segment[3].points[sender.data.pointIndex].y.toFixed(2) + "<br/>";
            else
                sender.data.currentText = sender.data.currentText + "Stochastic : " + "$" 
				+ this.model.indicators[0].segment[2].points[sender.data.pointIndex].y 
				+ "<br/>Signal : " + "$" 
				+ this.model.indicators[0].segment[3].points[sender.data.pointIndex].y + "<br/>";
			}
		}
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
				val="#FFFF00";
			break;
			case "Gold":
				val="#FFD700";
			break;
			case "Silver":
				val="#C0C0C0";
			break;
			case "Blue":
				val="#0000FF";
			break;	   
		}
		return val;
	}
	
    function period(sender)
	{
		var chartObj = $("#container").ejChart("instance");
		chartObj.model.indicators[0].period=parseInt(sender.value);
		$("#container").ejChart("redraw");
    }
	
	function kperiod(sender) 
	{
		var chartObj = $("#container").ejChart("instance");
		chartObj.model.indicators[0].kPeriod=parseInt(sender.value);
		$("#container").ejChart("redraw");
    }
	
	function dperiod(sender)
	{
		var chartObj = $("#container").ejChart("instance");
		chartObj.model.indicators[0].dPeriod=parseInt(sender.value);
		$("#container").ejChart("redraw");
    }
	

