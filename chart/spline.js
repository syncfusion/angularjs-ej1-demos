

syncApp.controller('ChartCtrl', function ($scope) {
    
	$scope.Points1 = [{ x: 'Jan', y: -1 }, { x: 'Feb', y: -1 }, { x: 'Mar', y: 2 }, { x: 'Apr', y: 8 }, 
							 { x: 'May', y: 13 }, { x: 'Jun', y: 18 }, { x: 'Jul', y: 21 }, { x: 'Aug', y: 20 },
                             { x: 'Sep', y: 16 }, { x: 'Oct', y: 10 }, { x: 'Nov', y: 4 }, { x: 'Dec', y: 0 }];
							 
	$scope.Points2 = [{ x: 'Jan', y: 3 }, { x: 'Feb', y: 3.5 }, { x: 'Mar', y: 7 }, { x: 'Apr', y: 13.5 },
                             { x: 'May', y: 19 }, { x: 'Jun', y: 23.5 }, { x: 'Jul', y: 26 }, { x: 'Aug', y: 25 },
                             { x: 'Sep', y: 21 }, { x: 'Oct', y: 15 }, { x: 'Nov', y: 9 }, { x: 'Dec', y: 3.5 }];
							 
	$scope.Points3 =  [{ x: 'Jan', y: 7 }, { x: 'Feb', y: 8 }, { x: 'Mar', y: 12 }, { x: 'Apr', y: 19 }, 
                              { x: 'May', y: 25 }, { x: 'Jun', y: 29 }, { x: 'Jul', y: 31 }, { x: 'Aug', y: 30 },
                              { x: 'Sep', y: 26 }, { x: 'Oct', y: 20 }, { x: 'Nov', y: 14 }, { x: 'Dec', y: 8 }];
	$('#splinemode').change(function () {
	    var chart = $("#container").ejChart("instance");
	    var count = chart.model.series.length;
	    var type = $("#splinemode option:selected").text();
	    for (var i = 0; i < count; i++) {
	        chart.model.series[i].splineType = type.toLowerCase();
	        if (type == "Cardinal")
	            $("#tension").ejNumericTextbox("option", "enabled", true);
	        else
	            $("#tension").ejNumericTextbox("option", "enabled", false);
	    }
	    chart.redraw();
	});
	$("#tension").ejNumericTextbox({
	    value: 0.5, width: "100px", minValue: 0, maxValue: 1, incrementStep: 0.1, decimalPlaces: 1, enabled: false, change: "changeSplineTension",
	});
});

	
 

function changeSplineTension(e) {
    var chart = $("#container").ejChart("instance");
    var count = chart.model.series.length;
    for (var i = 0; i < count; i++) {
        chart.model.series[i].cardinalSplineTension = parseFloat(tension.value);
    }
    chart.redraw();
}

