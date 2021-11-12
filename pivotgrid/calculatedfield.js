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
            fieldName: "Price",
            fieldCaption: "Price",
            isCalculatedField: true,
            formula: "Amount * Quantity"
        },
        {
            fieldName: "Quantity",
            fieldCaption: "Quantity"
        }
    ]
};

syncApp.controller('PivotGridCalculateCtrl', function ($scope) {
    $scope.isResponsive = true;
    $scope.datasource = dataSource;
    $scope.renderGrid = function (args) {
        pivotGrid = $("#PivotGridCalculate").data("ejPivotGrid");
        $(pivotGrid.element).html("");
        if (args.model.id == "rdbClient") {
            pivotGrid.model.url = "";
            pivotGrid.model.operationalMode = "clientmode";
            pivotGrid._calculatedField = [];
            pivotGrid.model.dataSource = {
                data: pivot_dataset, cube: "",
                rows: [{ fieldName: "Country", fieldCaption: "Country" }, { fieldName: "State", fieldCaption: "State" }],
                columns: [{ fieldName: "Product", fieldCaption: "Product" }],
                values: [{ fieldName: "Amount", fieldCaption: "Amount" }, { fieldName: "Quantity", fieldCaption: "Quantity" }],
                filters: []
            };
        }
        else {
            pivotGrid.model.dataSource = { data: null, cube: "" };
            pivotGrid.model.operationalMode = "servermode";
            pivotGrid._calculatedField = [];
            pivotGrid.model.url = window.baseurl + "api/PivotGrid/Relational";
            pivotGrid.model.serviceMethodSettings.initialize = "Initialize";
            pivotGrid.model.serviceMethodSettings.drillDown = "Drill";
            pivotGrid.model.serviceMethodSettings.nodeStateModified = "ModifyNodeState";
            pivotGrid.model.serviceMethodSettings.nodeDropped = "DropNode";
            pivotGrid.model.serviceMethodSettings.removeButton = "RemoveButton";
            pivotGrid.model.serviceMethodSettings.memberExpand = "ExpandMember";
        }
        pivotGrid._load();
    };
});