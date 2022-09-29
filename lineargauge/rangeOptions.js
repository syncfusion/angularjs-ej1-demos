syncApp.controller('LinearGauge', function ($scope) {
         createPropertiesWindow();				
});
    
	
	function createPropertiesWindow()
	{
		 $("#startwidth").ejSlider({
                sliderType: ej.SliderType.MinRange,
                height: 10,
                width: 110,
                enableAnimation: true,
                slide: "onchange",
                change: "onchange"
            });

            $("#endwidth").ejSlider({
                sliderType: ej.SliderType.MinRange,
                height: 10,
                width: 110,
                enableAnimation: true,
                slide: "onchange",
                change: "onchange"
            });

            $("#startvalue").ejSlider({
                sliderType: ej.SliderType.MinRange,
                height: 10,
                width: 110,
                value: 0,
                minValue: 0,
                maxValue:50,
                enableAnimation: true,
                change: "onchange"
            });

            $("#endvalue").ejSlider({
                sliderType: ej.SliderType.MinRange,
                height: 10,
                width: 110,
                value: 50,
                maxValue: 100,
                minValue:0,
                enableAnimation: true,
                change: "onchange"
            });

            $("#pointervalue").ejSlider({
                sliderType: ej.SliderType.MinRange,
                value: 100,
                height: 10,
                width: 110,
                minValue: 0,
                maxValue: 100,
                enableAnimation: true,
                slide: "onchange",
                change: "onchange"
            });

            $('#rangeplacement').ejDropDownList({
                dataSource: ["far", "near", "center"],
                select: "onchange", width: "110px", height: "22px",
				value:"far"
            });

            $('#rangeid').ejDropDownList({
                dataSource: ["Range1", "Range2"],
                select: "onchange1", width: "110px", height: "22px",
				value:"Range1"
            });
		
	}
	
	 function onchange1(args) {
            var startslide = $("#startvalue").data("ejSlider");
            var endslide = $("#endvalue").data("ejSlider");
            var startwidth = $("#startwidth").data("ejSlider");
            var endwidth = $("#endwidth").data("ejSlider");
            var gaugestart = $("#linearCore").data("ejLinearGauge");
            startslide.setModel({ maxValue:gaugestart.model.scales[0].ranges[args.itemId].endValue ,value: gaugestart.model.scales[0].ranges[args.itemId].startValue });
            endslide.setModel({ minValue:gaugestart.model.scales[0].ranges[args.itemId].startValue,value: gaugestart.model.scales[0].ranges[args.itemId].endValue });
            startwidth.setModel({ value: gaugestart.model.scales[0].ranges[args.itemId].startWidth });
            endwidth.setModel({ value: gaugestart.model.scales[0].ranges[args.itemId].endWidth });
        }

        function onchange(args) {
            var gaugetarget = $("#linearCore").data("ejLinearGauge");
            var target1 = $("#rangeid").data("ejDropDownList");
            var endslide = $("#endvalue").data("ejSlider");
            var startslide = $("#startvalue").data("ejSlider");
            if (args.id == "startvalue") {
                endslide.setModel({ minValue: args.value });
                gaugetarget.setRangeStartValue(0, target1.selectedIndexValue, args.value);
            }
            else if (args.id == "endvalue") {
                startslide.setModel({ maxValue: args.value });
                gaugetarget.setRangeEndValue(0, target1.selectedIndexValue, args.value);
            }
            if (args.id == "startwidth")
                gaugetarget.setRangeStartWidth(0, target1.selectedIndexValue, args.value);
            if (args.id == "endwidth")
                gaugetarget.setRangeEndWidth(0, target1.selectedIndexValue, args.value);
            if (args.id == "pointervalue") {
                gaugetarget.setBarPointerValue(0, 0, args.value);
            }
            if (args.text == "far" || args.text == "near" || args.text == "center") {
                gaugetarget.setRangePosition(0, 0, args.text);
                gaugetarget.setRangePosition(0, 1, args.text);
            }
        }

