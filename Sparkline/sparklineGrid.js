
if (!!window.SVGSVGElement) {
	var gridData = ej.DataManager(window.gridData).executeLocal(ej.Query().take(50));
 $("#sparkline").css('visibility', 'visible');
    syncApp.controller("sparkline", function ($scope) {
		$scope.Data = gridData;
		$scope.Column = [

                                                   { field: "EmployeeID", headerText: "ID", textAlign: ej.TextAlign.Right, width: 50 },
                                                   { field: "CustomerID", headerText: "Customer ID", width: 90 },
                                                   { field: "OrderDate", headerText: "Order Date", width: 90, format: "{0:MM/dd/yyyy}", textAlign: ej.TextAlign.Right },
                                                   { field: "ShipCountry", headerText: "Ship Country", width: 80 },
                                                   { headerText: "Tax per annum", height: 50, template: true, templateID: "#columnTemplate1", textAlign: "center" },
                                                   { headerText: "One Day Index", height: 50, template: true, templateID: "#columnTemplate3", textAlign: "center" },
                                                   { headerText: "Year GR", height: 50, template: true, templateID: "#columnTemplate4", textAlign: "center" },

                    ];
    });
}
else {
    $("#sparkline").css('visibility', 'hidden');
    alert("Sparkline will not be supported in IE Version < 9");
}

function render(args) {
            for (var i = 0; i < 56; i++) {
                $("#spkline" + i).ejSparkline({ size: { height: 50, width: 150 } });
                $("#spkarea" + i).ejSparkline({ type: "column", size: { height: 50, width: 150 } });
                $("#spkwl" + i).ejSparkline({ dataSource: winloss(), type: "winloss", size: { height: 50, width: 150 } });
            }
            if (args.type == "create")
                this.getScrollObject().refresh();
        }
        function winloss() {
            var windata = [], r;
            for (var i = 1; i <= 12; i++) {
                r = Math.random();
                if (r <= 0.2)
                    windata.push(-Math.random() * 10);
                else
                    windata.push(Math.random() * 10);
            }
            return windata;
        }