var obj =  [{ x: new Date(1950, 1, 12), high: 125, low: 70, open: 115, close: 90 }, 
							 { x: new Date(1953, 1, 12), high: 150, low: 60, open: 120, close: 70 },
							 { x: new Date(1956, 1, 12), high: 200, low: 140, open: 160, close: 190 }, 
							 { x: new Date(1959, 1, 12), high: 160, low: 90, open: 140, close: 110 }, 
							 { x: new Date(1962, 1, 12), high: 200, low: 100, open: 180, close: 120 },
							 { x: new Date(1965, 1, 12), high: 100, low: 45, open: 70, close: 50 }, 
							 { x: new Date(1968, 1, 12), high: 150, low: 70, open: 140, close: 130 },
							 { x: new Date(1971, 1, 12), high: 90, low: 60, open: 65, close: 80 },
							 { x: new Date(1974, 1, 12), high: 225, low: 170, open: 175, close: 220 },
							 { x: new Date(1977, 1, 12), high: 250, low: 180, open: 223, close: 190 },
							 { x: new Date(1980, 1, 12), high: 200, low: 140, open: 160, close: 190 },
							 { x: new Date(1983, 1, 12), high: 160, low: 90, open: 140, close: 110 }, 
							 { x: new Date(1986, 1, 12), high: 200, low: 100, open: 180, close: 120 },
							 { x: new Date(1989, 1, 1), high: 130, low: 95, open: 120, close: 100 },
							 { x: new Date(1991, 1, 12), high: 100, low: 70, open: 92, close: 75 }, 
							 { x: new Date(1994, 1, 12), high: 50, low: 85, open: 65, close: 80 },
							 { x: new Date(1997, 1, 12), high: 185, low: 110, open: 130, close: 170 },
							 { x: new Date(2000, 1, 12), high: 90, low: 30, open: 80, close: 50 },
							 { x: new Date(2003, 1, 12), high: 200, low: 140, open: 160, close: 190 },
							 { x: new Date(2006, 1, 12), high: 170, low: 90, open: 140, close: 110 }, 
							 { x: new Date(2008, 1, 12), high: 200, low: 100, open: 180, close: 120 }
			];

syncApp.controller('ChartCtrl', function ($scope) {

    $scope.dataSource = obj;
});

