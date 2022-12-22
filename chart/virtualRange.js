 var chartData = window.chartData;
 var startDate = "1/1/2009";
        var endDate = "1/1/2014";
        var pointLenght = 1000;
syncApp.controller('ChartCtrl', function ($scope) {
	$scope.load = "onchartLoading";
	
	
	
	$('#startDateTime').ejDatePicker({ value: new Date("1/1/2009"), minDate: new Date("1/1/2000"), width: 110, maxDate: new Date("1/1/2009"), change: 'startChange' });
            $('#endDateTime').ejDatePicker({ value: new Date("1/1/2014"), minDate: new Date("1/1/2009"), width: 110, maxDate: new Date("1/1/2019"), change: 'endChange' });
            $("#numeric").ejNumericTextbox({ enabled: false, name: "numeric", value: 1000, minValue: 1000, width: 110, maxValue: 10000000, width: "100%", change: 'startPoints' });
			
			
        $('#type').change(function () {
            var chart = $("#container").ejChart("instance");
            if ($('#type')[0].value.toLowerCase() == "range") {
                $('#startDateTime').data('ejDatePicker').enable();
                $('#endDateTime').data('ejDatePicker').enable();
                $("#numeric").data("ejNumericTextbox").disable();
                chart.model.primaryXAxis.scrollbarSettings.range.min = startDate;
                chart.model.primaryXAxis.scrollbarSettings.range.max = endDate;
                chart.model.primaryXAxis.valueType = 'datetime';
                chart.model.primaryXAxis.labelFormat = 'MMM-yyyy';
                chart.model.primaryXAxis.scrollbarSettings.pointsLength = null;
                var data = GetDateTimeData(new Date("1/1/2009"), new Date("10/1/2009"));
                chart.model.series[0].dataSource = data.Open;
                chart.model.series[0].xName = "XValue";
                chart.model.series[0].yName = "YValue";
            }
            else {
                $('#startDateTime').data('ejDatePicker').disable();
                $('#endDateTime').data('ejDatePicker').disable();
                $("#numeric").data("ejNumericTextbox").enable();
                chart.model.primaryXAxis.scrollbarSettings.range.min = null;
                chart.model.primaryXAxis.scrollbarSettings.range.max = null;
                chart.model.primaryXAxis.valueType = 'double';
                chart.model.primaryXAxis.labelFormat = '';
                chart.model.primaryXAxis.scrollbarSettings.pointsLength = pointLenght;
                var data = GetNumericData(0, 300);
                chart.model.series[0].dataSource = data.Open;
                chart.model.series[0].xName = "XValue";
                chart.model.series[0].yName = "YValue";
            }
            chart.redraw();

        });
		
		$(window).mouseup(function () {
            $("#container").ejWaitingPopup();
            $("#container").ejWaitingPopup("hide");
        });
		
});

    function startPoints(e) {
            var chart = $("#container").ejChart('instance');
            chart.model.primaryXAxis.scrollbarSettings.range.min = null;
            chart.model.primaryXAxis.scrollbarSettings.range.max = null;
            chart.model.primaryXAxis.valueType = 'double';
            chart.model.primaryXAxis.labelFormat = '';
            pointLenght = e.value;
            chart.model.primaryXAxis.scrollbarSettings.pointsLength = e.value;
            var data = GetNumericData(0, 300);
            chart.model.series[0].dataSource = data.Open;
            chart.model.series[0].xName = "XValue";
            chart.model.series[0].yName = "YValue";
            chart.redraw();
        }
		
		  function startChange(e) {
            var chart = $("#container").ejChart('instance');
            startDate = e.value;
            chart.model.primaryXAxis.scrollbarSettings.range.min = e.value;
            chart.redraw();
        }
        function endChange(e) {

            var chart = $("#container").ejChart('instance');
            endDate = e.value;
            chart.model.primaryXAxis.scrollbarSettings.range.max = e.value;
            chart.redraw();

        }

        function onchartLoading(sender) {
            loadTheme(sender);
            var data = GetDateTimeData(new Date("1/1/2009"), new Date("10/1/2009"));
            sender.model.series[0].dataSource = data.Open;
            sender.model.series[0].xName = "XValue";
            sender.model.series[0].yName = "YValue";
        }

        function scrollStart(sender) {
            $("#container").ejWaitingPopup();
            $("#container").ejWaitingPopup("show");
        }

        function scrollEnd(sender) {
            $("#container").ejWaitingPopup("hide");
            var data;
            if (sender.data.axis.scrollbarSettings.pointsLength != null)
                data = GetNumericData(sender.data.newRange.start, sender.data.newRange.end);
            else
                data = GetDateTimeData(new Date(sender.data.newRange.start), new Date(sender.data.newRange.end));
            sender.model.series[0].dataSource = data.Open;
            $("#container").ejChart("instance").redraw();
        }

        function GetNumericData(start, end) {
            var series1 = [];
            var value = 30;

            for (var i = start; i <= end; i++) {
                if (Math.random() > .5) {
                    value += (Math.random() * 10 - 5);
                } else {
                    value -= (Math.random() * 10 - 5)
                }
                if (value < 0)
                    value = getRandomInt(20, 40);
                var point = { XValue: i, YValue: Math.round(value) };
                series1.push(point);
            }
            var data = { Open: series1 };

            return data;
        }

        function GetDateTimeData(start, end) {
            var series1 = [], date, data1;
            var value = 30;

            for (var i = 0; start <= end; i++) {
                date = Date.parse(start);
                if (Math.random() > .5) {
                    value += (Math.random() * 10 - 5);
                } else {
                    value -= (Math.random() * 10 - 5)
                }
                if (value < 0) {
                    value = getRandomInt(20, 40);
                }
                var point1 = { XValue: new Date(date), YValue: Math.round(value) };
                new Date(start.setDate(start.getDate() + 1));
                series1.push(point1);
            }

            data1 = { Open: series1 };
            return data1;
        }

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
