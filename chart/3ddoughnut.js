
syncApp.controller('ChartCtrl', function ($scope) {
	$scope.Points1 = [{ x: "Watching TV", text: "Watching TV", y: 56 },
							 { x: "Socializing", text: "Socializing", y: 26 }, 
							 { x: "Reading", text: "Reading", y: 3 }, 
							 { x: "Sports", text: "Sports", y: 7 }, 
							 { x: "Others", text: "Others", y: 8 }];
});

function onchartLoading(sender)
{
	loadTheme(sender); 
        if (sender.model.theme == "flatdark" || sender.model.theme == "gradientdark")
			sender.model.commonSeriesOptions.marker.dataLabel.connectorLine.stroke = "white";
}

