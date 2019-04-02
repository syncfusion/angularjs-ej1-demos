
var data = GetData();

function createPropertiesWindow()
{
	 $("#colorPick").ejColorPicker({
            value: '#006fa0',
            select: "onChange"
        });


        $("#colorPick1").ejColorPicker({
            value: '#0e4a7c',
            select: "onChange1"
        });


        $('#enablehigh').change(function () {
            $("#rangeContainer").ejRangeNavigator("option", { "navigatorStyleSettings": { highlightSettings: { enable: $('#enablehigh').is(":checked") } } });

        });
        $('#enablesel').change(function () {
            $("#rangeContainer").ejRangeNavigator("option", { "navigatorStyleSettings": { selectionSettings: { enable: $('#enablesel').is(":checked") } } });

        });
}


syncApp.controller('RangeCtrl', function ($scope) {
	
        $scope.dataSource = data.Open;
		$scope.chartloaded = "onchartloaded";
 });
 
syncApp.controller('chartCtrl', function ($scope) {
			$scope.Chartload = "onchartload";
			createPropertiesWindow();
    });
	
	
  function onChange(args) {
        $("#rangeContainer").ejRangeNavigator("option", { "navigatorStyleSettings": { highlightSettings: { color: args.value } } });
    }
    function onChange1(args) {
        $("#rangeContainer").ejRangeNavigator("option", { "navigatorStyleSettings": { selectionSettings: { color: args.value } } });
    }
    var data;
    function onchartload(sender) {
        loadTheme(sender);
        data = GetData();
        sender.model.series[0].dataSource = data.Open;
        sender.model.series[0].xName = "XValue";
        sender.model.series[0].yName = "YValue";
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

    function GetData() {
        var series1 = [];
        var value = 100;
        for (var i = 1; i < 365; i++) {

            if (Math.random() > .5) {
                value += Math.random();
            } else {
                value -= Math.random();
            }
            var point1 = { XValue: new Date(2010, 0, i), YValue: value };
            series1.push(point1);
        }

        data = { Open: series1 };
        return data;
    }