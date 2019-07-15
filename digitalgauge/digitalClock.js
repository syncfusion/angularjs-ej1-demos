syncApp.controller('DigitalCTRL', function ($scope) {
       window.setInterval("setClock()", 1);
   });
   
    function setClock() {
            var currentTime = new Date();
            var hours = currentTime.getHours();
            var minutes = currentTime.getMinutes();
            var seconds = currentTime.getSeconds();
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            var orighour = hours;
            hours = ((hours + 11) % 12 + 1);
            var v = hours + ":" + minutes + ":" + seconds + " ";
            if (orighour > 11) {
                v += "PM";
            } else {
                v += "AM";
            }

            var digiclock = $("#digitalClock").data("ejDigitalGauge");
            if (digiclock != undefined) {
                digiclock.setValue(0, v);
            }
        }