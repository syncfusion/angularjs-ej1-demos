syncApp.controller('CircularGaugeCtrl', function ($scope) {
	createPropertiesWindow();
      });
	  
	  function createPropertiesWindow(){
	    $("#pointerlength").ejSlider({
                sliderType: ej.SliderType.MinRange,
                value: 95,
                height: 10,
                width: 110,
                minValue: 50,
                maxValue: 100,
                enableAnimation: true,
                slide: "onchange",
                change: "onchange"
            });

            $("#pointerwidth").ejSlider({
                sliderType: ej.SliderType.MinRange,
                value: 7,
                height: 10,
                width: 110,
                minValue: 2,
                maxValue: 15,
                enableAnimation: true,
                slide: "onchange",
                change: "onchange"
            });

            $("#needlelength").ejSlider({
                sliderType: ej.SliderType.MinRange,
                value: 19,
                height: 10,
                width: 110,
                minValue: 10,
                maxValue: 20,
                enableAnimation: true,
                slide: "onchange",
                change: "onchange"
            });

            $("#pointercapradius").ejSlider({
                sliderType: ej.SliderType.MinRange,
                value: 12,
                height: 10,
                width: 110,
                minValue: 9,
                maxValue: 15,
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

            $('#needlestyle').ejDropDownList({
                dataSource: ["triangle", "trapezoid", "arrow"],
                select: "onchange1", width: "110px", selectedItemIndex: 0, height: "22px",
            });
	  
	  }
	  
	 function pointerchange(args) {

            var circular = $("#pointer").data("ejCircularGauge");
            var currentValue = circular.model.scales[0].pointers[0].value;
            var handleValue = Math.round(args.value);
            var timer = setInterval(function pointerchan() {
               if (currentValue < handleValue) {
                    currentValue = currentValue + 1;
                    circular.setPointerValue(0, 0, currentValue);
                }
               else if (currentValue > handleValue) {
                    currentValue = currentValue - 1;
                    circular.setPointerValue(0, 0, currentValue);
                }
               else if (currentValue == handleValue) {
                    window.clearInterval(timer);
                }
            }, 1);
        }

        function onchange1(args) {
            var circular = $("#pointer").data("ejCircularGauge");
            circular.setNeedleStyle(0, 0, args.text);
        }

        function onchange(args) {
			
            var circular = $("#pointer").data("ejCircularGauge");
            if (args.id == "pointerlength") {
                circular.setPointerLength(0, 0, args.value);
            }
            else if (args.id == "pointerwidth") {
                circular.setPointerWidth(0, 0, args.value);
            }
            else if (args.id == "needlelength") {
                circular.setBackNeedleLength(0, 0, args.value);
            }
            else if (args.id == "pointercapradius") {
                circular.setPointerCapRadius(0, args.value);
            }
        }
