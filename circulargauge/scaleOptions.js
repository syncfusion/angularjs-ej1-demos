syncApp.controller('CircularGaugeCtrl1', function ($scope) {
	createPropertiesWindow();
      });
	  
	  function createPropertiesWindow(){
	     $("#scalesize").ejSlider({
                sliderType: ej.SliderType.MinRange,
                value: 1,
                height: 10,
                minValue: 0,
                maxValue: 10,
                width: 110,
                enableAnimation: true,
                slide: "onchange",
                change: "onchange"
            });

            $("#scaleradius").ejSlider({
                sliderType: ej.SliderType.MinRange,
                value: 130,
                height: 10,
                width: 110,
                minValue: 120,
                maxValue: 131,
                enableAnimation: true,
                slide: "onchange",
                change: "onchange"
            });

            $("#borderwidth").ejSlider({
                sliderType: ej.SliderType.MinRange,
                value: 0.5,
                height: 10,
                minValue: 0,
                maxValue: 5,
                width: 110,
                enableAnimation: true,
                slide: "onchange",
                change: "onchange"
            });

            $("#pointervalue").ejSlider({
                sliderType: ej.SliderType.MinRange,
                value: 60,
                height: 10,
                width: 110,
                minValue: 0,
                maxValue: 120,
                enableAnimation: true,
                change: "pointerchange"
            });


            $('#scaledirection').ejDropDownList({
                dataSource: ["clockwise", "counterclockwise"],
                select: "onchange", width: "110px", selectedItemIndex: 0, height: "22px",
            });
	  
	  }

 
        function pointerchange(args) {
            pointerval = $("#CircularGauge1").data("ejCircularGauge");
            var currentValue = pointerval.setPointerValue(0, 0, args.value);
        }

        function onchange(args) {
            gaugeval = $("#CircularGauge1").data("ejCircularGauge");
            if (args.id == "scalesize") {
                gaugeval.setScaleBarSize(0, args.value);
            }
            else if (args.id == "scaleradius") {
                gaugeval.setScaleRadius(0, args.value);
            }
            else if (args.id == "borderwidth") {
                gaugeval.setScaleBorderWidth(0, args.value);
            }
            else if (args.text == "clockwise") {
                gaugeval.setScaleDirection(0, args.text);
            }
            else if (args.text == "counterclockwise") {
                gaugeval.setScaleDirection(0, args.text);
            }
        }
