
syncApp.controller('ChartCtrl', function ($scope) {
    $scope.RangeSetting = {min: new Date(2005,01 ,01) , max: new Date(2012,02,01) ,interval :1};
	$scope.Points1 = [{ x: new Date(2005, 01, 01), y: 43.47  }, { x: new Date(2006, 01, 01), y:  45.19 },
                             { x: new Date(2007, 01, 01), y: 39.42 }, { x: new Date(2008, 10, 01), y: 48.88 }, 
							 { x: new Date(2009, 10, 01), y: 46.37 }, { x: new Date(2010, 01, 22), y: 44.17 }, 
							 { x: new Date(2011, 01, 22), y: 57.15 }, { x: new Date(2012, 01, 22), y: 54.73 }];

});
