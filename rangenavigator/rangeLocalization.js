var data;
syncApp.controller('RangeCtrl', function ($scope) {
	    data = GetData();	
        $scope.dataSource = data.Open;
		$scope.chartloaded = "onchartloaded";

				
				   $('#locale').change(function () {
            var culture = $('#locale option:selected').val();
            var slideobj = $("#rangeContainer").data("ejRangeNavigator");
            var chartObj = $("#chartContainer").ejChart("instance");
            chartObj.model.locale = culture;
            slideobj.model.locale = culture;
            $("#chartContainer").ejChart("option", {
                locale: culture, title: { text: localizedText[culture].title },
                primaryXAxis: { title: { text: localizedText[culture].xAxisTitle } },
                primaryYAxis: { title: { text: localizedText[culture].yAxisTitle } },
                series: localizedText[culture].series
            });
            $("#rangeContainer").ejRangeNavigator("renderNavigator");
        });

        $('#interval').change(function () {
            var Interval = $('#interval option:selected').val();
            var slideobj = $("#rangeContainer").data("ejRangeNavigator");

            if (slideobj.model.series[0].dataSource.length == 359) {
                var data = GetData1();

                slideobj.model.series[0].dataSource = data.Open;
                slideobj.model.selectedRangeSettings.start = "2010/2/1";
                slideobj.model.selectedRangeSettings.end = "2010/3/1";
            }
            else {

                var data = GetData();
                slideobj.model.series[0].dataSource = data.Open;
                slideobj.model.selectedRangeSettings.start = "2010/4/1";
                slideobj.model.selectedRangeSettings.end = "2010/6/30";
            }


            slideobj.model.labelSettings.lowerLevel.intervalType = Interval;
            $("#rangeContainer").ejRangeNavigator("renderNavigator");
        });
 });
 
syncApp.controller('chartCtrl', function ($scope) {
			$scope.Chartload = "onchartload";
    });
	
	

        var localizedText = {};
        localizedText["en-US"] = { title: "Stock Price Analysis", xAxisTitle: "Date", yAxisTitle: "Price ($)", series: [{ name: "Product X" }, { name: "Product Y" }] };
        localizedText["fr-FR"] = { title: "Stock Prix Analyse", xAxisTitle: "Date", yAxisTitle: "Prix ($)", series: [{ name: "Le produit X" }, { name: "Le produit Y" }] };
        function onchartload(sender) {
            loadTheme(sender);  
            sender.model.series[0].dataSource = data.Open;
            sender.model.series[0].xName = "XValue";
            sender.model.series[0].yName = "YValue";
            sender.model.series[1].dataSource = data.Close;
            sender.model.series[1].xName = "XValue";
            sender.model.series[1].yName = "YValue";
        }
		function loadingtheme(sender) {
            var theme = window.themestyle + window.themecolor + window.themevarient;
            if (theme) {
                switch (theme) {
                    case "flatazurelight":
                        theme = "azurelight";
                        break;
                    case "flatlimelight":
                        theme = "limelight";
                        break;
                    case "flatsaffronlight":
                        theme = "saffronlight";
						break;
					case "gradientazurelight":
						 theme = "gradientazure";
						break;
					case "gradientlimelight":
						 theme = "gradientlime";
						break;
					case "gradientsaffronlight":
						 theme = "gradientsaffron";
						break;
					case "flatazuredark":
						 theme = "azuredark";
						break;
					case "flatlimedark":
						 theme = "limedark";
						break;
					case "flatsaffrondark":
						 theme = "saffrondark";
						break;
					case "gradientazuredark":
						 theme = "gradientazuredark";
						break;
					case "gradientlimedark":
						 theme = "gradientlimedark";
						break;
					case "gradientsaffrondark":
						 theme = "gradientsaffrondark";
						break;
					case "flathigh-contrast-01dark":
						 theme = "highcontrast01";
						 break;
					case "flathigh-contrast-02dark":
						 theme = "highcontrast02";
						 break;
					case "flatmateriallight":
						 theme = "material";
						 break;
					case "flatoffice-365light":
						 theme = "office";
						 break;
                    default:
                        theme = "flatlight";
                        break;
                }
                sender.model.theme = theme;
            }
        }

		function onchartloaded(sender) {
            var chartobj = $("#chartContainer").data("ejChart");
            if (chartobj != null) {
                chartobj.model.primaryXAxis.zoomPosition = sender.zoomPosition;
                chartobj.model.primaryXAxis.zoomFactor = sender.zoomFactor;
				 $("#chartContainer").ejChart("redraw");
            }
           
        }
        function GetData1() {
            var series1 = [];
            var series2 = [];
            var value = 100;
            var value1 = 120;
            for (var i = 1; i < 90; i++) {

                if (Math.random() > .5) {
                    value += Math.random();
                    value1 += Math.random();
                } else {
                    value -= Math.random();
                    value1 -= Math.random();
                }
                var point1 = { XValue: new Date(2010, 0, i), YValue: value };
                var point2 = { XValue: new Date(2010, 0, i), YValue: value1 };
                series1.push(point1);
                series2.push(point2);
            }

            data = { Open: series1, Close: series2 };
            return data;
        }
        function GetData() {
            var series1 = [];
            var series2 = [];
            var value = 100;
            var value1 = 120;
            for (var i = 1; i < 360; i++) {

                if (Math.random() > .5) {
                    value += Math.random();
                    value1 += Math.random();
                } else {
                    value -= Math.random();
                    value1 -= Math.random();
                }
                var point1 = { XValue: new Date(2010, 0, i), YValue: value };
                var point2 = { XValue: new Date(2010, 0, i), YValue: value1 };
                series1.push(point1);
                series2.push(point2);
            }

            data = { Open: series1, Close: series2 };
            return data;
        }

     
