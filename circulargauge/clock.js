syncApp.controller('CircularGaugeCtrl', function ($scope) {
	var timer;
	 timer = window.setInterval("setClock()", 1);
	$scope.DrawLabels = "LabelDraw"; 
     $scope.nvalue = "3";	
      });
	  
	   function LabelDraw(args) {
		   
            if (args.labelValue == 0) {
                args.style.textValue = "";
            }
            else if (args.labelValue == 12 || args.labelValue == 3 || args.labelValue == 6 || args.labelValue == 9) {
                args.style.font = "Bold 20px Segoe UI";
            }
        }
		
		  function setClock() {			  
            var estDay, estHours;
            var time = new Date();
            var utcHours = time.getUTCHours();
            var utcMinutes = time.getUTCMinutes();
            var utcSeconds = time.getUTCSeconds();
            if (utcHours - 5 < 0) {
                estHours = (utcHours - 5 + 24);
            } else {
                estHours = (utcHours - 5); }
            if (estHours > 12) {
                estDay = "PM";
                estHours = estHours - 12;
            }
            else {
                estDay = "AM";
            }

            utcSeconds = (utcSeconds / 60) * 12;
            utcMinutes = (utcMinutes / 60) * 12 + utcSeconds / 60;
            if (estHours == 12)
                estHours = 0;
            estHours = estHours + (utcMinutes / 12) + 1;
            var estText = parseInt(estHours) == 0 ? 12 : parseInt(estHours);
            var utcmin = (parseInt(time.getUTCMinutes()) < 10) ? "0" + parseInt(time.getUTCMinutes()) : parseInt(time.getUTCMinutes());

            var estTime = "EST Time : " + estText + ":" + utcmin + ":" + parseInt(time.getUTCSeconds()) + " " + estDay;

            var clockgauge = $("#CircularGauge1").data("ejCircularGauge");
            if (clockgauge != undefined) {
                clockgauge.setPointerValue(0, 0, estHours);
                clockgauge.setPointerValue(0, 1, utcMinutes);
                clockgauge.setPointerValue(0, 2, utcSeconds);
            }
        }
        