
syncApp.controller('ComboBoxOdataCtrl', function ($scope, $rootScope) {  
    $scope.odataquery = ej.Query().from("Suppliers").select("SupplierID", "ContactName");
    $scope.odatadataList = ej.DataManager({
        url: window.baseurl + "Wcf/Northwind.svc/", crossDomain: true
            });
});