
syncApp.controller('ChartCtrl', function ($scope) {
		
		$scope.RangeSetting = { min: new Date(1949, 1, 1), max: new Date(2009, 1, 1), interval: 20 };
		
		$scope.Points1 = [{ x: new Date(1950, 1, 12), high: 125.45, low: 70.23, open: 125.22, close: 90.44 }, 
							 { x: new Date(1953, 1, 12), high: 150.99, low: 60.23, open: 120.55, close: 70.90 },
							 { x: new Date(1956, 1, 12), high: 200.19, low: 130.37, open: 160.13, close: 190.78 }, 
							 { x: new Date(1959, 1, 12), high: 160.23, low: 90.16, open: 140.38, close: 110.24 },
							 { x: new Date(1962, 1, 12), high: 200.89, low: 100.23, open: 180.90, close: 120.29 },
							 { x: new Date(1965, 1, 12), high: 100, low: 45, open: 70, close: 50 }, 
							 { x: new Date(1968, 1, 12), high: 150, low: 70, open: 140, close: 130 }, 
							 { x: new Date(1971, 1, 12), high: 90, low: 60, open: 65, close: 80 },
							 { x: new Date(1974, 1, 12), high: 225, low: 170, open: 175, close: 220 },
							 { x: new Date(1977, 1, 12), high: 250, low: 180, open: 223, close: 190 },
							 { x: new Date(1980, 1, 12), high: 200.12, low: 140.69, open: 160.74, close: 190.28 },
							 { x: new Date(1983, 1, 12), high: 160.17, low: 90.67, open: 140.26, close: 110.34 },
							 { x: new Date(1986, 1, 12), high: 200, low: 100, open: 180, close: 120 },
							 { x: new Date(1989, 1, 12), high: 130.12, low: 95.78, open: 120.38, close: 100.23 }, 
							 { x: new Date(1991, 1, 12), high: 100.49, low: 70.19, open: 92.79, close: 75.23 },
							 { x: new Date(1994, 1, 12), high: 50.90, low: 85.23, open: 65.89, close: 80.45 },
							 { x: new Date(1997, 1, 12), high: 185.45, low: 110.90, open: 130.23, close: 170.56 },
							 { x: new Date(2000, 1, 12), high: 90.89, low: 30.23, open: 80.15, close: 50.57 },
							 { x: new Date(2003, 1, 12), high: 200, low: 140, open: 160, close: 190 }, 
							 { x: new Date(2006, 1, 12), high: 170, low: 90, open: 140, close: 110 },
							 { x: new Date(2008, 1, 12), high: 200, low: 100, open: 180, close: 120 }];

});
