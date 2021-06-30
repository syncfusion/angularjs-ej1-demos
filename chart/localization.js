var chartObj;
syncApp.controller('ChartCtrl', function ($scope) {
   $scope.Points1 = [{ x: new Date(2000, 03, 10), y: 33.85 }, { x: new Date(2000, 03, 11), y: 32.77 }, 
							 { x: new Date(2000, 03, 12), y: 33.97 }, { x: new Date(2000, 03, 13), y: 32.96 },
							 { x: new Date(2000, 03, 14), y: 35.19 }];
	$scope.Points2 =  [{ x: new Date(2000, 03, 10), y: 18.52 }, { x: new Date(2000, 03, 11), y: 18.96 }, 
							 { x: new Date(2000, 03, 12), y: 19.85 }, { x: new Date(2000, 03, 13), y: 19.72 },
							 { x: new Date(2000, 03, 14), y: 19.24 }];
   $('#options').change(function (args)
	{
        var cul = args.target.value;
        $("#container").ejChart("option", { "model": { locale:cul} });
    });
});


	function OndataLabel(sender)
	{   
		sender.data.text=sender.data.text + "%";
		sender.data.location.x=sender.data.location.x+8;
    }  
	