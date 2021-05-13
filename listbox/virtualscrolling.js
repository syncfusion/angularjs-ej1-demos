

syncApp.controller('ListBoxVirtualScrollingCtrl', function ($scope) {
    $scope.dataList = ej.DataManager({
        url: window.baseurl + "Wcf/Northwind.svc/", crossDomain: true
    });
    $scope.query = ej.Query().from("Customers");
    $scope.text = "CustomerID";
    $scope.onValueChange=function(args) {
        var target = $('#selectcustomer').data("ejListBox");
        var dataManger = ej.DataManager({
            url: window.baseurl + "Wcf/Northwind.svc/", crossDomain: true
        });
        // Query creation
        var query = ej.Query()
               .from("Customers");
        if (args.value == "enablevirtual") {
            $("#selectcustomer").ejListBox({
                dataSource: dataManger,
                fields: { text: "CustomerID" },
                query: query, virtualScrollMode: ej.VirtualScrollMode.Continuous, allowVirtualScrolling: true

            });
        }
        if (args.value == "disablevirtual") {
            $("#selectcustomer").ejListBox({
                dataSource: dataManger,
                fields: { text: "CustomerID" },
                query: query, allowVirtualScrolling: true
            });
        }
    }
});
