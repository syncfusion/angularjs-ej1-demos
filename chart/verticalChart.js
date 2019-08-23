var chartobj;	
    var intervalId;	
    var count = 0;	
	
syncApp.controller('ChartCtrl', function ($scope) {
	
	 $scope.load = "onchartLoading";
});

   function onchartLoading(sender) 
	{
		loadTheme(sender);
		for(var i=11;i<50;i=i+1)
		{
	     AddPoint(sender.model.series[0],count);
	     AddPoint(sender.model.series[1],count);
		 count++;
		}
        chartobj = this;

       intervalId = window.setInterval(OnRefresh, 10);
    }
	
 function OnRefresh() 
	{	
       if(chartobj.model){
	    count += 2;		
        AddPoint(chartobj.model.series[0], count);
		AddPoint(chartobj.model.series[1], count);
        $("#container").ejChart("redraw");
		} else { clearInterval(intervalId);}
    }	
	
 
	
	function AddPoint(series, count) 
	{
        if (series.points == undefined)
            series.points = [];			
        series.points[series.points.length] = { x: new Date(2015, 8, 26,08,39,count), y: getRandomNum(series) };
    }
	
	function getRandomNum(series)
	{	    
        var value;
        if (count <= 50) {
           if(series.name=="Indonesia")
               value = Math.floor((Math.random() * (3 - (-3) + 1)) - 3);
           else
               value = Math.floor((Math.random() * (2 - (-2) + 1)) - 2);
        }
        else if (count <= 100)
        {
            if (series.name == "Indonesia")
                value = Math.floor((Math.random() * (9 - (-9) + 1)) - 9);
            else
                value = Math.floor((Math.random() * (9 - (-9) + 1)) - 9);

        }
        else if (count <= 150) {
            if (series.name == "Indonesia")
                value = Math.floor((Math.random() * (6 - (-7) + 1)) - 7);
            else
                value = Math.floor((Math.random() * (7 - (-6) + 1)) - 6);
        }
        else if (count <= 220) {
            if (series.name == "Indonesia")
                value = Math.floor((Math.random() * (2 - (-3) + 1)) - 3);
            else
                value = Math.floor((Math.random() * (3 - (-2) + 1)) - 2);
        }
        else if (count <= 270) {
            if (series.name == "Indonesia")
                value = Math.floor((Math.random() * (1 - (-2) + 1)) - 2);
            else
                value = Math.floor((Math.random() * (2 - (-2) + 1)) - 2);
        }
        else if (count <= 320) {
            if (series.name == "Indonesia")
                value = Math.floor((Math.random() * (0 - (0) + 1)) - 0);
            else
                value = Math.floor((Math.random() * (0 - (0) + 1)) - 0);
        }
        else {

            clearInterval(intervalId);

        }
       
       return value;
    }

 
	
	

