var dataManger = ej.DataManager({ url: window.baseurl + "Wcf/Northwind.svc/Customers", crossDomain: true });
	 
syncApp.controller('DropDownCtrl', function ($scope) {
        $scope.data = dataManger;
       // fields = { "text": "CompanyName", "value": 'ContactName' };  
		$scope.width = "100%";
    });