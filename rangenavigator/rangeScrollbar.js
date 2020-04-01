
 var data = GetData(new Date(2009, 0, 1), new Date(2010, 2, 1));

syncApp.controller('RangeCtrl', function ($scope) {
	
        $scope.dataSource = data.Open;
		$scope.SelectedRangeSetting =  {
                    start: "2009/5/11", end: "2009/8/1"
                };
		$scope.ScrollSetting = {
                    start: "2009/1/1",
                    end: "2014/2/31"
                };
		$scope.chartloaded = "onchartloaded";
		$(window).mouseup(function () {
            $("#scrollContent").ejWaitingPopup();
            $("#scrollContent").ejWaitingPopup("hide");
        });
 });
 
syncApp.controller('chartCtrl', function ($scope) {
			
			$scope.Chartload = "onchartload";
    });
	
     function onScrollStart(sender) {
            $("#rangeContainer").ejWaitingPopup();
            $("#rangeContainer").ejWaitingPopup("show");
        }

        function GetData(start, end) {
            var series1 = [], date, data1;
            var value = 100;

            for (var i = 0; start <= end; i++) {
                date = Date.parse(start);
                if (Math.random() > .5) {
                    value += Math.random();
                } else {
                    value -= Math.random();
                }
                var point1 = { XValue: new Date(date), YValue: value };
                new Date(start.setDate(start.getDate() + 1));
                series1.push(point1);
            }

            data1 = { Open: series1 };
            return data1;
        }

        //Event fires on Rangenavigator slider position changed
        function onRangeChanged(sender) {
            var chartobj = $("#chartContainer").ejChart("instance");
            chartobj.model.series[0].dataSource = sender.selectedData;
            chartobj.model.series[0].xName = "XValue";
            chartobj.model.series[0].yName = "YValue";
            chartobj.model.primaryXAxis.labelFormat = "MMM/dd";
            chartobj.redraw();
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

        //Event fires on scrollbar position changed
        function onScrollbarChanged(sender) {
            $("#rangeContainer").ejWaitingPopup();
            $("#rangeContainer").ejWaitingPopup("hide");
            var range = sender, startRange, endRange;
            data = sender.data;
            startRange = Date.parse(data.newRange.start);
            endRange = Date.parse(data.newRange.end);
            data = GetData(new Date(startRange), new Date(endRange));
            range.model.series[0].dataSource = data.Open;
            range.model.series[0].xName = "XValue";
            range.model.series[0].yName = "YValue";
            $("#rangeContainer").ejRangeNavigator("redraw");
        }

        

     function onchartload(sender) {
            loadTheme(sender);
     }