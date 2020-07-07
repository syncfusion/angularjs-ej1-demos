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
syncApp.controller('PivotGridSaveLoadCtrl', function ($scope) {
    $scope.datasource = dataSource;
    $scope.isResponsive = true;
    $scope.width = "75%";
    $scope.saveReport = savereport;
    $scope.renderGrid = function (args) {
        pGridObj = $('#PivotGrid').data("ejPivotGrid");
        rdbRelational = $('#rdbRelational').data("ejRadioButton"); rdbOlap = $('#rdbOlap').data("ejRadioButton"); rdbClient = $('#rdbClient').data("ejRadioButton"); rdbServer = $('#rdbServer').data("ejRadioButton");
        pivotdataSource = { data: pivot_dataset, cube: "", rows: [{ fieldName: "Country", fieldCaption: "Country" }, { fieldName: "State", fieldCaption: "State" }], columns: [{ fieldName: "Product", fieldCaption: "Product" }], values: [{ fieldName: "Amount", fieldCaption: "Amount" }, { fieldName: "Quantity", fieldCaption: "Quantity" }], filters: [] };
        var olapDataSource = { data: "//bi.syncfusion.com/olap/msmdpump.dll", catalog: "Adventure Works DW 2008 SE", cube: "Adventure Works", rows: [{ fieldName: "[Date].[Fiscal]" }], columns: [{ fieldName: "[Customer].[Customer Geography]" }], values: [{ measures: [{ fieldName: "[Measures].[Internet Sales Amount]" }], axis: "columns" }], filters: [] };
        $('#drpdwn').ejDropDownList({ dataSource: rdbRelational.model.checked ? relationalrptmode : olaprptmode, targetID: "drpdwn", watermarkText: "Load Report", width: "70%" });
        $(pGridObj.element).html("");
        pGridObj._waitingPopup.show();
        if (rdbClient.model.checked) {
            pGridObj.model.dataSource = rdbRelational.model.checked ? pivotdataSource : rdbOlap.model.checked ? olapDataSource : pivotdataSource;
            pGridObj.model.url = "";
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
    $scope.save = function (args) {
        pGridObj = $('#PivotGrid').data("ejPivotGrid");
        rdbRelational = $('#rdbRelational').data("ejRadioButton"); rdbOlap = $('#rdbOlap').data("ejRadioButton"); rdbClient = $('#rdbClient').data("ejRadioButton"); rdbServer = $('#rdbServer').data("ejRadioButton");
        var obj, relationalrptmode = [], olaprptmode = [], isDuplicate = true, mode = null;
        var savedreport = $("#savedreport").data("ejMaskEdit");
        mode = rdbRelational.model.checked ? "Relational" : "Olap";
        if (savedreport.previousValue == null) { window.alert("Report name can't be empty"); return; }
        obj = { text: savedreport.previousValue, value: mode };
        $.each(savereport, function (e, item) { if (item.text == savedreport.previousValue && item.value == mode) { isDuplicate = false; } });
        if (isDuplicate) savereport.push(obj);
        $.each(savereport, function (e, item) { obj = { text: item.text, value: item.value }; if (item.value == "Relational") relationalrptmode.push(obj); if (item.value == "Olap") olaprptmode.push(obj); });
        $("#savedreport").val('');
        $('#drpdwn').ejDropDownList({ dataSource: rdbRelational.model.checked ? relationalrptmode : olaprptmode, targetID: "drpdwn", watermarkText: "Load Report", width: "70%" });

        url = window.baseurl + (rdbRelational.model.checked ? "api/PivotGrid/Relational" : "api/PivotGrid/Olap");
        name = savedreport.previousValue;
        storage = "db";
        pGridObj.saveReport(name, storage, url);
    }
    $scope.load = function (args) {
        var loadreport = $("#drpdwn").data("ejDropDownList");
        if (loadreport._currentText == null) { window.alert("Report name can't be empty"); return; }
        url = window.baseurl + (loadreport._selectedValue == "Relational" ? "api/RelationalGrid" : "api/OlapGrid");
        name = loadreport._currentText;
        storage = "db";
        pGridObj.loadReport(name, storage, url);
    }
});