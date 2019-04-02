syncApp.controller('ChartCtrl', function ($scope) {
	$scope.load = "onchartLoading";
	$scope.Axes = [
                {
                    name: 'y1SecondQuater',
                    opposedPosition:true,
                    font: { size: '14px' },
                    title: { text: "Million USD" },
					range: { min: 82, max: 88, interval: 2 },
                    rowIndex: 0
                }
            ];
			
  $scope.Points1 = [
                             { x: "China", y: 17 },
                             { x: "United States", y: 19},
							 { x: "India", y: 29},
                             { x: "Japan", y: 13},
							 { x: "Brazil", y: 24},
                             { x: "Russia", y: 16},
                             { x: "Germany", y: 13},
							 { x: "Nigeria", y: 44},
                             { x: "United Kingdom", y: 18},
							 { x: "France", y: 19}
				    ];
$scope.Points2 = [
                             { x: "China", y: 74},
                             { x: "United States", y: 67},
							 { x: "India", y: 65 },
                             { x: "Japan", y: 61 },
							 { x: "Brazil", y: 68 },
                             { x: "Russia", y: 70},
                             { x: "Germany", y: 66},
							 { x: "Nigeria", y: 53},
                             { x: "United Kingdom", y: 65},
							 { x: "France", y: 63}
				    ];
					
	$scope.Points3 = [
                             { x: "China", y: 9 },
                             { x: "United States", y: 14},
							 { x: "India", y: 6},
                             { x: "Japan", y: 26},
							 { x: "Brazil", y: 8},
                             { x: "Russia", y: 14},
                             { x: "Germany", y: 21},
							 { x: "Nigeria", y: 3},
                             { x: "United Kingdom", y: 17},
							 { x: "France", y: 18}
				    ];

			 $("#colorPick").ejColorPicker({
                value: '#278787',
                select: "onChange"
            });

          
            $("#colorPick1").ejColorPicker({
                value: '#278787',
                select: "onChange1"
            });

          
		
        $('#enablehigh').change(function () 
		{
		 $("#container").ejChart("option", { "commonSeriesOptions": {highlightSettings:{enable:$('#enablehigh').is(":checked")}} });
          
               
        });
        $('#enablesel').change(function () {
		$("#container").ejChart("option", { "commonSeriesOptions": {selectionSettings:{enable:$('#enablesel').is(":checked")}} });
           
        });
        $('#enable3d').change(function () {
            var chart = $("#container").ejChart("instance");
            chart.model.enable3D = $('#enable3d').is(":checked");
            chart.model.enableRotation = true;
            chart.model.depth = 40;
            chart.model.wallSize = 2;
            chart.model.tilt = 0;
            chart.model.rotation = 34;
            chart.model.perspectiveAngle = 90;
            chart.model.sideBySideSeriesPlacement = true;
            chart.redraw();

        });
        $('#enablelege').change(function () {
            var chart = $("#container").ejChart("instance");
            chart.model.legend.toggleSeriesVisibility = !$('#enablelege').is(":checked");
            chart.redraw();

        });
        $('#type').change(function () {
            var chart = $("#container").ejChart("instance");
            if ($('#type')[0].value.toLowerCase() == "pie" || $('#type')[0].value.toLowerCase() == "doughnut") {
               
                chart.model.series[0].type = ($('#type')[0].value);
                chart.model.series[1].type = "column";
                chart.model.series[2].type = "column"; 
            }
            else {
                chart.model.series[0].type = ($('#type')[0].value);
                chart.model.series[1].type = ($('#type')[0].value);
                chart.model.series[2].type = ($('#type')[0].value);
            }
            chart.redraw();
           
		 });

       
        $('#highpattern').change(function () {
		 $("#container").ejChart("option", { "commonSeriesOptions": {highlightSettings:{pattern:$('#highpattern')[0].value}} });
          
        });
		$('#highmode').change(function () {
            $("#container").ejChart("option", { "commonSeriesOptions": {highlightSettings:{mode:$('#highmode')[0].value}} });

        });

       
        $('#selpattern').change(function () {
            $("#container").ejChart("option", { "commonSeriesOptions": {selectionSettings:{pattern:$('#selpattern')[0].value}} });

        });
        $('#selmode').change(function () {
           $("#container").ejChart("option", { "commonSeriesOptions": {selectionSettings:{mode:$('#selmode')[0].value}} });

        });		
		$('#selctionOption').change(function () {
           $("#container").ejChart("option", { "commonSeriesOptions": {selectionSettings:{type:$('#selctionOption')[0].value}} });
        });
});

function onChange(args) {

            var color = args.value;
            var chart = $("#container").ejChart("instance");

            for (var i = 0; i < chart.model.series.length; i++) {
                chart.model.series[i].highlightSettings.color = color;

            }
        }
        function onChange1(args) {
		
            var color = args.value;
            var chart = $("#container").ejChart("instance");

            for (var i = 0; i < chart.model.series.length; i++) {
                chart.model.series[i].selectionSettings.color = color;

            }
        }
	

