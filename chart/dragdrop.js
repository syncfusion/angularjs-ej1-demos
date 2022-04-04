
syncApp.controller('ChartCtrl', function ($scope) {

   $scope.RangeSetting = {min: new Date(2015, 01, 01), max: new Date(2015, 05, 01), interval: 1};	
   
   $scope.Points1 =  [
							{ x: new Date(2015, 01, 01), y: 950,  size:9.5}, 
							{ x: new Date(2015, 02, 01), y: 1200, size:12}, 
							{ x: new Date(2015, 03, 01), y: 1000, size:10}, 
							{ x: new Date(2015, 04, 01), y: 1350, size:13.5},							
							{ x: new Date(2015, 05, 01), y: 1150, size:11.5}
				    ];
	$scope.Points2 = [     
							{ x: new Date(2015, 01, 01), y: 700, size:7 }, 
							{ x: new Date(2015, 02, 01), y: 900, size:9 }, 
							{ x: new Date(2015, 03, 01), y: 800, size:8 }, 
							{ x: new Date(2015, 04, 01), y: 1050,size:10.5 },							 
							{ x: new Date(2015, 05, 01), y: 950,  size:9.5 }
				    ];
					
        $('#enabledrag').change(function () {
            var chart = $("#container").ejChart("instance");
            for (var i = 0; i < chart.model.series.length; i++) {
                if ($("#enabledrag").is(":checked"))
                    chart.model.series[i].dragSettings.enable = true;
                else
                    chart.model.series[i].dragSettings.enable = false;
            }
            chart.redraw();
        });        
        $('#dragtype').change(function () {
            var option = $("#dragtype option:selected").text();			
            $("#container").ejChart("option", { "commonSeriesOptions": { dragSettings: { type: option } } });
        });
        $('#charttype').change(function () {
            var option = $("#charttype option:selected").text();
			option = option.replace(/\s/g,'');
			var seriestype= option.toLowerCase();           
            $("#container").ejChart("option", { "commonSeriesOptions": { type: option } });
			if(seriestype== "bar" || seriestype== "column"||seriestype== "bubble")
				$("#container").ejChart("option", { "commonSeriesOptions":{marker:{visible:false}}});
			else if(seriestype=="scatter")							
				$("#container").ejChart("option", { "commonSeriesOptions":{marker:{size:{height: 10, width: 10}}}});
		    else
				$("#container").ejChart("option", { "commonSeriesOptions":{marker:{visible:true,size:{height: 6, width: 6}}}});
        });
});

	

