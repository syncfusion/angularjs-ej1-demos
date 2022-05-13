
syncApp.controller('ChartCtrl', function ($scope) {
	$scope.load = "onchartloading";
	$scope.TooltipFormat = "Year : #point.x# <br/> Particulate : ej.format(#point.y#,n2)";	
	 $scope.Axes = [
                {
                    name: 'yaxis',
                    opposedPosition: true,
                    majorGridLines: { visible: false }
                }
			];		
	
});
 
	function onchartloading(sender) {	
		loadTheme(sender);
        var data = GetData();
        sender.model.series[0].dataSource = data.Open;
        sender.model.series[0].xName = "XValue";
        sender.model.series[0].yName = "YValue";
        sender.model.series[0].pointColorMappingName = "color";
    }
	
    function GetData() {
	var series1 = [];
        var value = 0;
		var color = ["red", "green", "fuchsia", "crimson", "blue", "darkorange", "deepskyblue", "mediumvioletred", "violet", "peru","gray","deeppink","navy"];
        for (var i = 0	; i < 201; i++)
		{
            if (Math.random() > .5) {
                value += Math.random();
            } else {
                value -= Math.random();
            }
            var point = { XValue: new Date(1998,i+10,i), YValue: value,color: color[Math.floor(i / 16)] };
            series1.push(point);
        }
        var data = { Open: series1 };
        return data;	
       
    }

