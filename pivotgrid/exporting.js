var btnTarget, rdbRelational, rdbOlap, rdbClient, rdbServer, pGridObj, savereport = [], relationalrptmode, olaprptmode;
var pivotdataSource = { data: pivot_dataset, cube: "", rows: [{ fieldName: "Date", fieldCaption: "Date" }, { fieldName: "Product", fieldCaption: "Product" }], columns: [{ fieldName: "Country", fieldCaption: "Country" }, { fieldName: "State", fieldCaption: "State" }], values: [{ fieldName: "Amount", fieldCaption: "Amount" }, { fieldName: "Quantity", fieldCaption: "Quantity" }], filters: [] };
var olapDataSource = { data: "//bi.syncfusion.com/olap/msmdpump.dll", catalog: "Adventure Works DW 2008 SE", cube: "Adventure Works", rows: [{ fieldName: "[Date].[Fiscal]" }], columns: [{ fieldName: "[Customer].[Customer Geography]" }], values: [{ measures: [{ fieldName: "[Measures].[Internet Sales Amount]" }], axis: "columns" }], filters: [] };
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
syncApp.controller('PivotGridExportCtrl', function ($scope) {
    $scope.datasource = dataSource;
    $scope.isResponsive = true;
    $scope.width = "75%";
    $scope.exportOptions = ["Excel", "Word", "PDF", "CSV"];
    $scope.exportOptionsText = "Excel";
    $scope.renderGrid = function (args) {
        rdbRelational = $('#rdbRelational').data("ejRadioButton"); rdbOlap = $('#rdbOlap').data("ejRadioButton"); rdbClient = $('#rdbClient').data("ejRadioButton"); rdbServer = $('#rdbServer').data("ejRadioButton");
        pGridObj = $('#PivotGrid').data("ejPivotGrid");
        $(pGridObj.element).html("");
        if (rdbClient.model.checked) {
            var pivotdataSource = { data: pivot_dataset, cube: "", rows: [{ fieldName: "Country", fieldCaption: "Country" }, { fieldName: "State", fieldCaption: "State" }], columns: [{ fieldName: "Product", fieldCaption: "Product" }], values: [{ fieldName: "Amount", fieldCaption: "Amount" }, { fieldName: "Quantity", fieldCaption: "Quantity" }], filters: [] };
            var olapDataSource = { data: "//bi.syncfusion.com/olap/msmdpump.dll", catalog: "Adventure Works DW 2008 SE", cube: "Adventure Works", rows: [{ fieldName: "[Date].[Fiscal]" }], columns: [{ fieldName: "[Customer].[Customer Geography]" }], values: [{ measures: [{ fieldName: "[Measures].[Internet Sales Amount]" }], axis: "columns" }], filters: [] };
            pGridObj.model.dataSource = rdbRelational.model.checked ? pivotdataSource : rdbOlap.model.checked ? olapDataSource : pivotdataSource;
            pGridObj.model.url = "";
            pGridObj.model.operationalMode = "clientmode";
        }
        else {
            pGridObj.model.dataSource = { data: null, cube: "" };
            pGridObj.model.operationalMode = "servermode";
            pGridObj.model.url = window.baseurl + (rdbRelational.model.checked ? "api/PivotGrid/Relational" : "api/PivotGrid/Olap");
            pGridObj.model.serviceMethodSettings.initialize = "Initialize";
            pGridObj.model.serviceMethodSettings.drillDown = "Drill";
            pGridObj.model.serviceMethodSettings.nodeStateModified = "ModifyNodeState";
            pGridObj.model.serviceMethodSettings.nodeDropped = "DropNode";
            pGridObj.model.serviceMethodSettings.removeButton = "RemoveButton";
            pGridObj.model.serviceMethodSettings.memberExpand = "ExpandMember";
        }
        pGridObj._load();
    }
    $scope.exportPivotGrid = function (args) {
        pGridObj = $('#PivotGrid').data("ejPivotGrid");
        var dropDownObj = $('#drpdwn').data("ejDropDownList");
        var exportOption = dropDownObj.selectedTextValue.toLocaleLowerCase();
        if (exportOption == "excel")
            pGridObj.exportPivotGrid(window.baseurl + "api/PivotGrid/Olap/ExcelExport", "fileName");
        else if (exportOption == "word")
            pGridObj.exportPivotGrid(window.baseurl + "api/PivotGrid/Olap/WordExport", "fileName");
        else if (exportOption == "pdf")
            pGridObj.exportPivotGrid(window.baseurl + "api/PivotGrid/Olap/PDFExport", "fileName");
        else
            pGridObj.exportPivotGrid(window.baseurl + "api/PivotGrid/Olap/CSVExport", "fileName");
    }
});