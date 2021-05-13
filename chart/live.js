
var chartobj, count = 0, chartData = null, value = 10; value1 = 20, chartData1 = null;
var duration;
generateData();
function generateData() {
    var num = 100, data = [], data1 = [];;
    for (i = 0; i < num; i++) {
        if (Math.random() > .5) {
            if (value < 45)
                value += Math.random() * 2.0;
            else
                value -= 2.0;


            if (value1 < 40)
                value1 += Math.random() * 1.8;
            else
                value1 -= 2.0;
        }
        else {
            if (value > 5)
                value -= Math.random() * 2.0;
            else
                value += 2.0;

            if (value1 > 5)
                value1 -= Math.random() * 1.8;
            else
                value1 += 2.0;
        }
        data[i] = {
            x: i.toString(), y: value
        };
        data1[i] = {
            x: i.toString(), y: value1 + 10
        };
    }
    chartData = data;
    chartData1 = data1;
};
function update() {
    if(document.getElementById("livechart")){
        if (Math.random() > .5) {
            if (value < 45)
                value += Math.random() * 2.0;
            else
                value -= 2.0;


            if (value1 < 40)
                value1 += Math.random() * 1.8;
            else
                value1 -= 2.0;
        }
        else {
            if (value > 5)
                value -= Math.random() * 2.0;
            else
                value += 2.0;

            if (value1 > 5)
                value1 -= Math.random() * 1.8;
            else
                value1 += 2.0;
        }
        chartData.push({ x: i.toString(), y: value });
        chartData1.push({ x: i.toString(), y: value1 + 10 });
        i++;
        chartData.shift();
        chartData1.shift();
        chartobj.model.series[0].points = chartData;
        chartobj.model.series[1].points = chartData1;
        $("#livechart").ejChart("redraw");
    }
    else{
        clearInterval(duration);
    }
};
	
    function onchartloading(sender) 
	 {
        chartobj = this;
        duration=window.setInterval(update, 100);
		onchartload(sender);
    }
	
	

    syncApp.controller('ChartCtrl', function ($scope) {
        $scope.load = "onchartloading";
        $scope.livepoints = chartData;
        $scope.livepoints1 = chartData1;
    });
