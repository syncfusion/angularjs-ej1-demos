
syncApp.controller('ListBoxDataBindingRemoteCtrl', function ($scope) {
    $scope.dataList = dataManger = ej.DataManager({
        url: window.baseurl + "Wcf/Northwind.svc/", crossDomain: true
    });
    $scope.query = ej.Query().from("Customers").take(10);
    $scope.text = "CustomerID";
});
