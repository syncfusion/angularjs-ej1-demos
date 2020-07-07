syncApp.controller('CircularGaugeCtrl', function ($scope) {
	createPropertiesWindow();       
      });
	  
	  
	  function  createPropertiesWindow(){
	        $("#chkclockwise").ejCheckBox({ checked: true, "change": "onchange" });
            $("#startAngle").ejSlider({
                sliderType: ej.SliderType.MinRange,
                value: 122,
                height: 10,
                minValue: 0,
                maxValue: 360,
                width: 110,
                enableAnimation: true,
                slide: "onchange",
                change: "onchange"
            });
            $("#sweepAngle").ejSlider({
                sliderType: ej.SliderType.MinRange,
                value: 296,
                height: 10,
                minValue: 90,
                maxValue: 360,
                width: 110,
                enableAnimation: true,
                slide: "onchange",
                change: "onchange"
            });
            $('#frameStartAngle').ejDropDownList({
                dataSource: ["0", "90", "180", "270"],
                select: "onchange", width: "110px", selectedItemIndex: 2, enabled:false
            });
            $("#rangeDistance").ejSlider({
                sliderType: ej.SliderType.MinRange,
                value: 10,
                height: 10,
                minValue: 0,
                maxValue: 15,
                width: 110,
                enableAnimation: true,
                change: "onchange",
            });
            $('#frameType').ejDropDownList({
                dataSource: ["Full - Circular", "Semi - Circular"],
                select: "onchange", width: "110px", selectedItemIndex: 0
            });
            $('#rangePlacement').ejDropDownList({
                dataSource: ["Far", "Near"],
                select: "onchange", width: "110px", selectedItemIndex: 0
            });
	  }
	  
	     function onchange(args) {
            if (args.type == "select" && args.text == "Semi - Circular") {
                $("#frameStartAngle").ejDropDownList("option", "enabled", true);
                $("#frameStartAngle").ejDropDownList("option", "selectedItemIndex", 2);
                $("#CircularGauge1").ejCircularGauge("option", "frame", { frameType: "halfcircle", halfCircleFrameStartAngle: 180 });
                $("#CircularGauge1").ejCircularGauge("option", "scales", [{ startAngle: 180, sweepAngle: 180 }]);
                $("#startAngle").ejSlider("option", "value", 180);
                $("#startAngle").ejSlider("option", "enabled", false);
                $("#sweepAngle").ejSlider("option", "maxValue", 180);
                $("#sweepAngle").ejSlider("option", "value", 180);
            }
            else if (args.type == "select" && args.text == "Full - Circular") {
                $("#frameStartAngle").ejDropDownList("option", "enabled", false);
                $("#CircularGauge1").ejCircularGauge("option", "frame", { frameType: "fullcircle" });
                $("#CircularGauge1").ejCircularGauge("option", "scales", [{ startAngle: 122, sweepAngle: 296 }]);
                $("#startAngle").ejSlider("option", "enabled", true);
                $("#startAngle").ejSlider("option", "value", 122);
                $("#sweepAngle").ejSlider("option", "value", 296);
                $("#sweepAngle").ejSlider("option", "maxValue", 360);
            }
            else if (args.type == "select" && args.text == "Far") {
                $("#CircularGauge1").ejCircularGauge("option", "scales", [{ ranges: [{ placement: "far" }, { placement: "far" }, { placement: "far" }] }]);
            }
            else if (args.type == "select" && args.text == "Near") {
                $("#CircularGauge1").ejCircularGauge("option", "scales", [{ ranges: [{ placement: "near" }, { placement: "near" }, { placement: "near" }] }]);
            }
            else if (args.type == "select") {
                $("#CircularGauge1").ejCircularGauge("option", "frame", { halfCircleFrameStartAngle: parseInt(args.text), halfCircleFrameEndAngle: parseInt(args.text) + 180 });
                $("#CircularGauge1").ejCircularGauge("option", "scales", [{ startAngle: parseInt(args.text), sweepAngle: 180 }]);
                $("#startAngle").ejSlider("option", "value", parseInt(args.text));
                $("#sweepAngle").ejSlider("option", "value", 180);
            }
            else if (!ej.isNullOrUndefined(args.isChecked)) {
                $("#CircularGauge1").ejCircularGauge("option", "scales", [{direction:args.isChecked?"clockwise":"counterclockwise"}]);
            }
            else if (args.id == "rangeDistance") {
                $("#CircularGauge1").ejCircularGauge("option", "scales", [{ ranges: [{ distanceFromScale: args.value }, { distanceFromScale: args.value }, { distanceFromScale: args.value }] }]);
            }
            else if (args.id == "startAngle") {
                $("#CircularGauge1").ejCircularGauge("option", "scales", [{ startAngle: args.value }]);
            }
            else if (args.id == "sweepAngle") {
                $("#CircularGauge1").ejCircularGauge("option", "scales", [{ sweepAngle: args.value }]);
            }
        }