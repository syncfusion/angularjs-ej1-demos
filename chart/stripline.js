 var chartData = window.chartData;

syncApp.controller('ChartCtrl', function ($scope) {
    $scope.StripLineSetting = [
                     {
                         start: 30,
                         end: 40,
                         text: 'High Temperature',
                         textAlignment: 'middlecenter',
                         color: '#0D97D4',
                         font: { size: '18px', color: 'white' },
                         zIndex: 'behind',
                         borderWidth: 0,
                         visible: true
                     },
                     {
                         start: 20,
                         end: 30,
                         text: 'Average Temperature',
                         color: '#00AEFF',
                         zIndex: 'behind',
                         font: { size: '18px', color: 'white' },
                         borderWidth: 0,
                         textAlignment: 'middlecenter',
                         visible: true
                     },
                     {
                         start: 10,
                         end: 20,
                         text: 'Low Temperature',
                         textAlignment: 'middlecenter',
                         font: { size: '18px', color: 'white' },
                         color: '#14B9FF',
                         zIndex: 'behind',
                         borderWidth: 0,
                         visible: true
                     }
                 ];
				 
	$scope.Points1 = [{ x: "Jan", y: 28 }, { x: "Feb", y: 27 }, { x: "Mar", y: 33 }, { x: "Apr", y: 36 },
                                 { x: "May", y: 28 }, { x: "Jun", y: 30 }, { x: "Jul", y: 31 }, { x: "Aug", y: 27 },
                                 { x: "Sep", y: 30 }, { x: "Oct", y: 20 }, { x: "Nov", y: 15 }, { x: "Dec", y: 17 }];
								 
			  $('#selectType').change(function () {
         var option = $("#selectType option:selected").text();
         if (option.toLowerCase() == "vertical") {
             var chart = $("#container").ejChart("instance");
             var color = ["#0D97D4", "#00AEFF", "#14B9FF", "#14B9EE", "#0D97D4"];
             chart.model.primaryXAxis.labelPlacement = "betweenticks";
             for (var i = 0; i <= 4; i++) {
                 if (i == 3||i==4) {
                     chart.model.primaryYAxis.stripLine[i] = {};                 
                 }
                 chart.model.primaryYAxis.stripLine[i].visible = false;                
                 chart.model.primaryXAxis.stripLine[i] = {};
                 switch (i) {
                     case 0:
                         chart.model.primaryXAxis.stripLine[i].start = -1;
                         chart.model.primaryXAxis.stripLine[i].end = 1.5;
                         chart.model.primaryXAxis.stripLine[i].text = "Winter";
                         chart.model.primaryXAxis.stripLine[i].color = "#1e88e5";
                         break;
                     case 1:
                         chart.model.primaryXAxis.stripLine[i].start = 1.5;
                         chart.model.primaryXAxis.stripLine[i].text = "Summer";
                         chart.model.primaryXAxis.stripLine[i].end = 4.5;
                         chart.model.primaryXAxis.stripLine[i].color = "#2196f3";
                         break;
                     case 2:
                         chart.model.primaryXAxis.stripLine[i].start =4.5;
                         chart.model.primaryXAxis.stripLine[i].end = 7.5;
                         chart.model.primaryXAxis.stripLine[i].text = "Spring";
                         chart.model.primaryXAxis.stripLine[i].color = "#42a5f5";
                         break;
                     case 3:
                         chart.model.primaryXAxis.stripLine[i].start = 7.5;
                         chart.model.primaryXAxis.stripLine[i].end = 10.5;
                         chart.model.primaryXAxis.stripLine[i].color = "#64b5f6";
                         chart.model.primaryXAxis.stripLine[i].text = "Autumn";
                         break;
                     case 4:
                         chart.model.primaryXAxis.stripLine[i].start = 10.5;
                         chart.model.primaryXAxis.stripLine[i].end = 12;
                         chart.model.primaryXAxis.stripLine[i].text = "Winter";
                         chart.model.primaryXAxis.stripLine[i].color = "#1e88e5";
                         break;
                 }           
                 
                 chart.model.primaryXAxis.stripLine[i].textAlignment = "middlecenter";                 
                 chart.model.primaryXAxis.stripLine[i].font = {};
                 chart.model.primaryXAxis.stripLine[i].font.size = "18px";
                 chart.model.primaryXAxis.stripLine[i].font.color = "white";
                 chart.model.primaryXAxis.stripLine[i].zIndex = "behind";
                 chart.model.primaryXAxis.stripLine[i].borderWidth = 0;
                 chart.model.primaryXAxis.stripLine[i].visible = true;
             }
             $("#container").ejChart("redraw");
         }
         else{
             var chart = $("#container").ejChart("instance");
             var chart = $("#container").ejChart("instance");
             var text = ["High Temperature", "Average Temperature", "Low Temperature"];
             var color = ["#0D97D4", "#00AEFF", "#14B9FF"]
             for (var i = 0; i <= 3; i++) {              
                 chart.model.primaryXAxis.stripLine[i] = {};
                 chart.model.primaryXAxis.stripLine[i].visible = false;
                 if (i == 3) break;
                 switch (i) {
                     case 0:
                         chart.model.primaryYAxis.stripLine[i].start = 30;
                         chart.model.primaryYAxis.stripLine[i].end = 40;
                         break;
                     case 1:
                         chart.model.primaryYAxis.stripLine[i].start = 20;
                         chart.model.primaryYAxis.stripLine[i].end = 30;
                         break;
                     case 2:
                         chart.model.primaryYAxis.stripLine[i].start = 10;
                         chart.model.primaryYAxis.stripLine[i].end = 20;
                         break;
                 }
                 chart.model.primaryYAxis.stripLine[i].text = text[i];
                 chart.model.primaryYAxis.stripLine[i].textAlignment = "middlecenter";
                 chart.model.primaryYAxis.stripLine[i].color = color[i];
                 chart.model.primaryYAxis.stripLine[i].font = {};
                 chart.model.primaryYAxis.stripLine[i].font.size = "18px";
                 chart.model.primaryYAxis.stripLine[i].font.color = "white";
                 chart.model.primaryYAxis.stripLine[i].zIndex = "behind";
                 chart.model.primaryYAxis.stripLine[i].borderWidth = 0;
                 chart.model.primaryYAxis.stripLine[i].visible = true;
             }
             $("#container").ejChart("redraw");
          }
	    
	});
		
	
});

 
	

