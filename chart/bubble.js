var obj = [{ x: 92.2, y: 7.8, size: 1.347, fill: '#E94649', text:'China' }, 
							 { x: 74, y: 6.5, size: 1.241, fill: '#F6B53F', text:'India' }, 
							 { x: 90.4, y: 6.0, size: 0.238, fill: '#6FAAB0', text:'Indonesia' }, 
							 { x: 99.4, y: 2.2, size: 0.312, fill: '#C4C24A', text:'US' }, 
							 { x: 88.6, y: 1.3, size: 0.197, fill: '#FB954F', text:'Brazil' },
							 { x: 54.9, y: 3.7, size: 0.177, fill: '#D9CEB2', text:'Pakistan' },
							 { x: 99, y: 0.7, size: 0.0818, fill: '#FF8D8D', text:'Germany' }, 
							 { x: 72, y: 2.0, size: 0.0826, fill: '#69D2E7', text:'Egypt' }, 
							 { x: 99.6, y: 3.4, size: 0.143, fill: '#E27F2D', text:'Russia' },
							 { x: 99, y: 0.2, size: 0.128, fill: '#6A4B82', text:'Japan' }, 
							 { x: 86.1, y: 4.0, size: 0.115, fill: '#F6B53F', text:'Mexico' },
							 { x: 92.6, y: 6.6, size: 0.096, fill: '#C4C24A', text:'Philippines' },
							 { x: 61.3, y: 14.5, size: 0.162, fill: '#FF8D8D', text:'Nigeria' }, 
							 { x: 56.8, y: 6.1, size: 0.151, fill: '#69D2E7', text:'Bangladesh' }
		];

syncApp.controller('ChartCtrl', function ($scope) {

    $scope.dataSource = obj;
});

