syncApp.controller('DigitalGaugeCtrl', function ($scope) {
     createPropertiesWindow();
	 $("#labeltext").bind("keyup", function () {
                var val = $("#labeltext").val();
                var digitarget = $("#digitalCore").data("ejDigitalGauge");
                digitarget.setValue(0, val);
       });
	   
   });

function createPropertiesWindow()
{
	 $("#segmentspacing").ejSlider({
                sliderType: ej.SliderType.MinRange,
                value: -1,
                height: 10,
                width: 110,
                minValue: -2,
                maxValue: 1,
                animate: true,
                slide: "onchange",
                change: "onchange"
            });

            $("#segmentwidth").ejSlider({
                sliderType: ej.SliderType.MinRange,
                value: 2,
                height: 10,
                width: 110,
                minValue: 1,
                maxValue: 3,
                animate: true,
                slide: "onchange",
                change: "onchange"
            });

            $("#charspacing").ejSlider({
                sliderType: ej.SliderType.MinRange,
                value: 2,
                height: 10,
                width: 110,
                minValue: 1,
                maxValue: 4,
                animate: true,
                slide: "onchange",
                change: "onchange"
            });

            $('#charactertype').ejDropDownList({
                dataSource: ["7 segment", "14 segment", "16 segment", "8x8 dotmatrix", "8x8 squarematrix"],
                select: "onchange", width: "200px", selectedItemIndex: 3
            });

}
     
	function onchange(args) {
            var digitaltarget = $("#digitalCore").data("ejDigitalGauge");
			digitaltarget.model.items[0].value = digitaltarget.model.items[0].value.toString();
            var charSpacing = $("#charspacing").data("ejSlider");

            if (args.id == "segmentspacing") {
                digitaltarget.model.items[0].segmentSettings.spacing = args.value;
            }
            else if (args.id == "segmentwidth") {
                digitaltarget.model.items[0].segmentSettings.width = args.value;
            }
            else if (args.id == "charspacing") {
                digitaltarget.model.items[0].characterSettings.spacing = args.value;
            }
            if (args.text == "7 segment" || args.text == "14 segment" || args.text == "16 segment") {
                digitaltarget.model.items[0].segmentSettings.length = 8;
                digitaltarget.model.items[0].characterSettings.spacing = 10;
                charSpacing.model.minValue = 7;
                charSpacing.model.maxValue = 12;
                charSpacing.setModel({ value: digitaltarget.model.items[0].characterSettings.spacing });
            }
            else if (args.text == "8x8 dotmatrix" || args.text == "8x8 squarematrix") {
                digitaltarget.model.items[0].segmentSettings.length = 2;
                digitaltarget.model.items[0].characterSettings.spacing = 2;
                charSpacing.model.minValue = 1;
                charSpacing.model.maxValue = 4;
                charSpacing.setModel({ value: digitaltarget.model.items[0].characterSettings.spacing });
            }
			switch (args.text) {
                case "7 segment":
                    digitaltarget.model.items[0].characterSettings.type = "sevensegment";
                    break;
                case "14 segment":
                    digitaltarget.model.items[0].characterSettings.type = "fourteensegment";
                    break;
                case "16 segment":
                    digitaltarget.model.items[0].characterSettings.type = "sixteensegment"
                    break;
                case "8x8 dotmatrix":
                    digitaltarget.model.items[0].characterSettings.type = "eightcrosseightdotmatrix";
                    break;
                case "8x8 squarematrix":
                    digitaltarget.model.items[0].characterSettings.type = "eightcrosseightsquarematrix";
                    break;
                }
            digitaltarget._setModel(digitaltarget.model.items);

        }
