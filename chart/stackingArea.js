

syncApp.controller('ChartCtrl', function ($scope) {
  $scope.Points1 = [{ x: 2002, y: 6 }, { x: 2003, y: 7.5 }, { x: 2004, y: 6 }, { x: 2005, y: 6.5 }, 
							 { x: 2006, y: 7.4 }, { x: 2007, y: 7.9 }, { x: 2008, y: 7.5 }, { x: 2009, y: 8.5 }, 
							 { x: 2010, y: 4.8 }, { x: 2011, y: 9.3 }];
							 
  $scope.Data = [{ x: 2002, y: 3.5 }, { x: 2003, y: 4.9 }, { x: 2004, y: 3.7 }, { x: 2005, y: 7.5 }, 
							 { x: 2006, y: 4.8 }, { x: 2007, y: 2.6 }, { x: 2008, y: 4.7 }, { x: 2009, y: 3.7 }, 
							 { x: 2010, y: 3.5 }, { x: 2011, y: 3.6 }];
							 
   $scope.Data2 = [{ x: 2002, y: 8.1 }, { x: 2003, y: 8.8 }, { x: 2004, y: 6.7 }, { x: 2005, y: 6.4 }, 
							 { x: 2006, y: 4 }, { x: 2007, y: 4.8 }, { x: 2008, y: 7.4 }, { x: 2009, y: 3.5 }, 
							 { x: 2010, y: 8.3 }, { x: 2011, y: 4.7 }];
							 
  $scope.ChartData = [{ x: 2002, y: 2.5 }, { x: 2003, y: 6.1 }, { x: 2004, y: 6.2 }, { x: 2005, y: 1.8 }, 
							 { x: 2006, y: 4 }, { x: 2007, y: 6.5 }, { x: 2008, y: 6.7 }, { x: 2009, y: 7.2 },
							 { x: 2010, y: 8.4 }, { x: 2011, y: 6.9 }];							 
});

function changeSeries(args) {
    if (args.value == "stackingsplinearea100")
        $('#container').ejChart('option', { primaryYAxis: { range: { min: 0, max: 100, interval: 10 } } });
    else
        $('#container').ejChart('option', { primaryYAxis: { range: { min: 0, max: 30, interval: 5 } } });
    $('#container').ejChart('option', { commonSeriesOptions: { type: args.value } });
}
	
 

