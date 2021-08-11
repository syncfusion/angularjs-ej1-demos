 var dataManger = ej.DataManager({url:window.baseurl + "Wcf/Northwind.svc", crossDomain: true});
	var query = ej.Query().from("Customers"); 
    syncApp.controller('DropDownCtrl', function ($scope) {
        $scope.data = dataManger;
        $scope.value = "ALFKI";
        $scope.query=query;
		$scope.watermarkText= "Select Query";
		$scope.width = "100%";
        });