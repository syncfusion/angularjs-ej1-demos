syncApp.controller('LinearGauge', function ($scope) {
          createPropertiesWindow();
     });
	 
	 function createPropertiesWindow()
	 {
		 $("#scalesize").ejSlider({
                sliderType: ej.SliderType.MinRange,
                value: 7,
                height: 10,
                width: 110,
                minValue: 5,
                maxValue: 15,
                enableAnimation: true,
                slide: "onchange",
                change: "onchange"
            });

            $("#locationX").ejSlider({
                sliderType: ej.SliderType.MinRange,
                value: 51,
                height: 10,
                width: 110,
                minValue: 48,
                maxValue: 53,
                enableAnimation: true,
                slide: "onchange",
                change: "onchange"
            });

            $("#locationY").ejSlider({
                sliderType: ej.SliderType.MinRange,
                value: 50,
                height: 10,
                width: 110,
                minValue: 40,
                maxValue: 55,
                enableAnimation: true,
                slide: "onchange",
                change: "onchange"
            });

            $("#pointervalue").ejSlider({
                sliderType: ej.SliderType.MinRange,
                value: 50,
                height: 10,
                width: 110,
                minValue: 0,
                maxValue: 100,
                enableAnimation: true,
                slide: "onchange",
                change: "onchange"
            });

            $('#scaleorientation').ejDropDownList({
                dataSource: ["clockwise", "counterclockwise"],
                select: "onchange", width: "110px", selectedItemIndex: 1, height: "22px",
            });

	 }
	 
	 function onchange(args) {

            var lineartarget = $("#linearCore").data("ejLinearGauge");
            if (args.id == "scalesize") {
                lineartarget.setScaleBarSize(0, args.value);
            }
            else if (args.id == "locationX") {
                lineartarget.setScaleLocation(0, { x: args.value, y: lineartarget.model.scales[0].position.y });
            }
            else if (args.id == "locationY") {
                lineartarget.setScaleLocation(0, { x: lineartarget.model.scales[0].position.x, y: args.value });
            }
            else if (args.id == "pointervalue") {
                lineartarget.setPointerValue(0, 0, args.value);
                lineartarget.setBarPointerValue(0, 0, args.value);
            }
            else if (args.text == "clockwise") {
                lineartarget.setScaleDirection(0, args.text);
            }
            else if (args.text == "counterclockwise") {
                lineartarget.setScaleDirection(0, args.text);
            }
        }


