
syncApp.controller('ChartCtrl', function ($scope) {
	
	$scope.Points1 = [

                  { x: 'Asia', y: 35.94, text: 'Asia 35.94%', fill: "#E94649" }, { x: 'America', y: 8.91, text: 'America 8.91%', fill: "#0FB954" },
                  { x: 'Europe', y: 2.88, fill: "#005277", text: 'Europe 2.88%' }, { x: 'Africa', y: 6.06, fill: "#F6B53F", text: 'Africa 6.06%' }

                      ];
					  
	$scope.Points2 = [


                      { x: 'China', y: 16.8, text: 'China 16.8%', fill: "#E94649" },
                      { x: 'India', y: 15.6, text: 'India 15.6%', fill: "#E94649" },
                      { x: 'Indonesia', y: 3.54, text: 'Indonesia 3.54%', fill: "#E94649" },
                      { x: 'US', y: 4.42, text: 'US 2.5%', fill: "#0FB954" },
                      { x: 'Brazil', y: 2.82, text: 'Canada 2.5%', fill: "#0FB954" },
                      { x: 'Mexico', y: 1.67, text: 'Mexico 2%', fill: "#0FB954" },
                      { x: 'Germany', y: 1.11, text: 'Germany 1.11%', fill: "#005277" },
                      { x: 'France', y: 0.88, text: 'France 0.88%', fill: "#005277" },
                      { x: 'UK', y: 0.89, text: 'UK 0.89%', fill: "#005277" },
                      { x: 'Nigeria', y: 2.56, text: 'Nigeria 2.56%', fill: "#F6B53F" },
                      { x: 'Ethopia', y: 1.26, text: 'Ethopia 1.24%', fill: "#F6B53F" },
                      { x: 'Egypt', y: 2.24, text: 'Egypt 2.24%', fill: "#F6B53F" },
                      ];
				
		$("#enableSmartLabels").change(function () {
            if ($("#enableSmartLabels").is(":checked"))

                $("#container").ejChart("option", { "commonSeriesOptions": { enableSmartLabels: true } });
            else

                $("#container").ejChart("option", { "commonSeriesOptions": { enableSmartLabels: false } });
        });
        $('#type').change(function () {
            $("#container").ejChart("option", { "commonSeriesOptions": { type: $('#type')[0].value } });

        });

});

 function seriesRender(sender) {
            if (sender.model.theme == "flatdark" || sender.model.theme == "gradientdark")
                sender.data.series.marker.dataLabel.connectorLine.color = "white";

        }
 
	
	

