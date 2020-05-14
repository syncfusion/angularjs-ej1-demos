syncApp.controller('LinearGauge', function ($scope) {
          createPropertiesWindow();
     });
	 
	 function createPropertiesWindow()
	 {
		 $("#pointerwidth").ejSlider({
                sliderType: ej.SliderType.MinRange,
                value: 15,
                height: 10,
                width: 110,
                minValue: 10,
                maxValue: 25,
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

            $('#pointerplacement').ejDropDownList({
                dataSource: ["far", "near", "center"],
                select: "onchange", width: "110px", selectedItemIndex: 0, height: "22px",
            });

            $('#markerstyle').ejDropDownList({
                dataSource: ["diamond", "rectangle", "triangle", "ellipse", "pentagon", "circle", "star", "slider", "pointer", "wedge", "trapezoid", "rounded rect"],
                select: "onchange", width: "110px", selectedItemIndex: 2, height: "22px"
            });
	 }
	 
	 function onchange(args) {
            var linearpointer = $("#linearCore").data("ejLinearGauge");

            if (args.id == "pointerwidth") {
                linearpointer.setPointerWidth(0, 0, args.value);
            }
            else if (args.id == "pointervalue") {
                linearpointer.setPointerValue(0, 0, args.value);
                linearpointer.setBarPointerValue(0, 0, args.value);
            }
            else if (args.text == "far" || args.text == "near" || args.text == "center") {
                linearpointer.setPointerPlacement(0, 0, args.text);
            }
            else if (args.text == "diamond" || args.text == "rectangle" || args.text == "triangle" || args.text == "ellipse" || args.text == "pentagon" || args.text == "circle" || args.text == "star" || args.text == "slider" || args.text == "pointer" || args.text == "wedge" || args.text == "trapezoid" || args.text == "rounded rect") {
                if (args.text == "rounded rect")
                    linearpointer.setMarkerStyle(0, 0, "roundedrectangle");
                else
                    linearpointer.setMarkerStyle(0, 0, args.text);
            }
        }


