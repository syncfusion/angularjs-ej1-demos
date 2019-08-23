 
syncApp.controller('ChartCtrl', function ($scope) {
 
	$scope.Points1 = [{ x: "South Korea", y: 39.4 }, { x: "India", y: 61.3 }, 
							 { x: "Pakistan", y: 20.4 }, { x: "Germany", y: 65.1 },
							 { x: "Australia", y: 15.8 }, { x: "Italy", y: 29.2 }, 
							 { x: "France", y: 44.6 }, { x: "Saudi Arabia", y: 9.7 },
							 { x: "Russia", y: 40.8 }, { x: "Mexico", y: 31 }, 
							 { x: "Brazil", y: 75.9 }, { x: "China", y: 51.4 }];
							 
		$("#maximumLabelWidth").bind("change",maximumLabelWidth);
	    $("#maximumLabelWidth1").bind("change",maximumLabelWidthYAxis);
	    $("#maximumLabelWidth2").bind("change", maximumLabelWidthYAxis);

        $('#optXaxisChange').change(function () 
		{
            var option = $("#optXaxisChange option:selected").text();
            var chart = $("#container").ejChart("instance");
                switch (option) 
				{
                    case 'None':
                        chart.model.primaryXAxis.labelIntersectAction = 'none';
                        chart.redraw();
                        break;
                    case 'Rotate90':
                        chart.model.primaryXAxis.labelIntersectAction = 'rotate90';
                        chart.redraw();
                        break;
                    case 'Rotate45':
                        chart.model.primaryXAxis.labelIntersectAction = 'rotate45';
                        chart.redraw();
                        break;
					  case 'WrapByWord':
                        chart.model.primaryXAxis.labelIntersectAction = 'wrapByWord';
                        chart.redraw();
                        break;
                    case 'Wrap':
                        chart.model.primaryXAxis.labelIntersectAction = 'wrap';
                        chart.redraw();
                        break;
                    case 'Hide':
                        chart.model.primaryXAxis.labelIntersectAction = 'hide';
                        chart.redraw();
                        break;
                    case 'Trim':
                        chart.model.primaryXAxis.labelIntersectAction = 'trim';
                        chart.redraw();
                        break;
                    case 'MultipleRows':
                        chart.model.primaryXAxis.labelIntersectAction = 'multiplerows';
                        chart.redraw();
                        break;
                    default:
                }
        });
		$('#optXaxisChange1').change(function () {
			var option = $("#optXaxisChange1 option:selected").text().toLowerCase();
			var chart = $("#container").ejChart("instance");
				switch (option) 
				{
					case 'true':
						chart.model.primaryXAxis.enableTrim = true;
						chart.redraw();
						break;
					case 'false':
						chart.model.primaryXAxis.enableTrim= false;
						chart.redraw();	
						break;                 
				}
		});
		$('#optYaxisChange1').change(function () {
			var option = $("#optYaxisChange1 option:selected").text().toLowerCase();
			var chart = $("#container").ejChart("instance");
				switch (option) 
				{					
				    case 'false':
						chart.model.primaryYAxis.enableTrim = false;
						chart.redraw();
						break;
					case 'true':
						chart.model.primaryYAxis.enableTrim = true;
						chart.redraw();
						break;
	
				}
		}); 
		$('#optYaxisChange2').change(function () {
			var option = $("#optYaxisChange2 option:selected").text().toLowerCase();
			var chart = $("#container").ejChart("instance");
				switch (option) 
				{					
					case 'false':
						chart.model.axes[0].enableTrim = false;
						chart.redraw();
						break;
					case 'true':
						chart.model.axes[0].enableTrim = true;
						chart.model.axes[0].maximumLabelWidth = parseFloat($("#maximumLabelWidth2").val());
						chart.redraw();
						break;
				}
		});
		$('#optYaxisChange3').change(function () {
			var option = $("#optYaxisChange3 option:selected").text().toLowerCase();
			var chart = $("#container").ejChart("instance");
			    switch (option) 
			    {				
					case 'false':
						chart.model.primaryXAxis.opposedPosition = false;
						chart.redraw();
						break;
					case 'true':
						chart.model.primaryXAxis.opposedPosition = true;
						chart.redraw();
						break;
				}
		}); 
		$('#optYaxisChange4').change(function () {
			var option = $("#optYaxisChange4 option:selected").text().toLowerCase();
			var chart = $("#container").ejChart("instance");
				switch (option) 
				{					
					case 'false':
						chart.model.primaryYAxis.opposedPosition = false;
						chart.redraw();
						break;
					case 'true':
						chart.model.primaryYAxis.opposedPosition = true;
						chart.redraw();
						break;
	
				}
		}); 
		
        $('#optYaxisChange').change(function ()
		{
            var option1 = $("#optYaxisChange option:selected").text();
            var chart = $("#container").ejChart("instance");
                switch (option1) 
				{
                    case 'None':
                        chart.model.primaryYAxis.labelIntersectAction = 'none';
                        chart.redraw();
                        break;
                    case 'Hide':
                        chart.model.primaryYAxis.labelIntersectAction = 'hide';
                        chart.redraw();
                        break;
                    case 'MultipleRows':
                        chart.model.primaryYAxis.labelIntersectAction = 'multiplerows';
                        chart.redraw();
                        break;
                    default:
                }
        });		
		
        $('#edgeLabelX').change(function () 
		{
            var option2 = $("#edgeLabelX option:selected").text();
            var chart = $("#container").ejChart("instance");
                switch (option2) 
				{
                    case 'None':
                        chart.model.primaryXAxis.edgeLabelPlacement = 'none';
                        chart.redraw();
                        break;
                    case 'Shift':
                        chart.model.primaryXAxis.edgeLabelPlacement = 'shift';
                        chart.redraw();
                        break;
                    case 'Hide':
                        chart.model.primaryXAxis.edgeLabelPlacement = 'hide';
                        chart.redraw();
                        break;
                    default:
                }
        });
		
        $('#edgeLabelY').change(function ()
		{
            var option3 = $("#edgeLabelY option:selected").text();
            var chart = $("#container").ejChart("instance");
                switch (option3)
				{
                    case 'None':
                        chart.model.primaryYAxis.edgeLabelPlacement = 'none';
                        chart.redraw();
                        break;
                    case 'Shift':
                        chart.model.primaryYAxis.edgeLabelPlacement = 'shift';
                        chart.redraw();
                        break;
                    case 'Hide':
                        chart.model.primaryYAxis.edgeLabelPlacement = 'hide';
                        chart.redraw();
                        break;
                    default:
                }
        });
		
		$('#xticklines').change(function () 
		{
            var option4 = $("#xticklines option:selected").text();
            var chart = $("#container").ejChart("instance");
                switch (option4)
				{
                    case 'None':
                        chart.model.primaryXAxis.tickLinesPosition = 'outside';
                        chart.redraw();
                        break;
                    case 'Inside':
                        chart.model.primaryXAxis.tickLinesPosition = 'inside';
                        chart.redraw();
                        break;
                    case 'Outside':
                        chart.model.primaryXAxis.tickLinesPosition = 'outside';
                        chart.redraw();
                        break;
                    default:
                }
        });
		
		$('#yticklines').change(function () 
		{
            var option5 = $("#yticklines option:selected").text();
            var chart = $("#container").ejChart("instance");
                switch (option5)
				{
                    case 'None':
                        chart.model.primaryYAxis.tickLinesPosition = 'outside';
                        chart.redraw();
                        break;
                    case 'Inside':
                        chart.model.primaryYAxis.tickLinesPosition = 'inside';
                        chart.redraw();
                        break;
                    case 'Outside':
                        chart.model.primaryYAxis.tickLinesPosition = 'outside';
                        chart.redraw();
                        break;
                    default:
                }
        });
		
        $('#xlabels').change(function () 
		{
            var option6 = $("#xlabels option:selected").text();
            var chart = $("#container").ejChart("instance");
                switch (option6)
				{
                    case 'None':
                        chart.model.primaryXAxis.labelPosition = 'outside';
                        chart.redraw();
                        break;
                    case 'Inside':
                        chart.model.primaryXAxis.labelPosition = 'inside';
                        chart.redraw();
                        break;
                    case 'Outside':
                        chart.model.primaryXAxis.labelPosition = 'outside';
                        chart.redraw();
                        break;
                    default:
                }
        });
		
		$('#ylabels').change(function () 
		{
            var option7 = $("#ylabels option:selected").text();
            var chart = $("#container").ejChart("instance");
                switch (option7) 
				{
                    case 'None':
                        chart.model.primaryYAxis.labelPosition = 'outside';
                        chart.redraw();
                        break;
                    case 'Inside':
                        chart.model.primaryYAxis.labelPosition = 'inside';
                        chart.redraw();
                        break;
                    case 'Outside':
                        chart.model.primaryYAxis.labelPosition = 'outside';
                        chart.redraw();
                        break;
                    default:
                }
        });
	
});

	 function maximumLabelWidth() 
	{
		var chartObj = $("#container").ejChart("instance");
		chartObj.model._axes[0].maximumLabelWidth = parseFloat($("#maximumLabelWidth").val());
		chartObj.redraw();
	}
	function maximumLabelWidthYAxis()
	{
	    var chartObj = $("#container").ejChart("instance");
		chartObj.model._axes[1].maximumLabelWidth = parseFloat($("#maximumLabelWidth1").val());
		chartObj.redraw();
	}	
 

