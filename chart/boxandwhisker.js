var obj = [		{ x: "Development", y: [22,22,23,25,25,25,26,27,27,28,28,29,30,32,34,32,34,36,35,38] }, 
				{ x: "Testing", y: [22,33,23,25,26,28,29,30,34,33,32,31,50] }, 
				{ x: "HR", y: [22,24,25,30,32,34,36,38,39,41,35,36,40,56]  }, 
				{ x: "Finance", y: [26,27,28,30,32,34,35,37,35,37,45] },
				{ x: "R&D", y: [26,27,29,32,34,35,36,37,38,39,41,43,58] },
				{ x: "Sales", y: [27,26,28,29,29,29,32,35,32,38,53] },
				{ x: "Inventory", y: [21,23,24,25,26,27,28,30,34,36,38] },							 						
				{ x: "Graphics", y: [26,28,29,30,32,33,35,36, 52] },
				{ x: "Training", y: [28,29,30,31,32,34,35,36] }	
		];
		
	

syncApp.controller('ChartCtrl', function ($scope) {
    $scope.dataSource = obj;
	$("#boxmode").ejDropDownList({ "change": "changeBoxmode",width: "110px",selectedItemIndex:0  });
	$('#Median').click(function () {
		var chart = $("#container").ejChart("instance");   
            if ($("#Median").is(":checked"))
                chart.model.series[0].showMedian = true;
            else
                chart.model.series[0].showMedian = false;
            chart.redraw();
        });
});
     
        
function changeBoxmode(e) 
	{
		$('#container').ejChart('option', { commonSeriesOptions: { boxPlotMode: e.value } });
    }	

