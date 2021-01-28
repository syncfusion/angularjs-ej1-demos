syncApp.controller('CircularGaugeCtrl', function ($scope) {
	createPropertiesWindow();
       $scope.ScaleProperties = [{
                    showRanges: true,
                    startAngle: 122, sweepAngle: 296, radius: 130, showScaleBar: true, size: 1, border: { width: 0.5 }, maximum: 120, majorIntervalValue: 20, minorIntervalValue: 10,
                    pointers: [{
                        value: 60,
                        showBackNeedle: true,
                        backNeedleLength: 20,
                        length: 95,
                        width: 7,
                        pointerCap: { radius: 12 }
                    }],
                    ticks: [{
                        type: "major",
                        distanceFromScale: 2,
                        height: 16,
                        width: 1, color: "#8c8c8c"
                    }, { type: "minor", height: 8, width: 1, distanceFromScale: 2, color: "#8c8c8c" }],
                    labels: [{
                        unitText: " KmpH",
                        UnitTextPosition: "back",
                        color: "#8c8c8c"
                    }],
                    ranges: [{
                        distanceFromScale: -30,
                        startValue: 0,
                        endValue: 70
                    }, {
                        distanceFromScale: -30,
                        startValue: 70,
                        endValue: 110,
                        backgroundColor: "#fc0606",
                        border: { color: "#fc0606" }
                    },
                    {
                        distanceFromScale: -30,
                        startValue: 110,
                        endValue: 120,
                        backgroundColor: "#f5b43f",
                        border: { color: "#f5b43f" }
                    }]
                }];
         
      });
	  
	  function createPropertiesWindow(){
	   $('#LabelCustomization').ejDropDownList({
                dataSource: ["Kilometer/Hour", "Meter/Hour", "Voltage/Hour"],
                select: "onchange", width: "110px", selectedItemIndex: 0
            });
	  
	  }
	function onchange(args) {
            var chart = $("#CircularGauge1").data("ejCircularGauge");
            
            if (args.type == "select" && args.text == "Kilometer/Hour") {
                $("#CircularGauge1").ejCircularGauge("option", "scales", [{ labels: [{ unitText: " KmpH" }] }]);
            }
            else if (args.type == "select" && args.text == "Meter/Hour") {
                $("#CircularGauge1").ejCircularGauge("option", "scales", [{ labels: [{ unitText: " MpH" }] }]);
            }
            else if (args.type == "select" && args.text == "Voltage/Hour") {
                $("#CircularGauge1").ejCircularGauge("option", "scales", [{ labels: [{ unitText: " VpH" }] }]);
            }
        }