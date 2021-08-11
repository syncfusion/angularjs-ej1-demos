var chartData = window.chartData;
syncApp.controller('ChartCtrl', function ($scope) {
	
	$scope.MultiLevelLabel = [
				  {
					visible: true, text: "Quater 1", start:-0.5 , end: 2.5
				 },
				  {
					visible: true, text: "Quater 2", start:2.5 , end: 5.5
				 },
				  {
					visible: true, text: "Quater 3", start:5.5 , end: 8.5
				 },
				 {
					visible: true, text: "Quater 4", start:8.5 , end: 11.5
				 },
				 {
					visible: true, text: "Half Yearly 1", start:-0.5 , end: 5.5, level: 1
				 },
				 {
					visible: true, text: "Half Yearly 2", start:5.5 , end: 11.5, level: 1
				 },
				 {
					visible: true, text: "2015", start:-0.5 , end: 11.5, level: 2
				 }];
		$scope.MultiLevelLabel2 = [
				 {
					visible: true, text: "Low", start:0 , end: 10
				 },
				 {
					visible: true, text: "Medium", start:10 , end: 25
				 },
				 {
					visible: true, text: "High", start:25 , end: 40
				 }];
				 
             $scope.Points1 = [{ x: 'Jan', y: 1 }, { x: 'Feb', y: 5 }, { x: 'Mar', y: 2 }, { x: 'Apr', y: 8 }, 
							 { x: 'May', y: 30 }, { x: 'Jun', y: 18 }, { x: 'Jul', y: 32 }, { x: 'Aug', y: 20 },
                             { x: 'Sep', y: 16 }, { x: 'Oct', y: 10 }, { x: 'Nov', y: 4 }, { x: 'Dec', y: 5 }];

			$("#colorPick").ejColorPicker({
                value: '#278787',
                select: "onChange"
            });
			  $("#borderstyle, #textalign").change(function () {
            var chart = $("#container").ejChart("instance"),
		    borderstyle = $("#borderstyle")[0].value,
			textAlign = $("#textalign")[0].value;
			 for (var i=0; i<7; i++){
				chart.model._axes[0].multiLevelLabels[i].border.type = borderstyle;
				chart.model._axes[0].multiLevelLabels[i].textAlignment = textAlign;
			  }
			  for (var i=0; i<3; i++){
				chart.model._axes[1].multiLevelLabels[i].border.type = borderstyle;
				chart.model._axes[1].multiLevelLabels[i].textAlignment = textAlign;
			  }
            chart.redraw();
        });
		

});

function onChange(args) {
            var color = args.value;
            var chart = $("#container").ejChart("instance");
			 for (var i=0; i<7; i++)
				chart.model._axes[0].multiLevelLabels[i].border.color = color;
			  for (var i=0; i<3; i++)
				chart.model._axes[1].multiLevelLabels[i].border.color = color;
				chart.redraw();
        }
 
	
	

