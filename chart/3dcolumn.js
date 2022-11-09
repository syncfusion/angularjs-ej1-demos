var obj = [{ x: "Calcium sulfate(Gypsum hydrated)", y1: 11 ,y2:6}, 
           { x: "Phosphorus Pentachloride", y1: 20,y2:26 }, 
		   { x: "Sodium permanganate monohydrate", y1: 8,y2:7}, 
		   { x: "Magnesium permanganate", y1: 9 ,y2:32},
		  { x: "Pottasium permanganate", y1: 8.5,y2:9.6}, 
		  { x: "Sodium bicarbonate", y1: 6.3 ,y2:8.1}
		  ];

syncApp.controller('ChartCtrl', function ($scope) {
    $scope.dataSource = obj;
});

