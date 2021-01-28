

syncApp.controller('ChartCtrl', function ($scope) {
    $scope.Points1 = [{ x: "Housing", text: "Housing", y: 31 }, 
		   { x: "Food", text: "Food", y: 16 }, 
		   { x: "Transportation", text: "Transportation", y: 14 }, 
		   { x: "Clothing", text: "Clothing", y: 6 }, 
		   { x: "Health care", text: "Health care", y: 8 }, 
		  { x: "Education", text: "Education", y: 17 }, 
		  { x: "Miscellaneous", text: "Miscellaneous", y: 8 }
		  ];
});

function onchartload(sender)
{
	loadTheme(sender); 
        if (sender.model.theme == "flatdark" || sender.model.theme == "gradientdark")
			sender.model.commonSeriesOptions.marker.dataLabel.connectorLine.stroke = "white";
}

