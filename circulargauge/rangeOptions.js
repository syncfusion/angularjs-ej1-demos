syncApp.controller('CircularGaugeCtrl', function ($scope) {
	createPropertiesWindow();
      });
	  
	  function createPropertiesWindow(){
	    $("#rangesize").ejSlider({
                sliderType: ej.SliderType.MinRange,
                value: 7,
                height: 10,
                minValue: 2,
                maxValue: 12,
                width: 110,
                enableAnimation: true,
                slide: "onchange",
                change: "onchange"
            });

            $("#startvalue").ejSlider({
                sliderType: ej.SliderType.MinRange,
                height: 10,
                width: 110,
                enableAnimation: true,
                change: "onchange",
                minValue: 0,
                maxValue:50,
                value:0
            });

            $("#endvalue").ejSlider({
                sliderType: ej.SliderType.MinRange,
                height: 10,
                width: 110,
                enableAnimation: true,
                change: "onchange",
                maxValue: 120,
                minValue:0,
                value:50
            });

            $("#distancefromscale").ejSlider({
                sliderType: ej.SliderType.MinRange,
                value: -28,
                height: 10,
                minValue: -30,
                maxValue: 0,
                width: 110,
                enableAnimation: true,
                slide: "onchange",
                change: "onchange"
            });

            $("#pointervalue").ejSlider({
                sliderType: ej.SliderType.MinRange,
                height: 10,
                width: 110,
                minValue: 0,
                maxValue: 120,
                value: 60,
                enableAnimation: true,
                change: "pointerchange"
            });


            $('#rangeid').ejDropDownList({
                dataSource: ["Range1", "Range2", "Range3"],
                select: "onchange1", width: "110px", height: "22px",
                selectedItemIndex:0
            });
			
          var rangetarg = $("#rangeid").data("ejDropDownList");
            rangetarg.option({ selectedItemIndex: 0 });
	  
	  }

  function pointerchange(args) {
            var pointerg = $("#CircularGauge1").data("ejCircularGauge");
            pointerg.setPointerValue(0,0,args.value);
        }

        function onchange1(args) {
            var startslide = $("#startvalue").data("ejSlider");
            var endslide = $("#endvalue").data("ejSlider");
            var gaugestart = $("#CircularGauge1").data("ejCircularGauge");

            if (args.text == "Range1") {
                startslide.setModel({ maxValue: gaugestart.model.scales[0].ranges[0].startValue, value: gaugestart.model.scales[0].ranges[0].startValue });
                endslide.setModel({ minValue: gaugestart.model.scales[0].ranges[0].endValue, value: gaugestart.model.scales[0].ranges[0].endValue });
            }
            else if (args.text == "Range2") {
                startslide.setModel({ maxValue: gaugestart.model.scales[0].ranges[1].endValue, value: gaugestart.model.scales[0].ranges[1].startValue });
                endslide.setModel({ minValue: gaugestart.model.scales[0].ranges[1].startValue, value: gaugestart.model.scales[0].ranges[1].endValue });
            }
            else if (args.text == "Range3") {
                startslide.setModel({ maxValue: gaugestart.model.scales[0].ranges[2].endValue, value: gaugestart.model.scales[0].ranges[2].startValue });
                endslide.setModel({ minValue: gaugestart.model.scales[0].ranges[2].startValue, value: gaugestart.model.scales[0].ranges[2].endValue });
            }
        }


        function onchange(args) {
            var rangetarget = $("#rangeid").data("ejDropDownList");
            var target1 = $("#CircularGauge1").data("ejCircularGauge");
            var endslide = $("#endvalue").data("ejSlider");
            var startslide = $("#startvalue").data("ejSlider");
            if (args.id == "startvalue") {
                endslide.setModel({ minValue: args.value });
                target1.setRangeStartValue(0, rangetarget.selectedIndexValue, args.value);
            }
            else if (args.id == "endvalue") {
                startslide.setModel({ maxValue: args.value });
                target1.setRangeEndValue(0, rangetarget.selectedIndexValue, args.value);
            }
            if (args.id == "rangesize") {
                for (var i = 0; i <= 2; i++) {
                    target1.setRangeSize(0, i, args.value);
                }
            }
            else if (args.id == "distancefromscale") {
                for (var j = 0; j <= 2; j++) {
                    target1.setRangeDistanceFromScale(0, j, args.value);
                }
            }
        }
