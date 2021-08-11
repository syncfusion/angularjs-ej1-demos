syncApp.controller('LinearGauge', function ($scope) {
          createPropertiesWindow();
		 $scope.DrawLabel = "drawLabel";
		 $scope.DrawCustomLabel = "drawCustomLabel";
     });
	 
	 function createPropertiesWindow()
	 {
		  $("#pointervalue").ejSlider({
                sliderType: ej.SliderType.MinRange,
                value: 100,
                height: 10,
                width: 110,
                minValue: -10,
                maxValue: 110,
                enableAnimation: false,
                slide: "change",
                change: "change"
            });

            $('#temperaturetype').ejDropDownList({
                dataSource: ["Boiling Point", "Hot Bath", "Body Temp", "Beach Weather", "Cool Day", "Freezing Point", "Extreme Cold"],
                select: "change", width: "110px", selectedItemIndex: 0, height: "22px"
            });
	 }
	 
	 function change(args) {
            var slider=$("#pointervalue").data("ejSlider");
            var thermotarget = $("#linearCore").data("ejLinearGauge");
            if (args.id == "pointervalue") {
                thermotarget.setBarPointerValue(0, 0, args.value);
            }
            else if (args.text == "Boiling Point") {
                thermotarget.setBarPointerValue(0, 0, 100);
            }

            else if (args.text == "Hot Bath") {
                thermotarget.setBarPointerValue(0, 0, 40);
            }

            else if (args.text == "Body Temp") {
                thermotarget.setBarPointerValue(0, 0, 37);
            }

            else if (args.text == "Beach Weather") {
                thermotarget.setBarPointerValue(0, 0, 30);
            }

            else if (args.text == "Cool Day") {
                thermotarget.setBarPointerValue(0, 0, 10);
            }

            else if (args.text == "Freezing Point") {
                thermotarget.setBarPointerValue(0, 0, 0);
            }

            else if (args.text == "Extreme Cold") {
                thermotarget.setBarPointerValue(0, 0, -10);
            }
            slider.option({value:thermotarget.getBarPointerValue(0,0)})
        }
		
		 function drawLabel(args) {
            if (args.label.index == 1) {
                args.style.textValue = (args.label.value * (9 / 5)) + 32;
                args.style.font = "Normal 10px Segoe UI";
            }
        }

        function drawCustomLabel(args) {
            if (args.customLabelIndex == 2) {
                var temp = args.scaleElement.barPointers[0].value;
                var fahValue = (temp * (9 / 5)) + 32;
                if (temp == -10) {
                    args.style.textValue = "Very Cold Weather" + "(" + fahValue.toFixed(1) + "° F)";
                }
                else if ((temp > -10 && temp < 0) || (temp > 0 && temp < 15)) {
                    args.style.textValue = "Cool Weather" + " (" + fahValue.toFixed(1) + "° F)";
                }
                else if (temp == 0) {
                    args.style.textValue = "Freezing point of Water" + " (" + fahValue.toFixed(1) + "° F)";
                }
                else if (temp >= 15 && temp < 30) {
                    args.style.textValue = "Room Temperature" + " (" + fahValue.toFixed(1) + "° F)";
                }
                else if (temp == 30) {
                    args.style.textValue = "Beach Weather" + " (" + fahValue.toFixed(1) + "° F)";
                }
                else if (temp == 37) {
                    args.style.textValue = "Body Temperature" + " (" + fahValue.toFixed(1) + "° F)";
                }
                else if (temp == 40) {
                    args.style.textValue = "Hot Bath Temperature" + " (" + fahValue.toFixed(1) + "° F)";
                }
                else if (temp > 40 && temp < 100) {
                    args.style.textValue = "Very Hot Temperature" + " (" + fahValue.toFixed(1) + "° F)";
                }
                else if (temp == 100) {
                    args.style.textValue = "Boiling point of Water" + " (" + fahValue.toFixed(1) + "° F)";
                }
            }
        }



