
syncApp.controller('ChartCtrl', function ($scope) {
    $scope.RangeSetting = {min: new Date(2005,01 ,01) , max: new Date(2012,02,01) ,interval :1};
	$scope.Points1 =  [
                           { x: "Monday", y: 50 }, { x: "Tuesday", y: 40 }, { x: "Wednesday", y: 70 },
                           { x: "Thursday", y: 60 }, { x: "Friday", y: 50 },
                           { x: "Monday", y: 40 }, { x: "Tuesday", y: 50 }, { x: "Wednesday", y: 30 },
                           { x: "Thursday", y: 40 }, { x: "Friday", y: 70 },
                           { x: "Monday", y: 60 }, { x: "Tuesday", y: 30 }, { x: "Wednesday", y: 50 },
                           { x: "Thursday", y: 50 }, { x: "Friday", y: 40 },
                           { x: "Monday", y: 30 }, { x: "Tuesday", y: 55 }, { x: "Wednesday", y: 60 },
                           { x: "Thursday", y: 30 }, { x: "Friday", y: 60 },
                       ];
	$scope.Points2 =  [
                          { x: "Monday", y: 60 }, { x: "Tuesday", y: 30 }, { x: "Wednesday", y: 40 },
                          { x: "Thursday", y: 80 }, { x: "Friday", y: 70 },
                          { x: "Monday", y: 50 }, { x: "Tuesday", y: 40 }, { x: "Wednesday", y: 50 },
                          { x: "Thursday", y: 50 }, { x: "Friday", y: 50 },
                          { x: "Monday", y: 70 }, { x: "Tuesday", y: 50 }, { x: "Wednesday", y: 60 },
                          { x: "Thursday", y: 30 }, { x: "Friday", y: 60 },
                          { x: "Monday", y: 40 }, { x: "Tuesday", y: 65 }, { x: "Wednesday", y: 70 },
                          { x: "Thursday", y: 40 }, { x: "Friday", y: 40 },
                       ];
	$scope.Points3 = [
                           { x: "Monday", y: 40 }, { x: "Tuesday", y: 60 }, { x: "Wednesday", y: 40 },
                           { x: "Thursday", y: 30 }, { x: "Friday", y: 80 },
                           { x: "Monday", y: 30 }, { x: "Tuesday", y: 30 }, { x: "Wednesday", y: 60 },
                           { x: "Thursday", y: 40 }, { x: "Friday", y: 40 },
                           { x: "Monday", y: 50 }, { x: "Tuesday", y: 20 }, { x: "Wednesday", y: 30 },
                           { x: "Thursday", y: 70 }, { x: "Friday", y: 60 },
                           { x: "Monday", y: 20 }, { x: "Tuesday", y: 35 }, { x: "Wednesday", y: 50 },
                           { x: "Thursday", y: 20 }, { x: "Friday", y: 30 },
                       ];

});

function isindex(tis){
		var chart=$("#container").ejChart("instance");
		chart.model.primaryXAxis.isIndexed=tis.checked;
		$("#container").ejChart("redraw");
}
