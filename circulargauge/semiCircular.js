syncApp.controller('CircularGaugeCtrl', function ($scope) {
	createPropertiesWindow();
	$scope.PointerRange = "pointerrange";
	$scope.MouseClickUp = "pointerrange";
      });
	  
   function createPropertiesWindow(){
	     $("#chkAutoAngle").ejCheckBox({ checked:true,"change": "onchange" });
            $("#distanceFromCorner").ejSlider({
                sliderType: ej.SliderType.MinRange,
                value: 1,
                height: 10,
                minValue: 10,
                maxValue: 30,
                width: 110,
                enableAnimation: true,
                slide: "onchange",
                change: "onchange"
            });

            

            $('#gaugePosition').ejDropDownList({
                dataSource: ["center","topright", "topleft", "topcenter","middleleft","middleright","bottomleft","bottomright","bottomcenter"],
                select: "onchange", width: "110px", selectedItemIndex: 3
            });
	  
	  }
 
   function pointerrange(args) {
            if ((ej.browserInfo().name === "msie")? parseFloat(ej.browserInfo().version) > 8:true) {
            var speed = $("#CircularGauge1").data("ejCircularGauge");
            speed.setRangeEndValue(0, 0, args.model.scales[0].pointers[0].value);
            }
        }
 
         function onchange(args) {
            if (args.id == "distanceFromCorner") {
                $("#CircularGauge1").ejCircularGauge("option", "distanceFromCorner", args.value);
            }
            else if (args.type == "select") {
                $("#CircularGauge1").ejCircularGauge("option", "gaugePosition", args.value);
            }
            else if(args.type == "change") {
                $("#CircularGauge1").ejCircularGauge("option", "scales", [{ labels: [{ autoAngle: args.isChecked }] }]);
            }
        }
