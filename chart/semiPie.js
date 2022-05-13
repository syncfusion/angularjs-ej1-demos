syncApp.controller('ChartCtrl', function ($scope) {

	 $scope.Points1 = [{ x: 'Australia', y:53.3, text:"Australia" },
							{ x: 'China', y: 55.7, text:"China" },
							{ x: 'India', y: 60.5, text: "India" },
							{ x: 'Japan', y: 12.5, text:"Japan" },
							{ x: 'South Africa', y: 79.4, text:"South Africa" },
							{ x: 'United Kingdom', y: 70.9, text:"United Kingdom" },
							{ x: 'United States', y: 45.0, text:"United States" }];
							
	$('#startAngleSlider').ejSlider(
	{
		height:16,
		value:-90,
		minValue:-360,
		maxValue:360,
		incrementStep:1,
		change: "startAngleChange",
	});
	
	$('#endAngleSlider').ejSlider(
	{
		height:16,
		value:90,
		minValue:-360,
		maxValue:360,
		incrementStep:1,
		change: "endAngleChange",			
	});
	
	$("#optSeriesType").ejDropDownList({ "change": "seriesTypeChanged", width: "110px",selectedItemIndex:0 });
	
			
});

function seriesRender(sender)
	{
		if(sender.model.theme=="flatdark" || sender.model.theme=="gradientdark")
		sender.data.series.marker.dataLabel.connectorLine.color="white";
	}
    function startAngleChange(args)
    {
        var chart = $("#container").ejChart("instance");
		endAngle=$("#endAngleSlider a").attr("aria-label");
		chart.model.series[0].startAngle = parseInt(args.value);
		chart.model.series[0].endAngle = parseInt(endAngle);
		chart.model.series[0].enableAnimation =false;
		chart.redraw();
    }
	
	function endAngleChange(args)
    {
		var chart = $("#container").ejChart("instance");
		startAngle=$("#startAngleSlider a").attr("aria-label");
		chart.model.series[0].startAngle = parseInt(startAngle);
        chart.model.series[0].endAngle = parseInt(args.value);
		chart.model.series[0].enableAnimation =false;
        chart.redraw();
    }
	
	function seriesTypeChanged(sender)
	{
		var option = sender.selectedText;
        var chart = $("#container").ejChart("instance");
        chart.model.series[0].type = option.toLowerCase();;
		chart.model.series[0].enableAnimation =true;
        chart.redraw();
	}
	

