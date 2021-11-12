var rdbRelational, rdbOlap, rdbRowHide, rdbColumnHide, rdbHideAll, pivotGrid;
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
syncApp.controller('PivotGridSummaryCtrl', function ($scope) {
    $scope.datasource = dataSource;
    $scope.isResponsive = true;
    $scope.SubTotalList = ["Date", "Product", "Country", "State"];
    $scope.renderGrid = function (args) {
        rdbRelational = $('#rdbRelational').data("ejRadioButton"); rdbOlap = $('#rdbOlap').data("ejRadioButton"); rdbRowHide = $('#hiderowgdtot').data("ejRadioButton"); rdbColumnHide = $('#hidecolumngdtot').data("ejRadioButton"); rdbHideAll = $('#hidegdtot').data("ejRadioButton");
        pivotGrid = $('#PivotGrid').data("ejPivotGrid");
        ddlTarget = $('#Row').data("ejDropDownList");
        ddlTarget.unCheckAll();
        $(pivotGrid.element).html("");
        if (rdbRelational.model.checked) {
            $(".sourcefield").css("display", "");
            $(".sourcefield .col-md-3").css("width", "22%");
        }
        else {
            $(".sourcefield").css("display", "none");
        }
        pivotGrid.model.dataSource = rdbRelational.model.checked ? pivotdataSource : rdbOlap.model.checked ? olapDataSource : pivotdataSource;
        pivotGrid.model.enableGroupingBar = true;
        if (rdbRowHide.model.checked) {
            pivotGrid.model.enableColumnGrandTotal = pivotGrid.model.enableGrandTotal = true;
            pivotGrid.model.enableRowGrandTotal = false;
        }
        else if (rdbColumnHide.model.checked) {
            pivotGrid.model.enableRowGrandTotal = pivotGrid.model.enableGrandTotal = true;
            pivotGrid.model.enableColumnGrandTotal = false;
        }
        else {
            pivotGrid.model.enableRowGrandTotal = pivotGrid.model.enableColumnGrandTotal = true;
            pivotGrid.model.enableGrandTotal = false;
        }
        pivotGrid._load();
    }
    $scope.onChange = function (args) {
        rdbRelational = $('#rdbRelational').data("ejRadioButton"); rdbOlap = $('#rdbOlap').data("ejRadioButton"); rdbRowHide = $('#hiderowgdtot').data("ejRadioButton"); rdbColumnHide = $('#hidecolumngdtot').data("ejRadioButton"); rdbHideAll = $('#hidegdtot').data("ejRadioButton");
        pivotGrid = $('#PivotGrid').data("ejPivotGrid");
        ddlTarget = $('#Row').data("ejDropDownList");
        var selectedValues = this.target.value.split(",");
        if (rdbRelational.model.checked) {
            if (pivotGrid.model.dataSource.rows.length > 0)
                $.each(pivotGrid.model.dataSource.rows, function (e, item) { if (item.fieldName.length > 0) item["showSubTotal"] = true; });
            if (pivotGrid.model.dataSource.columns.length > 0)
                $.each(pivotGrid.model.dataSource.columns, function (e, item) { if (item.fieldName.length > 0) item["showSubTotal"] = true; });
            $.each(selectedValues, function (e, selectedValue) {
                if (pivotGrid.model.dataSource.rows.length > 0)
                    $.each(pivotGrid.model.dataSource.rows, function (e, item) { if (item.fieldName.length > 0 && item.fieldName == selectedValue) item["showSubTotal"] = false; });
                if (pivotGrid.model.dataSource.columns.length > 0)
                    $.each(pivotGrid.model.dataSource.columns, function (e, item) { if (item.fieldName.length > 0 && item.fieldName == selectedValue) item["showSubTotal"] = false; });
            });
            pivotGrid._populatePivotGrid();
        }
    }
});