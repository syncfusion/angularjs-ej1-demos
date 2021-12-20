syncApp.controller('CircularGaugeCtrl', function ($scope) {
	createPropertiesWindow();
      });
	  
	  
	  function  createPropertiesWindow(){
	        $("#btnSubmit").ejButton({ width: "50px", text: "Export", click: "buttonclickevent", });
            $('#fileFormat').ejDropDownList({
                dataSource: ["JPEG", "PNG"], width: "115", selectedItemIndex: 0
            });
	  }
	  
	    function buttonclickevent() {
            var hit = false;
            var fileName = $("#fileName").val().trim() == "" ? "CircularGauge" : $("#fileName").val();
            var specialChars = '<>:"/\|?*';
                for (i = 0; i < specialChars.length; i++) {
                    if (fileName.indexOf(specialChars[i]) > -1) {
                        hit = true;
                    }
                }
                if (!hit) {
                    var fileFormat = $("#fileFormat").ejDropDownList("option", "value");
                    var flag = $("#CircularGauge1").ejCircularGauge("exportImage", fileName, fileFormat);
                    if (!flag)
                        alert("Sorry for the inconvenience. Export is currently not supported in Internet Explorer 9 and below version");
                }
                else
                    alert("Your file name contains illegal characters");
        }
	  
        