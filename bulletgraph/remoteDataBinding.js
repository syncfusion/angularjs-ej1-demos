syncApp.controller('angularBullet1', function ($scope) {
   var dataManger = new ej.DataManager({
            url: window.baseurl + "Wcf/Northwind.svc/", crossDomain: true
        });

        // Query creation
        var query = ej.Query().from("Products").take(10).where("UnitPrice", ej.FilterOperators.greaterThan, 18, false).where("UnitPrice", ej.FilterOperators.lessThanOrEqual, 40, false).where("UnitsInStock", ej.FilterOperators.greaterThan, 5, false).where("UnitsInStock",ej.FilterOperators.lessThanOrEqual,45,false);

		
		$scope.Data = dataManger;
		$scope.Query = query; 

});

	

