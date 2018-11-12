var timer1;
var currentValue = 0;
var isSetValue = true;
var timer2;
syncApp.controller('GaugeCtrl2', function ($scope) {
        timer1 = window.setInterval("setMeter()", 70);
      });
	  
     function setMeter() {
            if (isSetValue) {
                if (currentValue < 75) {
                    currentValue = currentValue + 1;
                }
                if (currentValue >= 75) {
                    isSetValue = false;
                    window.clearInterval(timer1);
                    timer2 = window.setInterval("decreaseMeter()", 70);
                }
                var speed = $("#CircularGauge3").data("ejCircularGauge");
                if (speed != undefined) {
                    speed.setPointerValue(0, 0, currentValue);
                    speed.setCustomLabelValue(0, 0, currentValue.toFixed(0));
                }
            }
        }

        function decreaseMeter() {
            if (!isSetValue) {
                window.clearInterval(timer1);
                if (currentValue > 0) {
                    currentValue = currentValue - 1;

                }
                if (currentValue <= 0) {
                    isSetValue = true;
                    window.clearInterval(timer2);
                    timer1 = window.setInterval("setMeter()", 70);
                }
                var speed = $("#CircularGauge3").data("ejCircularGauge");
                if (speed != undefined) {
                    speed.setPointerValue(0, 0, currentValue);
                    speed.setCustomLabelValue(0, 0, currentValue.toFixed(0));
                }
            }
        }
