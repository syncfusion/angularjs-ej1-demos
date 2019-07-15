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
             fieldName: "Product",
             fieldCaption: "Product"
         },
        {
            fieldName: "Date",
            fieldCaption: "Date"
        }
    ],
    columns: [
        {
            fieldName: "Country",
            fieldCaption: "Country"
        }
    ],
    values: [
        {
            fieldName: "Amount",
            fieldCaption: "Amount"
        }
    ]
};
syncApp.controller('PivotChartTypesCtrl', function ($scope) {
        $scope.dataSource = dataSource;
        $scope.title = "PivotChart in Essential JS";
        $scope.isResponsive = true;
		$scope.zooming = { enableScrollbar : true};
        $scope.ctype = ej.PivotChart.ChartTypes.Column;
        $scope.showTooltip = true;
        $scope.size = { height: "450px", width: "95%" };
        $scope.primaryXAxis = { labelRotation: 0 };
        $scope.primaryYAxis = { title: { text: "Amount" } };
        $scope.legend = { visible: true, rowCount: 2 };
        $scope.list = ["column", "line", "spline", "area", "bar", "pie", "pyramid", "stepline", "splinearea", "steparea",
            "stackingarea", "stackingcolumn", "stackingbar", "funnel", "doughnut", "scatter", "bubble"];
    });

function onTypeChange(args) {
    chartTarget = $('#PivotChart').data("ejPivotChart");
    chartTarget.model.type = args.text.toLowerCase();
    chartTarget.model.commonSeriesOptions.type = args.text.toLowerCase();
    if (jQuery.inArray(chartTarget.model.type, ["line", "spline", "area", "splinearea", "stepline", "steparea", "stackingarea", "scatter"]) > -1)
        chartTarget.model.commonSeriesOptions.marker = {
            shape: ej.PivotChart.SymbolShapes.Circle,
            size: { height: 12, width: 12 },
            visible: true, connectorLine: { height: 30, type: "line" },
            border: { width: 3, color: 'white' }
        };
    else if (jQuery.inArray(chartTarget.model.type, ["funnel"]) > -1) {
        chartTarget.model.commonSeriesOptions.marker = {
            dataLabel: {
                visible: true,
                shape: 'none',
                font: { color: 'white', size: '12px', fontWeight: 'lighter' }
            }
        }
    }
    else
        chartTarget.model.commonSeriesOptions.marker = { visible: false };
    if (chartTarget.model.type == "pyramid" || chartTarget.model.type == "funnel")
        chartTarget.model.legend.rowCount = 1;
    else
        chartTarget.model.legend.rowCount = 2;
    if (jQuery.inArray(chartTarget.model.type, ["pie", "doughnut"]) > -1)
        chartTarget.model.commonSeriesOptions.explode = true;
    else
        chartTarget.model.commonSeriesOptions.explode = false;
    chartTarget.renderControlSuccess({ "JsonRecords": JSON.stringify(chartTarget.getJSONRecords()), "OlapReport": chartTarget.getOlapReport() });
}