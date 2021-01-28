
syncApp.controller('ChartCtrl', function ($scope) {
	 var dataManger = new ej.DataManager(
		{
            url: window.baseurl + "Wcf/Northwind.svc/", crossDomain: true
        });
        $("#container").ejWaitingPopup()
        $("#container").ejWaitingPopup("show");
		var query = ej.Query().from("Orders").take(10);
		dataManger.executeQuery(query)
                .done(function (e)
				{ 
                    $("#container").ejWaitingPopup("hide");
                });
    $scope.DataManger = dataManger;
	$scope.Query = query;
	
});

