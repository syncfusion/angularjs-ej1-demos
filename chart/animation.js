
syncApp.controller('ChartCtrl', function ($scope) {

		$scope.Points1= [{ x: "Australia", y: 480, size: 1.8 }, { x: "China", y: 507, size: 2 }, 
							 { x: "France", y: 464, size: 1.7 }, { x: "Germany", y: 539, size: 2.4 },
                             { x: "India", y: 346, size: 1 }, {x: "Indonesia", y: 663, size: 3}, { x: "Saudi Arabia", y: 214, size: 0.6 },
							 { x: "South Afirca", y: 566, size: 2.6 }, { x: "United Kingdom", y: 460, size: 1.7 },
							 {x: "Venezuela", y: 444, size: 1.6}];
		$("#duration").ejNumericTextbox({
            groupSeparator:'', value: 2000, width: "85px", minValue :0, maxValue: 5000, incrementStep:500, change: "animationDuration" 
         });
							 
		$('#seriestype').change(function () {
		var chart = $("#container").ejChart('instance');
		var type = $('#seriestype')[0].value;
		chart.model.series[0].type = type;
		chart.model.legend.visible = type == 'pie' || type == 'doughnut';
		if (type == 'column' || type == "bar" || type == "bubble" || type == "polar")
			chart.model.series[0].marker.visible = false;
		else
			chart.model.series[0].marker.visible = true;
		chart.redraw();
	});	
	
	$('#series').change(function () {
        var chart = $("#container").ejChart("instance");
		chart.model.series[0].enableAnimation = $('#series').is(":checked");
		if ($('#series').is(":checked"))
			chart.animate();		
	});
});
	function animationDuration(sender)
	{
		var chart = $("#container").ejChart("instance");
		chart.model.series[0].animationDuration = parseInt(sender.value);
		chart.animate();
    }

	

