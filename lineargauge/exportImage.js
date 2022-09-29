syncApp.controller('LinearGauge', function ($scope) {
                 
      });

  function buttonclickevent() {
            var hit = false;
            var fileName = $("#fileName").val().trim() == "" ? "LinearGauge" : $("#fileName").val();
            var specialChars = '<>:"/\|?*';
            for (i = 0; i < specialChars.length; i++) {
                if (fileName.indexOf(specialChars[i]) > -1) {
                    hit = true;
                }
            }
            if (!hit) {
                var fileFormat = $("#fileFormat option:selected").text();
                var flag = $("#linearCore").ejLinearGauge("exportImage", fileName, fileFormat);
                if (!flag)
                    alert("Sorry for the inconvenience. Export is currently not supported in Internet Explorer 9 and below version");
            }
            else
                alert("Your file name contains illegal characters");
        }
