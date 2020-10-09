var pivot_dataset = [
         { Amount: 100, Country: "Canada", Date: "FY 2005", Product: "Bike", Quantity: 2, State: "Alberta" },
         { Amount: 200, Country: "Canada", Date: "FY 2006", Product: "Van", Quantity: 3, State: "British Columbia" },
         { Amount: 300, Country: "Canada", Date: "FY 2007", Product: "Car", Quantity: 4, State: "Brunswick" },
         { Amount: 150, Country: "Canada", Date: "FY 2008", Product: "Bike", Quantity: 3, State: "Manitoba" },
         { Amount: 200, Country: "Canada", Date: "FY 2006", Product: "Car", Quantity: 4, State: "Ontario" },
         { Amount: 100, Country: "Canada", Date: "FY 2007", Product: "Van", Quantity: 1, State: "Quebec" },
         { Amount: 200, Country: "France", Date: "FY 2005", Product: "Bike", Quantity: 2, State: "Charente-Maritime" },
         { Amount: 250, Country: "France", Date: "FY 2006", Product: "Van", Quantity: 4, State: "Essonne" },
         { Amount: 300, Country: "France", Date: "FY 2007", Product: "Car", Quantity: 3, State: "Garonne (Haute)" },
         { Amount: 150, Country: "France", Date: "FY 2008", Product: "Van", Quantity: 2, State: "Gers" },
         { Amount: 200, Country: "Germany", Date: "FY 2006", Product: "Van", Quantity: 3, State: "Bayern" },
         { Amount: 250, Country: "Germany", Date: "FY 2007", Product: "Car", Quantity: 3, State: "Brandenburg" },
         { Amount: 150, Country: "Germany", Date: "FY 2008", Product: "Car", Quantity: 4, State: "Hamburg" },
         { Amount: 200, Country: "Germany", Date: "FY 2008", Product: "Bike", Quantity: 4, State: "Hessen" },
         { Amount: 150, Country: "Germany", Date: "FY 2007", Product: "Van", Quantity: 3, State: "Nordrhein-Westfalen" },
         { Amount: 100, Country: "Germany", Date: "FY 2005", Product: "Bike", Quantity: 2, State: "Saarland" },
         { Amount: 150, Country: "United Kingdom", Date: "FY 2008", Product: "Bike", Quantity: 5, State: "England" },
         { Amount: 250, Country: "United States", Date: "FY 2007", Product: "Car", Quantity: 4, State: "Alabama" },
         { Amount: 200, Country: "United States", Date: "FY 2005", Product: "Van", Quantity: 4, State: "California" },
         { Amount: 100, Country: "United States", Date: "FY 2006", Product: "Bike", Quantity: 2, State: "Colorado" },
         { Amount: 150, Country: "United States", Date: "FY 2008", Product: "Car", Quantity: 3, State: "New Mexico" },
         { Amount: 200, Country: "United States", Date: "FY 2005", Product: "Bike", Quantity: 4, State: "New York" },
         { Amount: 250, Country: "United States", Date: "FY 2008", Product: "Car", Quantity: 3, State: "North Carolina" },
         { Amount: 300, Country: "United States", Date: "FY 2007", Product: "Van", Quantity: 4, State: "South Carolina" }
];
var dataSource = {
    data: pivot_dataset,
    rows: [
         {
             fieldName: "Country",
             fieldCaption: "Country"
         },
        {
            fieldName: "State",
            fieldCaption: "State"
        }
    ],
    columns: [
        {
            fieldName: "Product",
            fieldCaption: "Product"
        }
    ],
    values: [
        {
            fieldName: "Amount",
            fieldCaption: "Amount"
        },
        {
            fieldName: "Quantity",
            fieldCaption: "Quantity"
        }
    ]
};

syncApp.controller('PivotGridCellContextCtrl', function ($scope) {
    $scope.isResponsive = true;
    $scope.datasource = dataSource;
    $scope.cell_RightClick = function (evt) {
        $(".contextMenuPopup").remove();
        var contextMenu = $('<div class="contextMenuPopup"></div>');
        $(contextMenu[0]).html('<div class="menuItem">Cell Type</div><div class="menuItem">Position</div><div class="menuItem">Value</div>');
        $(contextMenu[0]).css("left", evt.args.args.clientX + 10).css("top", evt.args.args.clientY + 10);
        $("#PivotGrid").append(contextMenu[0]);
        $(".menuItem").click(function (e) {
            var cellVal = $(".e-pivotgrid").find("[p='" + evt.args.cellPosition + "']").clone();
            callVal = (cellVal.children().length == 0 ? cellVal: cellVal.children().remove())
            if (e.target.innerHTML == "Value")
                alert("Cell Value: " + cellVal.text());
            else if (e.target.innerHTML == "Cell Type") {
                var cellType = evt.args.cellType == "value" ? "Value Cell" : (evt.args.cellType == "colheader" ? "Column Header" : (evt.args.cellType == "rowheader" ? "Row Header" : ((evt.args.role == "rowheader" || evt.args.role == "columnheader") ? "Summary Header" : "Summary Cell")));
                alert("Cell Type: " + cellType);
            }
            else if (e.target.innerHTML == "Position")
                alert("Cell Position: Column-" + (parseInt(evt.args.cellPosition.split(',')[0]) + 1) + " Row-" + (parseInt(evt.args.cellPosition.split(',')[1]) + 1));
        })
    }
	$(document).bind("click", function () {
		$(".contextMenuPopup").remove();
    });
});