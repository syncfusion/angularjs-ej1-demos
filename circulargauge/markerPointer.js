syncApp.controller('CircularGaugeCtrl', function ($scope) {
	createPropertiesWindow();
	$scope.DrawCustomLabel = "drawCustomLabels";
      });
	  
	  function createPropertiesWindow(){
	    $("#chkEnableAnimation").ejCheckBox({ checked: false, "change": "onchange" });
            $("#pointerWidth").ejSlider({
                sliderType: ej.SliderType.MinRange,
                value: 40,
                height: 10,
                minValue: 10,
                maxValue: 40,
                width: 110,
                enableAnimation: true,
                change: "onchange"
            });
            $("#pointerLength").ejSlider({
                sliderType: ej.SliderType.MinRange,
                value: 20,
                height: 10,
                minValue: 5,
                maxValue: 35,
                width: 110,
                enableAnimation: true,
                change: "onchange"
            });
            $("#animationSpeed").ejSlider({
                sliderType: ej.SliderType.MinRange,
                value: 500,
                height: 10,
                minValue: 100,
                maxValue: 1000,
                width: 110,
                enableAnimation: true,
                change: "onchange",
                enabled:false
            });
            $("#distanceFromScale").ejSlider({
                sliderType: ej.SliderType.MinRange,
                value: 10,
                height: 10,
                minValue: -50,
                maxValue: 100,
                width: 110,
                enableAnimation: true,
                change: "onchange"
            });
            $("#pointerValue").ejSlider({
                sliderType: ej.SliderType.MinRange,
                value: 55,
                height: 10,
                minValue: 0,
                maxValue: 100,
                width: 110,
                enableAnimation: true,
                change: "onchange"
            });
            $('#markerType').ejDropDownList({
                dataSource: ["rectangle", "triangle", "ellipse", "diamond", "pentagon", "circle", "slider", "pointer", "wedge", "trapezoid", "roundedrectangle"],
                select: "onchange", width: "110px", selectedItemIndex: 3, height: "24px"
            });

	  
	  }
	  
	  function drawCustomLabels(args){
            args.style.textValue = args.model.scales[0].pointers[0].value.toFixed(2).toString();
        }
	  
	function onchange(args) {
			var marker = $("#marker").data("ejCircularGauge");
            if (args.type == "select") {
                $("#marker").ejCircularGauge("option", "scales", [{ pointers: [{ markerType: args.value }] }]);
            }
            else if (!ej.isNullOrUndefined(args.isChecked)) {
                $("#animationSpeed").ejSlider("option", "enabled", args.isChecked);
                $("#marker").ejCircularGauge("option", "enableAnimation", args.isChecked);
            }
            else if (args.id == "pointerWidth") {
                $("#marker").ejCircularGauge("option", "scales", [{ pointers: [{ width: args.value }] }]);
            }
            else if (args.id == "pointerLength") {
                $("#marker").ejCircularGauge("option", "scales", [{ pointers: [{ length: args.value }] }]);
            }
            else if (args.id == "animationSpeed") {
                $("#marker").ejCircularGauge("option", "animationSpeed", args.value );
            }
            else if (args.id == "distanceFromScale") {
                $("#marker").ejCircularGauge("option", "scales", [{ pointers: [{ distanceFromScale: args.value }] }]);
            }
            else if (args.id == "pointerValue") {
				marker.model.value = args.value;
               marker.model.scales[0].pointers[0].value = args.value;
			   marker.model.scales[0].pointers[0]._value = args.value;
			   marker.refresh();
            }
        }