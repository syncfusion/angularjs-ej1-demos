
syncApp.controller('ChartCtrl', function ($scope) {
		$scope.Points1 = [{ x: 1970, y: 16500 }, { x: 1975, y: 16000 },{ x: 1980, y: 15400 }, 
									 { x: 1985, y: 15800 }, { x: 1990, y: 14000 }, { x: 1995, y: 10500 }, 
									 { x: 2000, y: 13300 }, { x: 2005, y: 12800 }];
	  $scope.Points2 =  [{ x: 1970, y: 8000 }, { x: 1975, y: 7600 }, { x: 1980, y: 6400 }, 
									 { x: 1985, y: 3700 }, { x: 1990, y: 7200 }, { x: 1995, y: 2300 }, 
									 { x: 2000, y: 4000 }, { x: 2005, y: 4800 }];
		
		$('#optXAxisChange').change(function ()
		{
            var option1 = $("#optXAxisChange option:selected").text();
            var chart = $("#container").ejChart("instance");
            var ygridline = chart.model.primaryYAxis.alternateGridBand;
                switch (option1) 
				{
                    case 'Even':
                        chart.model.primaryXAxis.alternateGridBand.odd.fill = 'transparent';
                        chart.model.primaryXAxis.alternateGridBand.even.fill = "#A7A9AB";
                        chart.model.primaryXAxis.alternateGridBand.even.opacity = 0.1;
                        chart.model.primaryXAxis.majorGridLines.color = "#DFDFDF";
                        chart.model.primaryYAxis.majorGridLines.color = "transparent";
                        chart.model.primaryXAxis.axisLine.visible = false;
                        chart.model.primaryYAxis.axisLine.visible = false;

                        chart.redraw();
                        break;
                    case 'Odd':
                        chart.model.primaryXAxis.alternateGridBand.even.fill = 'transparent';
                        chart.model.primaryXAxis.alternateGridBand.odd.fill = "#A7A9AB";
                        chart.model.primaryXAxis.alternateGridBand.odd.opacity = 0.1;
                        chart.model.primaryXAxis.majorGridLines.color = "#DFDFDF";
                        chart.model.primaryYAxis.majorGridLines.color = "transparent";
                        chart.model.primaryXAxis.axisLine.visible = false;
                        chart.model.primaryYAxis.axisLine.visible = false;

                        chart.redraw();
                        break;
                    case 'None':
                        chart.model.primaryXAxis.alternateGridBand.even.fill = 'transparent';
                        chart.model.primaryXAxis.alternateGridBand.odd.fill = 'transparent';
                        chart.model.primaryYAxis.majorGridLines.color = "#DFDFDF";
                        if (ygridline.even.fill != "transparent" || ygridline.odd.fill != "transparent") {
                            chart.model.primaryXAxis.majorGridLines.color = "transparent";
                            chart.model.primaryXAxis.axisLine.visible = false;
                            chart.model.primaryYAxis.axisLine.visible = false;
                        }
                        else {
                            chart.model.primaryXAxis.axisLine.visible = true;
                            chart.model.primaryYAxis.axisLine.visible = true;
                        }
                        chart.redraw();
                        break;
                    default:

                }
        });   
		
		
  	$('#optYAxisChange').change(function () 
		{
            var option1 = $("#optYAxisChange option:selected").text();
            var chart = $("#container").ejChart("instance");
            var xgridline = chart.model.primaryXAxis.alternateGridBand;
                switch (option1)
				{
                    case 'Even':
                        chart.model.primaryYAxis.alternateGridBand.odd.fill = 'transparent';
                        chart.model.primaryYAxis.alternateGridBand.even.fill = "#A7A9AB";
                        chart.model.primaryYAxis.alternateGridBand.even.opacity = 0.1;
                        chart.model.primaryYAxis.majorGridLines.color = "#DFDFDF";
                        chart.model.primaryXAxis.majorGridLines.color = "transparent";
                        chart.model.primaryXAxis.axisLine.visible = false;
                        chart.model.primaryYAxis.axisLine.visible = false;

                        chart.redraw();
                        break;
                    case 'Odd':

                        chart.model.primaryYAxis.alternateGridBand.even.fill = 'transparent';
                        chart.model.primaryYAxis.alternateGridBand.odd.fill = "#A7A9AB";
                        chart.model.primaryYAxis.alternateGridBand.odd.opacity = 0.1;
                        chart.model.primaryYAxis.majorGridLines.color = "#DFDFDF";
                        chart.model.primaryXAxis.majorGridLines.color = "transparent";
                        chart.model.primaryXAxis.axisLine.visible = false;
                        chart.model.primaryYAxis.axisLine.visible = false;
                        chart.redraw();
                        break;
                    case 'None':
                        chart.model.primaryYAxis.alternateGridBand.even.fill = 'transparent';
                        chart.model.primaryYAxis.alternateGridBand.odd.fill = 'transparent';
                        chart.model.primaryXAxis.majorGridLines.color = "#DFDFDF";
                        if (xgridline.even.fill != "transparent" || xgridline.odd.fill != "transparent") 
						{
                            chart.model.primaryYAxis.majorGridLines.color = "transparent";
                            chart.model.primaryYAxis.axisLine.visible = false;
                            chart.model.primaryXAxis.axisLine.visible = false;
                        }
                        else
						{
                            chart.model.primaryXAxis.axisLine.visible = true;
                            chart.model.primaryYAxis.axisLine.visible = true;
                        }
                        chart.redraw();
                        break;
                    default:
                }
        });
});


