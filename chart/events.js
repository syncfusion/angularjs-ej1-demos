var chartObj;
syncApp.controller('ChartCtrl', function ($scope) {
    $scope.TooltipFormat = "#point.x# : #point.y# millions <br/>";
	 $scope.Axes = [
				{
					name: 'yaxis',
					range:{min:55,max:75,interval:5},
					opposedPosition: true                            
				}
			];
		
	$scope.Points1 = [{ x: "China", y: 1268 }, { x: "India", y: 1004 }, { x: "United States", y: 282 },
							 { x: "Indonesia", y: 213 }, { x: "Brazil", y: 176 }];
		
		chartObj = $("#container").data("ejChart");
        $("#selectControls").ejDropDownList(
		{
            customCssClass: "metroblue",
            popupShown: "adjustpopupposition",
            showCheckbox: true,
            checkAll: true,
            change: "evtpropscheckedevent"
        });
	
});

 function evtpropscheckedevent(args) 
   {
     chartObj = $("#container").data("ejChart");
        if (args.isChecked)
		{
            switch (args.value) 
			{
                case "pointRegionClick": chartObj.option(args.value, "onpointclick"); break;
                case "pointRegionMouseMove": chartObj.option(args.value, "onpointmousemove"); break;
                case "legendItemMouseMove": chartObj.option(args.value, "onlegendmousemove"); break;
                case "legendItemClick": chartObj.option(args.value, "onlegendclicked"); break;
				case "chartClick": chartObj.option(args.value, "onchartclick"); break;
				case "chartDoubleClick": chartObj.option(args.value, "onchartdoubleclick"); break;
				case "chartMouseMove": chartObj.option(args.value, "onchartmousemove"); break;
				case "chartMouseLeave": chartObj.option(args.value, "onchartmouseleave"); break;
				case "axisLabelClick": chartObj.option(args.value, "onaxislabelclick"); break;
				case "axisLabelMouseMove": chartObj.option(args.value, "onaxislabelmousemove"); break;			
            }
        }
        else chartObj.option(args.value, "");
    }
	
    function onlegendclicked(sender) 
	{
		jQuery.addEventLog("Clicked on <span class='eventTitle'>Legend</span>");          
    }
	function onchartmouseleave(sender) 
	{
	    var str=stringName(sender);
		jQuery.addEventLog("Leaving on <span class='eventTitle'>"+str+"</span>");          
    }
	function onaxislabelclick(sender) 
	{
		jQuery.addEventLog("Clicked on <span class='eventTitle'>" + sender.data.text +"</span>");          
    }
	function onaxislabelmousemove(sender) 
	{
		jQuery.addEventLog("Moved on <span class='eventTitle'>" + sender.data.text +"</span>");          
    }
	function onchartclick(sender) 
	{
	    var str=stringName(sender);
		jQuery.addEventLog("Clicked on <span class='eventTitle'>"+str+"</span>");          
    }
	function onchartdoubleclick(sender) 
	{
	    var str=stringName(sender);
		jQuery.addEventLog("Double Clicked on <span class='eventTitle'>"+str+"</span>");          
    }
	function onchartmousemove(sender) 
	{
	    var str=stringName(sender);
		jQuery.addEventLog("Moved on <span class='eventTitle'>"+str+"</span>");          
    }
    function onpointclick(sender) 
	{
		jQuery.addEventLog("Clicked on <span class='eventTitle'> " + sender.model.primaryXAxis.labels[sender.data.region.Region.PointIndex] +"</span>");            
    }
	
    function onpointmousemove(sender)
	{
		jQuery.addEventLog("Moved on <span class='eventTitle'> "+ sender.model.primaryXAxis.labels[sender.data.region.Region.PointIndex] +"</span>");            
	}
	
    function onlegendmousemove(sender)
	{
		jQuery.addEventLog("Moved on <span class='eventTitle'>Legend</span>");       
    }
	function stringName(sender){
	             var id=sender.data.id,str;
                 if (id.indexOf("ChartTitle") > 0)  str = "ChartTitle";
                 else if (id.indexOf("Series") >0) str = "Series";
                 else if (id.indexOf("Legend") > 0) str = "Legend";
                 else if (id.indexOf("SvgRect") > 0) str = "Chart";
                 else if (id.indexOf("ChartArea") > 0) str = "ChartArea";
                 else if (id.indexOf("SecondaryAxis") > 0) str = "YAxisLabel";
                 else if (id.indexOf("PrimaryAxis") > 0)  str = "XAxisLabel";
                 else if (id.indexOf("XAxisTitle") > 0) str = "XAxisTitle";
                 else if (id.indexOf("YAxisTitle") > 0) str = "YAxisTitle";
				 else str = "Chart";
				 return str;
	}
	
    function onClear() 
	{
        jQuery.clearEventLog();
    }