syncApp.controller('LegendGaugeCtrl', function ($scope) {
	createPropertiesWindow();
    });
	  
	  function createPropertiesWindow(){
		$('#position').ejDropDownList({
                dataSource: ["Top", "Bottom", "Left", "Right"],
                select: "position", width: "110px", height: "22px",
                selectedItemIndex:1
            });
			
			$('#alignment').ejDropDownList({
                dataSource: ["Near", "Center", "Far"],
                select: "alignment", width: "110px", height: "22px",
                selectedItemIndex:1
            });
			
			$('#shape').ejDropDownList({
                dataSource: ["Circle", "Diamond", "Rectangle","Triangle", "Slider", "Wedge", "Pentagon", "Trapezoid", "Line"],
                select: "shape", width: "110px", height: "22px",
                selectedItemIndex:0
            });
	  
	  }

 function position(sender){
		   var gauge = $("#CircularGauge1").ejCircularGauge("instance");
		   gauge.model.legend.position = sender.text.toLowerCase();
		   gauge.refresh();
		   var pointerLength = gauge.model.scales[0].radius - gauge.model.scales[0].ticks[0].height - (parseInt(gauge.model.scales[0].labels[0].font.size) + 5);
           gauge.setPointerLength(0, 0, pointerLength); 
		}
		
        function alignment(sender){
		   var gauge = $("#CircularGauge1").ejCircularGauge("instance");
		   gauge.model.legend.alignment = sender.text.toLowerCase();
		   gauge.refresh();
		}
		
		function shape(sender){
		   var gauge = $("#CircularGauge1").ejCircularGauge("instance");
		   gauge.model.legend.shape = sender.text.toLowerCase();
		   gauge.refresh();
		}
