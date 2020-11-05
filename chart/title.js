 var chartData = window.chartData;

syncApp.controller('ChartCtrl', function ($scope) {
    $scope.TooltipFormat = " Date : #point.x#  <br/> Profit : #point.y#";
     $scope.Points1 = [{x:'Germany',y:35.5}, {x:'China',y:18.3}, {x:'Italy',y:17.6}, {x:'Japan',y:13.6},
							{x:'US',y:12}, {x:'Spain',y:5.6}, {x:'France',y:4.6}, {x:'Australia',y:3.3},
							{x:'Belgium',y:3}, {x:'UK',y:2.9}];	
	    
	});
	
	 function titlePadding()
{
    var chartobj = $("#container").ejChart("instance");
	var xmaxTitleWidth = document.getElementById('xmaxTitleWidth');
    var offset = document.getElementById('offset');
	if($("#axis")[0].value == "primaryXAxis")   
	{
	if($("#enabletrim")[0].value == "True")
	{
	chartobj.model.primaryXAxis.title.enableTrim=true;
	}
	else
	{
	chartobj.model.primaryXAxis.title.enableTrim=false;
	}
	chartobj.model.primaryXAxis.title.maximumTitleWidth=parseInt(xmaxTitleWidth.value);
	chartobj.model.primaryXAxis.title.alignment=($("#alignment")[0].value);
	chartobj.model.primaryXAxis.title.position=($("#position")[0].value);
	chartobj.model.primaryXAxis.title.offset=parseInt(offset.value);
	}
	else if($("#axis")[0].value == "primaryYAxis")
	{
	if($("#enabletrim")[0].value == "True")
	{
	chartobj.model.primaryYAxis.title.enableTrim=true;
	}
	else
	{
	chartobj.model.primaryYAxis.title.enableTrim=false;
	}
	chartobj.model.primaryYAxis.title.maximumTitleWidth=parseInt(xmaxTitleWidth.value);
	chartobj.model.primaryYAxis.title.alignment=($("#alignment")[0].value);
	chartobj.model.primaryYAxis.title.position=($("#position")[0].value);
	chartobj.model.primaryYAxis.title.offset=parseInt(offset.value);
	}
	
	$("#container").ejChart("redraw");
}
		

 
	

