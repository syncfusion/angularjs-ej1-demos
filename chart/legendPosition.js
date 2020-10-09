var chartObj;
syncApp.controller('ChartCtrl', function ($scope) {
   $scope.Points1 = [
						{ x: 'United States', y: 84, fill: "#FF0066" },{ x: 'United Kingdom', y: 89, fill: "#CC3399" }, 
						{ x: 'United Arab Emirates', y: 88, fill: "#6699FF" }, { x: 'New Caledonia', y: 66, fill: "#005277" },
                        { x: 'French Polynesia', y: 56, fill: "#CC99FF" },{ x: 'Switzerland', y: 86, fill: "#C4C24A" }, 
                        { x: 'Singapore', y: 73, fill: "#E27F2D" },{x: 'New Zealand', y: 82, fill: "#F6B53F" },
                        { x: 'Saudi Arabia', y: 60, fill: "#6A4B82" }, { x: 'Sweden', y: 94, fill: "#69D2E7" }, 
                        { x: 'Indonesia', y: 60, fill: "#E94649" },  { x: 'Philippines', y: 37, fill: "#FB954F" },
                        { x: 'South Africa', y: 48, fill: "#FF9900" },  { x: 'South Korea', y: 84, fill: "#009933" },
                        { x: 'Hong Kong', y: 74, fill:"#6FAAB0" },{ x: 'Netherlands', y: 93, fill: "#8BC652" }
					];
			
		chartObj = $("#container").data("ejChart");
		
		$("#optPositionChange").ejDropDownList({ "change": "positionChanged",  width: "110px",selectedItemIndex:0 });
		
        $("#optAlignmentChange").ejDropDownList({ "change": "alignmentChanged", width: "110px",selectedItemIndex:0 });
		
		$("#optRowcount").ejDropDownList({ "change": "rowcountChanged", width: "110px",selectedItemIndex:0 });
		
		$("#optColumncount").ejDropDownList({ "change": "columncountChanged", width: "110px",selectedItemIndex:0 });
		
		$("#optTextoverflow").ejDropDownList({"change":"textoverflowChanged",width:"110px",selectedItemIndex:0});
		
		$('#legendWidth').change(changeHeightWidth);
	
    $('#legendHeight').change(changeHeightWidth);
	
	$('#textWidth').change(changeTextWidth);
	
    $("#container").ejWaitingPopup({ showOnInit: false });

});

function alignmentChanged(sender) 
	{
        $("#container").ejChart("option", { "legend": legend(sender, sender.selectedText) });
		changeHeightWidth();    
	}
	
    function positionChanged(sender) 
	{
        $("#container").ejChart("option", { "legend": legend(sender, sender.selectedText) });
		changeHeightWidth();
    }
	function textoverflowChanged(sender) 
	{
        $("#container").ejChart("option", { "legend": legend(sender, sender.selectedText) });
		changeHeightWidth();
    }
	
	function rowcountChanged(sender)
	{
        $("#container").ejChart("option", { "legend": legend(sender, sender.selectedText) });
		changeHeightWidth();
    }
	
	function columncountChanged(sender) 
	{
        $("#container").ejChart("option", { "legend": legend(sender, sender.selectedText) });
		changeHeightWidth();
    }
	function legendBorder(sender)
	{
	    if (sender.model.theme == "flatdark" || sender.model.theme == "gradientdark")
	        sender.model.legend.border.color = "white";
	}
	
    function legend(sender, data) 
	{
		switch(sender.model.change)
		{
			case "positionChanged":
                var legendPosition = data.toLowerCase();
                return {
                    position: legendPosition
                }; 
			break;
			case "textoverflowChanged":
                var textoverflow = data.toLowerCase();
                return {
                    textOverflow: textoverflow
                }; 
			break;
			case "alignmentChanged":
                var legendAlignment = data.toLowerCase();
                return {
                    alignment: legendAlignment
                };
			break;
			case "rowcountChanged":
				var count=data;
				return {rowCount:count};
			break;
			case "columncountChanged":
				var count=data;
				return {columnCount:count};
			break;
		}
    }
	
	function changeTextWidth()
	{
		var textwidth=parseInt($("#textWidth").val());
		var chart = $("#container").ejChart("instance");
		chart.model.legend.textWidth=textwidth;
		chart.redraw();
	}
	
    function changeHeightWidth()
    {
         var width = $("#legendWidth").val();
        var height = $("#legendHeight").val();
        var chart = $("#container").ejChart("instance");
		if(parseInt(width))
          chart.model.legend.size.width = (parseInt(width)>0) ? width :"";
		if(parseInt(height))
          chart.model.legend.size.height = (parseInt(height)>0) ? height :"";
        chart.redraw();
    }
	