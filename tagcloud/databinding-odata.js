syncApp.controller('TagcloudOdataCtrl', function ($scope) {
    var query = ej.Query().from("Orders").take(10);
    var dataManger = ej.DataManager({
        url: window.baseurl + "Wcf/Northwind.svc/", crossDomain: true
    });
    $scope.DataManger = dataManger;
    $scope.Query = query;
    $scope.text = "CustomerID";
    $scope.frequency = "EmployeeID";
});