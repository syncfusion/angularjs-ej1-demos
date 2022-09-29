
syncApp.controller('ChartCtrl', function ($scope) {
	$scope.load = "onchartloading";
    $scope.Points1 = [
						{
                            x: 0,
							y: 210, 
							fill: '#81B518',
                            marker: 
							{
                                shape: 'circle',
                                size:
                                {
                                    height: 12, width: 12
                                },
                                border: {color: '#81B518', width: 1.5 }, 
								fill: 'white' ,
                                visible: true
							}
                        },						
						{
							x: 1,
							y: null,
							marker:
							{
							    shape: 'circle',
							    size:
                                {
                                    height: 12, width: 12
                                },
							    border: { color: '#afafaf', width: 1.5 },
							    fill: 'white',
							    visible: true
							}
						},						
                    	{
                            x: 2,
							y: 150,
							fill: '#ccdc00',
                            marker:
							{
                                shape: 'circle',
                                size:
                                {
                                    height: 12, width: 12
                                },
                            border : {color: '#ccdc00', width: 1.5 },
							fill: 'white' ,
                            visible: true
							}
                        },						   
                        { 
							x: 3, 
							y: 200, 
							isEmpty: true,
							marker:
							{
							    shape: 'circle',
							    size:
                                {
                                    height: 12, width: 12
                                },
							    border: { color: '#afafaf', width: 1.5 },
							    fill: 'white',
							    visible: true
							} 
						},                           
						{
							x: 4, 
							y: 170, 
							fill: '#a6405a',
                            marker: 
							{
                                shape: 'circle',
                                size:
                                {
                                    height: 12, width: 12
                                },
                                border :{color: '#a6405a', width: 1.5},
								fill: 'white' ,
                                visible: true
                            }
                        },                          
						{
                            x: 5, 
							y: 200, 
							fill: '#60056d', 
							marker:
                            {
                                shape: 'circle',
                                size:
                                {
                                    height: 12, width: 12
                                },
                                border :{color: '#60056d', width: 1.5 },
								fill: 'white',
                                visible: true
                            }
                        },						
                        {
							x: 6, 
							y: 140,
							isEmpty: true,
							marker:
							{
							    shape: 'circle',
							    size:
                                {
                                    height: 12, width: 12
                                },
							    border: { color: '#afafaf', width: 1.5 },
							    fill: 'white',
							    visible: true
							} 
						},						
                        {
                            x: 7,
							y: 120,
							fill: '#01599c',
                            marker: 
							{
                                shape: 'circle',
                                size:
                                {
                                    height: 12, width: 12
                                },
                                border : {color: '#01599c', width: 1.5},
								fill: 'white' ,
                                visible: true
                            }
                        }, 						   
						{
                            x: 8, 
							y: 140, 
							fill: '#385815',
							marker: 
							{
                                shape: 'circle',
                                size:
                                {
                                    height: 12, width: 12
                                },
                                border:{color: '#385815',width: 1.5},
								fill: 'white' ,
                                visible: true
                            }
                        }				    
					];
			
			$('#seriestype').change(function () {
		var chart = $("#container").ejChart('instance');
		var type = $('#seriestype')[0].value;
		chart.model.series[0].type = type;
		var pointsLength = chart.model.series[0].points.length;
		for(var i=0;i<pointsLength;i++){
			if(chart.model.series[0].points[i].marker){
				if(type == 'column'){
					chart.model.series[0].points[i].marker.visible = false;
					chart.model.series[0].marker.visible = false;
				}
				else{
					chart.model.series[0].points[i].marker.visible = true;
					chart.model.series[0].marker.visible = true;
				}
			}			
		}
		chart.redraw();
	});
	
	$('#mode').change(function () {
		 $("#container").ejChart("option", { "commonSeriesOptions": {emptyPointSettings:{displayMode:$('#mode')[0].value}}});
	});
	$('#visible').change(function () {
        $("#container").ejChart("option", { "commonSeriesOptions": {emptyPointSettings:{visible:$('#visible').is(":checked")}}});
			if($('#visible').is(":checked"))
				$('#mode').removeAttr('disabled');
			else
				$('#mode').attr('disabled','disabled');		   
	});
	$("#color").ejColorPicker({
        value: '#afafaf',
        select: "onChange1"
    });
	
});

 function textRender (sender){
		if(sender.model.AreaType == 'none' && sender.data.text == 0)
			sender.data.text='';
	}
	function onChange1(args) {	
		var color = args.value;
		var chartInstance = $("#container").ejChart('instance');
	    var points = chartInstance.model.series[0].points;
	    for (var i = 0; i < points.length; i++) {
	        if (points[i].isEmpty)
	            points[i].marker.border.color = color;
	    }
		$("#container").ejChart("option", { "commonSeriesOptions": {emptyPointSettings:{style:{color:color}}}});	
    }
	

