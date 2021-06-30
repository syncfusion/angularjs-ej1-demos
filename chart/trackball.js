 var chartData = window.chartData;

syncApp.controller('ChartCtrl', function ($scope) {
	
	$scope.RangeSetting = { min: new Date(2000, 1, 1), max: new Date(2006, 2, 11), interval: 1 };
	 
	 $scope.Points1 = [{ x: new Date(2000, 02, 11), y: 30}, { x: new Date(2000, 09, 14), y: 35 },
                             { x: new Date(2001, 02, 11), y: 40 }, { x: new Date(2001, 09, 16), y: 36 },
                             { x: new Date(2002, 02, 07), y: 28 }, { x: new Date(2002, 09, 07), y: 33 },
							 { x: new Date(2003, 02, 11), y: 39 }, { x: new Date(2003, 09, 14), y: 38 },
                             { x: new Date(2004, 02, 06), y: 34 }, { x: new Date(2004, 09, 06), y: 46 },
                             { x: new Date(2005, 02, 11), y: 54 }, { x: new Date(2005, 09, 11), y: 65 },
							 { x: new Date(2006, 02, 11), y: 39 }];
							 
	$scope.Points2 = [{ x: new Date(2000, 02, 11), y: 54 }, { x: new Date(2000, 09, 14), y: 45 },
                             { x: new Date(2001, 02, 11), y: 43 }, { x: new Date(2001, 09, 16), y: 50 },
                             { x: new Date(2002, 02, 07), y: 54 }, { x: new Date(2002, 09, 07), y: 56 },
                             { x: new Date(2003, 02, 11), y: 60 }, { x: new Date(2003, 09, 14), y: 63 },
                             { x: new Date(2004, 02, 06), y: 69 }, { x: new Date(2004, 09, 06), y: 70 },
                             { x: new Date(2005, 02, 11), y: 72 }, { x: new Date(2005, 09, 11), y: 75 },
							 { x: new Date(2006, 02, 11), y: 75 }];
							 
	$scope.Points3 = [{ x: new Date(2000, 02, 11), y: 76}, { x: new Date(2000, 09, 14), y: 70 },
                             { x: new Date(2001, 02, 11), y: 63 }, { x: new Date(2001, 09, 16), y: 72 },
                             { x: new Date(2002, 02, 07), y: 77 }, { x: new Date(2002, 09, 07), y: 79 },
                             { x: new Date(2003, 02, 11), y: 72 }, { x: new Date(2003, 09, 14), y: 68 },
                             { x: new Date(2004, 02, 06), y: 78 }, { x: new Date(2004, 09, 06), y: 65 },
                             { x: new Date(2005, 02, 11), y: 81 }, { x: new Date(2005, 09, 11), y: 80 },
							 { x: new Date(2006, 02, 11), y: 94 }];
							 
	$scope.Points4 = [{ x: new Date(2000, 02, 11), y: 98 }, { x: new Date(2000, 09, 14), y: 90 },
                             { x: new Date(2001, 02, 11), y: 83 }, { x: new Date(2001, 09, 16), y: 90 },
                             { x: new Date(2002, 02, 07), y: 86 }, { x: new Date(2002, 09, 07), y: 84 },
                             { x: new Date(2003, 02, 11), y: 106 }, { x: new Date(2003, 09, 14), y: 99 },
                             { x: new Date(2004, 02, 06), y: 110 }, { x: new Date(2004, 09, 06), y: 102 },
                             { x: new Date(2005, 02, 11), y: 90 }, { x: new Date(2005, 09, 11), y: 85 },
							 { x: new Date(2006, 02, 11), y: 110 }];
	
	$scope.Points5 = [{ x: new Date(2000, 02, 11), y: 116 }, { x: new Date(2000, 09, 14), y: 110 },
                             { x: new Date(2001, 02, 11), y: 100 }, { x: new Date(2001, 09, 16), y: 102 },
                             { x: new Date(2002, 02, 07), y: 97 }, { x: new Date(2002, 09, 07), y: 89 },
                             { x: new Date(2003, 02, 11), y: 88 }, { x: new Date(2003, 09, 14), y: 90 },
                             { x: new Date(2004, 02, 06), y: 88 }, { x: new Date(2004, 09, 06), y: 75 },
                             { x: new Date(2005, 02, 11), y: 63 }, { x: new Date(2005, 09, 11), y: 70 },
							 { x: new Date(2006, 02, 11), y: 55 }];
	
			
			  $("#colorPick1").ejColorPicker({
             value: "#ffffff",
             select: "colorChange"
         });
         $("#colorPick2").ejColorPicker({
             value: "#000000",
             select: "borderColorChange"
         });
         $("#RXRYSlider").ejSlider({
             height: 16,
             minValue: 0,
             maxValue: 20,
             incrementStep: 1,
             slide: "rxrychange"

         });
		
});

  function modeChange(x) {
         var chartObj = $("#container").ejChart("instance");
         chartObj.model.crosshair.trackballTooltipSettings.mode = x.value;
		  if(x.value == "float"){
		    chartObj.model.crosshair.trackballTooltipSettings.tooltipTemplate = "Tooltip";
		  } else {
		    chartObj.model.crosshair.trackballTooltipSettings.tooltipTemplate = null;
		  }
         chartObj.redraw();
     }
     function colorChange(sender) {
         var chartObj = $("#container").ejChart("instance");
         chartObj.model.crosshair.trackballTooltipSettings.fill = sender.value;
         chartObj.redraw();
     }
     function borderColorChange(sender) {
         var chartObj = $("#container").ejChart("instance");
         chartObj.model.crosshair.trackballTooltipSettings.border.color = sender.value;
         chartObj.redraw();
     }
     function rxrychange(sender) {
         var chartObj = $("#container").ejChart("instance");
         chartObj.model.crosshair.trackballTooltipSettings.rx = sender.value;
         chartObj.model.crosshair.trackballTooltipSettings.ry = sender.value;
         chartObj.redraw();
     }

 
