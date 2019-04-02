

syncApp.controller('ChartCtrl', function ($scope) {
    	$scope.Points1 = [{ x: 2005, y: 28 }, { x: 2006, y: 24 }, { x: 2006, y: 24}, { x: 2006, y: 24 },
				         { x: 2007, y: 26 }, { x: 2008, y: 27 }, { x: 2008, y: 27 }, 
						 { x: 2009, y: 32 }, { x: 2010, y: 34 }, { x: 2010, y: 34 },
						 { x: 2010, y: 34 }, { x: 2010, y: 34 },
						 { x: 2011, y: 29 }, { x: 2012, y: 31 }];
			 $("#enableSmartLabels").change(function () {
            var chart = $("#container").ejChart("instance");
            if ($("#enableSmartLabels").is(":checked"))
                chart.model.series[0].enableSmartLabels = true;
            else
			   chart.model.series[0].enableSmartLabels = false;
            chart.redraw();
        });
       
	
});

	
 

