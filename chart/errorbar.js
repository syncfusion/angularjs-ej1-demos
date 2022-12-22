
syncApp.controller('ChartCtrl', function ($scope) {
    $scope.Points1 = [{ x:"Jan", y:7.0 }, { x:"Feb", y: 6.9  }, { x: "Mar", y:9.5 },{ x: "Apr", y: 14.5 }, { x: "May", y: 18.2  }, { x: "Jun", y:21.5 },
						{ x:"Jul", y:25.2 }, { x:"Aug", y: 26.5  }, { x: "Sep", y:23.3 },{ x: "Oct", y: 18.3 }, { x: "Nov", y: 13.9  }, { x: "Dec", y:9.6 }];
			
			$("#vertical").ejNumericTextbox({
                value: 3, width: "75%", minValue :1, maxValue: 5, change: "vertical", 
            });
			
	    $("#horizontal").ejNumericTextbox({
                value: 3, width: "75%", minValue :1, maxValue: 5, change: "horizontal"
            });
			
		 $("#verticalpositive").ejNumericTextbox({
                value: 3, width: "75%", minValue :1, maxValue: 5, change: "verticalPositive",enabled:false
            });
			
		$("#verticalnegative").ejNumericTextbox({
                value: 3, width: "75%", minValue :1, maxValue: 5, change: "verticalNegative",enabled:false
            });
		$("#horizontalpositive").ejNumericTextbox({
                value: 1, width: "75%", minValue :1, maxValue: 5, change: "horizontalPositive",enabled:false
            });
			
		$("#horizontalnegative").ejNumericTextbox({
                value: 1, width: "75%", minValue :1, maxValue: 5, change: "horizontalNegative",enabled:false
            });
        $("#capLength").ejNumericTextbox({
                value: 20, width: "75%", minValue :10, maxValue: 50, change: "capLength"
            });
			
		$("#capWidth").ejNumericTextbox({
                value: 1, width: "75%", minValue :1, maxValue: 5, change: "capWidth"
            });	

         $('#errorBarColorPicker').ejColorPicker({
                select: "onSelectError", value: "#000000"
            });
        $('#capColorPicker').ejColorPicker({
                select: "onSelectCap", value: "#000000"
            });

        $('#mode').change(function () {
        var mode1 = $("#mode option:selected").text();
        var chart = $("#container").ejChart("instance");
        switch (mode1) {
            case 'Vertical':
                chart.model.series[0].errorBar.mode = 'vertical';
                chart.redraw();
                break;
            case 'Horizontal':
                chart.model.series[0].errorBar.mode = 'horizontal';
                chart.redraw();
                break;
            case 'Both':
                chart.model.series[0].errorBar.mode = 'both';
                chart.redraw();
                break;
            default:
        }
    });

    $('#direction').change(function () {
        var direction1 = $("#direction option:selected").text();
        var chart = $("#container").ejChart("instance");
        switch (direction1) {
            case 'Both':
                chart.model.series[0].errorBar.direction = 'both';
                chart.redraw();
                break;
            case 'Minus':
                chart.model.series[0].errorBar.direction = 'minus';
                chart.redraw();
                break;
            case 'Plus':
                chart.model.series[0].errorBar.direction = 'plus';
                chart.redraw();
                break;
            default:
        }
    });

$('#ErrorBarType').change(function () {
        var ErrorType = $("#ErrorBarType option:selected").text();
        var chart = $("#container").ejChart("instance");
        switch (ErrorType) {
            case 'Fixed Value':
                chart.model.series[0].errorBar.type = 'fixedValue';
                chart.redraw();
                break;
            case 'Percentage':
                chart.model.series[0].errorBar.type = 'percentage';
                chart.redraw();
                break;
            case 'Standard Deviation':
                chart.model.series[0].errorBar.type = 'standardDeviation';
                chart.redraw();
                break;
            case 'Standard Error':
                chart.model.series[0].errorBar.type = 'standardError';
                chart.redraw();
                break;
            case 'Custom':
                chart.model.series[0].errorBar.type = 'custom';
                chart.redraw();
                break;
            default:
       

	   }
    });
	
    	$("#visible").click(function(){
    if ( $(this).is(':checked') ){
	   $("#cap").removeAttr("disabled");
       $("#ErrorBarType").removeAttr("disabled");
       $("#mode").removeAttr("disabled");
       $("#direction").removeAttr("disabled");
	   $("#vertical").ejNumericTextbox({enabled:true});
	   $("#horizontal").ejNumericTextbox({enabled:true});
	   $("#verticalpositive").ejNumericTextbox({enabled:false});
       $("#verticalnegative").ejNumericTextbox({enabled:false});
       $("#horizontalpositive").ejNumericTextbox({enabled:false});
       $("#horizontalnegative").ejNumericTextbox({enabled:false}); 
       $('#errorBarColorPicker').ejColorPicker({enabled:true});
       if ( $("#cap").is(':checked') ){
	          $("#capColorPicker").ejColorPicker({enabled:true});
              $("#capLength").ejNumericTextbox({enabled:true});
              $("#capWidth").ejNumericTextbox({enabled:true});	 
	        }
	        else{
	            $("#capColorPicker").ejColorPicker({enabled:false});
                $("#capLength").ejNumericTextbox({enabled:false});
                $("#capWidth").ejNumericTextbox({enabled:false});
	           }
      
	  }
    else {
       $("#cap").attr("disabled", "disabled");
       $("#ErrorBarType").attr("disabled", "disabled");
	   $("#mode").attr("disabled", "disabled");
	   $("#direction").attr("disabled", "disabled");
	   $("#vertical").ejNumericTextbox({enabled:false});
	   $("#horizontal").ejNumericTextbox({enabled:false});
	   $("#verticalpositive").ejNumericTextbox({enabled:false});
       $("#verticalnegative").ejNumericTextbox({enabled:false});
       $("#horizontalpositive").ejNumericTextbox({enabled:false});
       $("#horizontalnegative").ejNumericTextbox({enabled:false});
       $('#errorBarColorPicker').ejColorPicker({enabled:false});
	   $("#capColorPicker").ejColorPicker({enabled:false});
       $("#capLength").ejNumericTextbox({enabled:false});
       $("#capWidth").ejNumericTextbox({enabled:false});
	}
  });
  
  $("#cap").click(function(){
    if ( $(this).is(':checked') ){
	   $("#capColorPicker").ejColorPicker({enabled:true});
       $("#capLength").ejNumericTextbox({enabled:true});
       $("#capWidth").ejNumericTextbox({enabled:true});	 
	}
	else{
	   $("#capColorPicker").ejColorPicker({enabled:false});
       $("#capLength").ejNumericTextbox({enabled:false});
       $("#capWidth").ejNumericTextbox({enabled:false});
	}
	});
	
    $('#ErrorBarType').change(function() {
       var dropdownValue = $("#ErrorBarType option:selected").text();
       if (dropdownValue == "Custom"){
	   $("#vertical").ejNumericTextbox({enabled:false});
	   $("#horizontal").ejNumericTextbox({enabled:false});
	   $("#verticalpositive").ejNumericTextbox({enabled:true});
       $("#verticalnegative").ejNumericTextbox({enabled:true});
       $("#horizontalpositive").ejNumericTextbox({enabled:true});
       $("#horizontalnegative").ejNumericTextbox({enabled:true});
	   }
	   else{
	   $("#vertical").ejNumericTextbox({enabled:true});
	   $("#horizontal").ejNumericTextbox({enabled:true});
	   $("#verticalpositive").ejNumericTextbox({enabled:false});
       $("#verticalnegative").ejNumericTextbox({enabled:false});
       $("#horizontalpositive").ejNumericTextbox({enabled:false});
       $("#horizontalnegative").ejNumericTextbox({enabled:false});
	   }
	   });
	
});

 function onSelectError(sender){
	    var chart = $("#container").ejChart("instance");
		chart.model.series[0].errorBar.fill = sender.value;
		chart.redraw();
	}
	
	function onSelectCap(sender){
	    var chart = $("#container").ejChart("instance");
		chart.model.series[0].errorBar.cap.fill = sender.value;
		chart.redraw();
	}
	
    function visible() {
        var chart = $("#container").ejChart("instance");
         if ($("#visible").is(":checked"))
            chart.model.series[0].errorBar.visibility ="visible";
        else {
            chart.model.series[0].errorBar.visibility= "hidden";
        }
        chart.redraw();
    }


    function cap() {
        var chart = $("#container").ejChart("instance");
        if ($("#cap").is(":checked"))
            chart.model.series[0].errorBar.cap.visible = true;
        else {
            chart.model.series[0].errorBar.cap.visible = false;
        }
        chart.redraw();
    }
	
	function vertical(sender) {
        var chart = $("#container").ejChart("instance");
        chart.model.series[0].errorBar.verticalErrorValue = sender.value;
        chart.redraw();
    }

    function horizontal(sender) {
        var chart = $("#container").ejChart("instance");
        chart.model.series[0].errorBar.horizontalErrorValue = sender.value;
        chart.redraw();
    }
    function verticalPositive(sender) {
        var chart = $("#container").ejChart("instance");
        chart.model.series[0].errorBar.verticalPositiveErrorValue = sender.value;
        chart.redraw(); 
    }

    function verticalNegative(sender) {
        var chart = $("#container").ejChart("instance");
        chart.model.series[0].errorBar.verticalNegativeErrorValue =  sender.value;
        chart.redraw();
    }
    function horizontalPositive(sender) {
        var chart = $("#container").ejChart("instance");
        chart.model.series[0].errorBar.horizontalPositiveErrorValue =  sender.value;
        chart.redraw();
    }

    function horizontalNegative(sender) {
        var chart = $("#container").ejChart("instance");
        chart.model.series[0].errorBar.horizontalNegativeErrorValue =  sender.value;
        chart.redraw();
    }

    function capLength(sender) {
        var chart = $("#container").ejChart("instance");
        chart.model.series[0].errorBar.cap.length =  sender.value;
        chart.redraw();
    }


    function capWidth(sender) {
        var chart = $("#container").ejChart("instance");
        chart.model.series[0].errorBar.cap.width =  sender.value;
        chart.redraw();
    }
    
	

