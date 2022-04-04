var obj =  [ { x: 'India', y: 24, text: 'India 24%' }, 
	         { x: 'Japan', y: 25, text: 'Japan 25%' },
		     { x: 'Australia', y: 20, text: 'Australia 20%' }, 
			 { x: 'USA', y: 35, text: 'USA 35%' },
			 { x: 'China', y: 23, text: 'China 23%' }, 
			 { x: 'Germany', y: 27, text: 'Germany 27%' },
             { x: 'France', y: 22, text: 'France 22%'}
			 ];
			 
syncApp.controller('ChartCtrl', function ($scope) {
    $scope.dataSource = obj;
    $scope.plegend = { visible: true, position: "top" };
    $scope.pyramidsize = { height: "600" };
});
