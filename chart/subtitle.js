 var chartData = window.chartData;

syncApp.controller('ChartCtrl', function ($scope) {
				
	$scope.Points1 = [{ x: "Monday", y: 70 }, { x: "Tuesday", y: 60 }, { x: "Wednesday", y: 40 }, { x: "Thursday", y: 40 },
                                 { x: "Friday", y: 70 }, { x: "Saturday", y: 50 }, { x: "Sunday", y: 45 }];
	$scope.Points2 = [{ x: "Monday", y: 80 }, { x: "Tuesday", y: 70 }, { x: "Wednesday", y: 50 }, { x: "Thursday", y: 60 },
                                 { x: "Friday", y: 60 }, { x: "Saturday", y: 80 }, { x: "Sunday", y: 65 }];
			  $("#Title").change(function () {
                var option1 = $("#Title option:selected").text();
                option1 = option1.toLowerCase();
                var chart = $("#container").ejChart("instance");
                switch (option1) {
                    case 'center':
                        chart.model.title.textAlignment = "center";
                        chart.redraw();
                        break;
                    case 'near':
                        chart.model.title.textAlignment = "near";
                        chart.redraw();
                        break;
                    case 'far':
                        chart.model.title.textAlignment = "far";
                        chart.redraw();
                        break;
                    default:
                }
            });
            $("#titleVisible").change(function () {
                var option1 = $("#titleVisible option:selected").text();
                option1 = option1.toLowerCase();
                var chart = $("#container").ejChart("instance");
                debugger;
                switch (option1) {
                    case "true":
                        chart.model.title.visible = true;
                        chart.redraw();
                        break;
                    case "false":
                        chart.model.title.visible = false;
                        chart.redraw();
                        break;
                    default:
                }
            });
            $("#titleTrim").change(function () {
                var option1 = $("#titleTrim option:selected").text();
                option1 = option1.toLowerCase();
                var chart = $("#container").ejChart("instance");
                switch (option1) {
                    case "true":
                        chart.model.title.enableTrim = true;
						$("#titleWidth").attr('disabled',false)
                        chart.redraw();
                        break;
                    case "false":
                        chart.model.title.enableTrim = false;
						$("#titleWidth").attr('disabled',true)
                        chart.redraw();
                        break;
                    default:
                }
            });
            $("#titleTextOverflow").change(function () {
                var option1 = $("#titleTextOverflow option:selected").text();
                option1 = option1.toLowerCase();
                var chart = $("#container").ejChart("instance");
                switch (option1) {
                    case "trim":
                        chart.model.title.textOverflow = "trim";
                        chart.redraw();
                        break;
                    case "wrap":
                        chart.model.title.textOverflow = "wrap";
                        chart.redraw();
                        break;
                    case "wrapandtrim":
                        chart.model.title.textOverflow = "wrapandtrim";
                        chart.redraw();
                        break;
                    default:
                }
            });
            $('#Subtitle').change(function () {
                var option2 = $("#Subtitle option:selected").text();
                option2 = option2.toLowerCase();
                var chart = $("#container").ejChart("instance");
                switch (option2) {
                    case 'center':
                        chart.model.title.subTitle.textAlignment = 'center';
                        chart.redraw();
                        break;
                    case 'near':
                        chart.model.title.subTitle.textAlignment = 'near';
                        chart.redraw();
                        break;
                    case 'far':
                        chart.model.title.subTitle.textAlignment = 'far';
                        chart.redraw();
                        break;
                    default:
                }
            });
            $("#subtitleVisible").change(function () {
                var option1 = $("#subtitleVisible option:selected").text();
                option1 = option1.toLowerCase();
                var chart = $("#container").ejChart("instance");
                switch (option1) {
                    case "true":
                        chart.model.title.subTitle.visible = true;
                        chart.redraw();
                        break;
                    case "false":
                        chart.model.title.subTitle.visible = false;
                        chart.redraw();
                        break;
                    default:
                }
            });
            $("#subtitleTrim").change(function () {
                var option1 = $("#subtitleTrim option:selected").text();
                option1 = option1.toLowerCase();
                var chart = $("#container").ejChart("instance");
                switch (option1) {
                    case "true":
                        chart.model.title.subTitle.enableTrim = true;
						$("#subtitleWidth").attr('disabled',false)
                        chart.redraw();
                        break;
                    case "false":
                        chart.model.title.subTitle.enableTrim = false;
						$("#subtitleWidth").attr('disabled',true)
                        chart.redraw();
                        break;
                    default:
                }
            });
            $("#subtitleTextOverflow").change(function () {
                var option1 = $("#subtitleTextOverflow option:selected").text();
                option1 = option1.toLowerCase();
                var chart = $("#container").ejChart("instance");
                switch (option1) {
                    case "trim":
                        chart.model.title.subTitle.textOverflow = "trim";
                        chart.redraw();
                        break;
                    case "wrap":
                        chart.model.title.subTitle.textOverflow = "wrap";
                        chart.redraw();
                        break;
                    case "wrapandtrim":
                        chart.model.title.subTitle.textOverflow = "wrapandtrim";
                        chart.redraw();
                        break;
                    default:
                }
            });
            $("#titleWidth").change(function () {
                var chart = $("#container").ejChart("instance");
                chart.model.title.maximumWidth = $('#titleWidth')[0].value;
                chart.redraw();
            });
            $("#subtitleWidth").change(function () {
                var chart = $("#container").ejChart("instance");
                chart.model.title.subTitle.maximumWidth = $('#subtitleWidth')[0].value;
                chart.redraw();
            });
	    
	});
		

 
	

