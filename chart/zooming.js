syncApp.controller('ChartCtrl', function ($scope) {
	var data = GetData();
	$scope.dataSource = data.Open;
	$scope.zoomingsize = { height: "600" };
});

function GetData()
	{
        var series1 = [];
        var value = 100;
        for (var i = 1; i < 250; i++)
		{
            if (Math.random() > .5) {
                value += Math.random();
            } else {
                value -= Math.random();
            }
            var point = { XValue: new Date(1970, i+2, i), YValue: value };
            series1.push(point);
        }
        var data = { Open: series1 };
        return data;
	}
