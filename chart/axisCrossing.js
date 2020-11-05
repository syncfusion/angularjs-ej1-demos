
syncApp.controller('ChartCtrl', function ($scope) {
		
       $scope.Points1 = [{ x: 2000, y: -.33, size: 5, fill: '#E94649' }, 
							 { x: 2000.5, y: .81, size: 4, fill: '#F6B53F' },
							 { x: 2001.5, y: .40, size: 9, fill: '#6FAAB0'}, 
							 { x: 2002, y: -.48, size: 2, fill: '#C4C24A' },
                             { x: 2002.5, y: -.19, size: 8, fill: '#FB954F' }, 
							 { x: 2003, y: .70, size: 11, fill: '#D9CEB2' },
							 { x: 2006, y: .62, size: 1, fill: '#FF8D8D' }, 
							 { x: 2007, y: .39, size: 9, fill: '#69D2E7' }, 
							 { x: 2008, y: .70, size: 6, fill: '#E27F2D' }, 
							 { x: 2009, y: .22, size: 7, fill: '#6A4B82' },
							 { x: 2010, y: .48, size: 7, fill: '#4B4B82' },
							 { x: 2006.5, y: -.62, size: 1, fill: '#CF8D8D' }, 
							 { x: 2007.5, y: -.39, size: 9, fill: '#B9D2E7' }, 
							 { x: 2008.5, y: -.70, size: 6, fill: '#A27F2D' }, 
							 { x: 2009.5, y: -.22, size: 7, fill: '#CA4D82' },
							 { x: 2010.5, y: -.48, size: 7, fill: '#B64A82' }];		
			
		 $("#xCrossingValue").ejNumericTextbox({
                value: 0, width: "80px", minValue :-100, maxValue: 100,decimalPlaces:0,incrementStep:25, change: "xCrossingValue", 
            });
		 $("#yCrossingValue").ejNumericTextbox({
                groupSeparator:'',value: 2005, width: "80px", minValue :1998, maxValue: 2012,decimalPlaces:0, change: "yCrossingValue", 
            });
});

function toolTipInitialize(args)
{
		var point = args.model.series[args.data.seriesIndex].points[args.data.pointIndex];
				args.data.currentText = 'Sales in year ' + point.x + '<br/>Cost: ' + point.size + ' million(s)<br/>' + (point.y < 0 ? -point.y * 100 + ' % loss' : point.y * 100 + ' % profit');
}

function xCrossingValue(sender) 
		{
            $("#container").ejChart("option", { primaryXAxis: { crossesAt : parseInt(sender.value)/100} });
        }
		 function yCrossingValue(sender)
	    {
			$("#container").ejChart("option", { primaryYAxis: { crossesAt : parseInt(sender.value)} });
        }
function axisCrossing()
		{
			var chartobj = $("#container").ejChart("instance");
			var xCrossValue = document.getElementById('xCrossingValue');
			var yCrossValue = document.getElementById('yCrossingValue');		
			if ($("#myCheck1").is(":checked"))
				chartobj.model.primaryXAxis.showNextToAxisLine = true;
			else 
				chartobj.model.primaryXAxis.showNextToAxisLine = false;		 		
			if ($("#myCheck2").is(":checked"))
				chartobj.model.primaryYAxis.showNextToAxisLine = true;
			else 
				chartobj.model.primaryYAxis.showNextToAxisLine = false;	
			$("#container").ejChart("redraw");
		}		


