 var chartData = window.chartData;

syncApp.controller('ChartCtrl', function ($scope) {
	$scope.Trend = [{visibility: "visible", fill: "#99CCFF", name: "Linear"}
					];
  $scope.load = "onchartLoading";
		
	$('#trendlineType').change(function (){
		  var type = $("#trendlineType option:selected").text();
          var chart = $("#container").ejChart("instance");
		  chart.model.series[0].points = [];
		  if(type.toLowerCase() != "power"){
		     chart.model.series[0].dataSource = data.Open;
			 chart.model.series[0].name = "Rupees";
			 chart.model.series[0].trendlines[0].name = type;
			 chart.model.primaryXAxis.title.text = "Years";
			 chart.model.primaryYAxis.title.text = "Rupees against Dollars";
			 chart.model.title.text = 'Historical Indian Rupee Rate (INR USD)';
			 
		   }
		  else {	 
		     chart.model.series[0].dataSource = powerData;
			 chart.model.series[0].name = "Meters";
			 chart.model.series[0].trendlines[0].name = type + "(Meters)";
			  chart.model.primaryXAxis.title.text = "Seconds";
			  chart.model.primaryYAxis.title.text = "Meters";
			  chart.model.title.text = 'Distance Measurement';
		   }
		  
		  chart.model.series[0].trendlines[0].type = type.toLowerCase();
		  if (type == "MovingAverage"){
		     $("#forwardForecast").attr("disabled", true);
			 $("#backwardForecast").attr("disabled", true);
			 $("#polynomialOrder").attr("disabled", true);
			 $("#period").attr("disabled", false);
		  } else if (type == "Polynomial"){
		     $("#forwardForecast").attr("disabled", false);
			 $("#backwardForecast").attr("disabled", false);
			 $("#polynomialOrder").attr("disabled", false);
			 $("#period").attr("disabled", true);
		  } else{
		      $("#forwardForecast").attr("disabled", false);
			  $("#backwardForecast").attr("disabled", false);
			  $("#polynomialOrder").attr("disabled", true);
			  $("#period").attr("disabled", true);
		  }
          chart.redraw()
        });
		
		
});

   var powerData = getPowerTrendData();
   var data = getData();
   function onchartLoading(sender){
	    loadTheme(sender);		
		sender.model.series[0].dataSource=data.Open;
		sender.model.series[0].xName="XValue";
		sender.model.series[0].yName= "YValue";
	  }
	  
	  function getData(){
	    var series1 = [];
		var yValue = [7.66, 8.03, 8.41,8.97,8.77,8.20,8.16,7.89,8.68,9.48,10.11,11.36,12.34,12.60,12.95,13.91,16.21,17.50,22.72,28.14,31.26,31.39,32.43,35.52,36.36,
                     41.33,43.12,45.00,47.23,48.62,46.60,45.28,44.01,45.17,41.20,43.41,48.32,45.65,46.61,53.34,58.53];
	    var j= 0;
        for(var i=1973; i<=2013; i++)	{
		   var point1 = { XValue: i, YValue: yValue[j] };
            series1.push(point1);
			j = j+1;
        }
		var data = { Open: series1 };
        return data;
		}
		
		function getPowerTrendData(){
		   var data = [
		   { XValue: 1, YValue: 10 },
		   { XValue: 2, YValue: 50 },
		   { XValue: 3, YValue: 80 },
		   { XValue: 4, YValue: 110 },
		   { XValue: 5, YValue: 180 },
		   { XValue: 6, YValue: 220 },
		   { XValue: 7, YValue: 300 },
		   { XValue: 8, YValue: 370 },
		   { XValue: 9, YValue: 490 },
		   { XValue: 10, YValue: 500 }
		              ];
		   return data;
		 }
		 
	function forwardForecast(sender){
       var chart = $("#container").ejChart("instance");
       var value = (sender.value == "") ? 0 : sender.value;
       chart.model.series[0].trendlines[0].forwardForecast=parseFloat(value);
       chart.redraw();
    }
	function backwardForecast(sender){
       var chart = $("#container").ejChart("instance");
         var value = (sender.value == "") ? 0 : sender.value;
       chart.model.series[0].trendlines[0].backwardForecast=parseFloat(value);
       chart.redraw();
    }
	function polynomialOrder(sender){
       var chart = $("#container").ejChart("instance");
       chart.model.series[0].trendlines[0].polynomialOrder=parseInt(sender.value);
       chart.redraw();
    }
	function period(sender){
       var chart = $("#container").ejChart("instance");
       chart.model.series[0].trendlines[0].period=parseInt(sender.value);
       chart.redraw();
    }

 
