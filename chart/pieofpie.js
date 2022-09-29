var obj = [
			 { x: 'Saudi Arabia', y: 58, text: '58%' },
			 { x: 'Persian Gulf', y: 15, text: '15%' },
             { x: 'Canada', y: 13, text: '13%' },
			 { x: 'Venezuela', y: 8, text: '8%' },
             { x: 'Mexico', y: 3, text: '3%' },
             { x: 'Russia', y: 2, text: '2%' },                             							 
			 { x: 'Miscellaneous', y: 1, text: '1%' }
		];
syncApp.controller('ChartCtrl', function ($scope) {
    $scope.dataSource = obj;
    $scope.displaytextrender = "displayTextRender";
    $scope.piemarker = { marker:{ dataLabel:{ visible:true, font: {size:'13px',color: 'white'}}}}
	$('#splitValue').change(changeSplitValue);
	$('#splitMode').change(changeSplitMode);
	$("#gapWidth").ejNumericTextbox({
         value: 100, width: "95px", height:"25px",minValue :0, maxValue: 300, change: "changeGapWidth", 
    });
});


function changeSplitValue() {       
        var chartObj = $("#chartContainer").ejChart("instance");
        if(chartObj.model.series[0].splitMode !="indexes")
            chartObj.model.series[0].splitValue = parseFloat($("#splitValue").val());
        else
            chartObj.model.series[0].splitValue = JSON.parse("[" + $("#splitValue").val() + "]"); 
        chartObj.redraw();
    }
	function changeGapWidth(sender)
	{
	  var chartObj = $("#chartContainer").ejChart("instance");
        chartObj.model.series[0].gapWidth = parseInt(sender.value);
        chartObj.redraw();
	}
	
	function changeSplitMode(){ 
        var option = $("#splitMode option:selected").text();       
        if (option == "Value") {
            $("#splitValue").val(10);
            $("#chartContainer").ejChart("option", { "commonSeriesOptions": { splitValue: $("#splitValue").val(), splitMode: option.toLowerCase() } });
        }
		else if (option == "Position") {
            $("#splitValue").val(3);
            $("#chartContainer").ejChart("option", { "commonSeriesOptions": { splitValue: $("#splitValue").val(), splitMode: option.toLowerCase() } });
        }
        else if (option == "Percentage") {
            $("#splitValue").val(15);
            $("#chartContainer").ejChart("option", { "commonSeriesOptions": { splitValue: $("#splitValue").val(), splitMode: option.toLowerCase() } });
        }
        else if (option == "Indexes") {
		  $("#splitValue").val("1,4,5,2");
            $("#chartContainer").ejChart("option", { "commonSeriesOptions": { splitValue:"1,4,5,2" ,splitMode: option.toLowerCase() } });
        }
    }
