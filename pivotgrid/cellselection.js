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

syncApp.controller('PivotGridSelectionCtrl', function ($scope) {
        $scope.isResponsive = true;
        $scope.datasource = dataSource;
        $scope.ctype = ej.PivotChart.ChartTypes.Column;
        $scope.loadTheme = "loadTheme";
        $scope.valueCellSelClick = function (evt) {
            var cellvalue = [], rowheaders = [], colheaders = [], chartLables = [], colHeaderLable = [], rowseries = [], rowseriesheader = [], seriesvalue = [], columnseriesheader = [], measure, measureValue = [];
            var j = 0, row = 0, column = 0;
            if (evt.JSONRecords.length && (evt.JSONRecords[0].CSS.indexOf("colheader") != -1 || evt.JSONRecords[0].CSS.indexOf("rowheader") != -1 || evt.JSONRecords[0].CSS.indexOf("summary") != -1)) return false;
            else {
                var chart = $("#Chart").data('ejChart');
                cellvalue = evt.JSONRecords;
                rowheaders = evt.rowHeader;
                colheaders = evt.columnHeader;
                measure = evt.measureCount;
                measureValue = measure.split(":");
                if (measureValue[0] == "Row")
                    row = parseInst(parseInt(measureValue[1]));
                else
                    column = parseInt(parseInt(measureValue[1]));
                $.each(rowheaders, function (i, el) {
                    if ($.inArray(el, chartLables) === -1)
                        chartLables.push(el);
                });
                $.each(colheaders, function (i, el) {
                    if ($.inArray(el, colHeaderLable) === -1)
                        colHeaderLable.push(el);
                });
                for (var j = 0; j < chartLables.length; j++) {
                    rowseries = !($.isNumeric(chartLables[j])) ? (chartLables[j]).split("##") : $(chartLables[j])[0].toString();
                    var temp = 0;
                    for (var k = 0; k < rowseries.length; k++) {
                        if (rowseries[k].toLowerCase().indexOf("total") >= 0)
                            temp++;
                    }
                    if (temp == 0)
                        chartLables[j] = rowseries[rowseries.length - (row + 1)];
                    else if ((temp == 0) && (rowseries.length == 1)) {
                        chartLables[j] = rowseries[rowseries.length - 1];
                    }
                    else if (temp > 0) {
                        chartLables.splice(j, 1);
                        j--;
                    }
                }
                for (var j = 0; j < colHeaderLable.length; j++) {
                    columnseriesheader = colHeaderLable[j].split("##");
                    var temp = 0;
                    for (var k = 0; k < columnseriesheader.length; k++) {
                        if (columnseriesheader[k].toLowerCase().indexOf("total") >= 0)
                            temp++;
                    }
                    if (temp == 0) {
                        var label = "";
                        for (var k = 0; k < columnseriesheader.length; k++)
                            label += label == "" ? columnseriesheader[k] : " - " + columnseriesheader[k];
                        colHeaderLable[j] = label;
                    }
                    else if ((temp == 0) && (columnseriesheader.length == 1)) {
                        colHeaderLable[j] = columnseriesheader[columnseriesheader.length - 1];
                    }
                    else if (temp > 0) {
                        colHeaderLable.splice(j, 1);
                        j--;
                    }
                }
                var count = 0;
                for (var k = 0; k < cellvalue.length; k++) {
                    var style = cellvalue[k].CSS;
                    var colHeaderCell = $("#" + this._id).find("th[data-p*='" + cellvalue[0].Index.split(",")[0] + ",']").last();;
                    var isFound = false;
                    var isbrklp = false;
                    for (var col = parseInt(colHeaderCell.attr("data-p").split(",")[0]) ; col >= 0; col--) {
                        for (var r = parseInt(colHeaderCell.attr("data-p").split(",")[1] - 1) ; r >= 0; r--) {
                            if ($("#" + this._id).find("th[data-p*='" + col + "," + r + "']").length > 0) {
                                var element = $("#" + this._id).find("th[data-p*='" + col + "," + r + "']").find(".expand");
                                isFound = (element.length > 0) ? true : false;
                                isbrklp = true;
                                break;
                            }
                        }
                        if (isbrklp)
                            break;
                    }
                    if (style != "summary value" || $("#" + this._id).find("[data-p*='" + cellvalue[k].Index + "']").prevAll().find(".expand").length > 0 || isFound) {
                        seriesvalue[count] = cellvalue[k];
                        count++;
                    }
                }
                var chartSeries = new Array(); var seriesPoints = new Array(); var XValues = chartLables; var tempArray = new Array();
                var YValues = new Array(); var pointsCount = 0; var count = 0; var seriesName = new Array(); var points; var cellcount = 0;
                jQuery.each(chartLables, function (index, value) {
                    var YPoints = new Array();
                    for (var i = 0; i < colHeaderLable.length; i++) {
                        points = { "xValues": chartLables[index], "yValues": (seriesvalue[cellcount].Value == "" ? 0 : parseInt(seriesvalue[cellcount].Value)) };
                        YPoints.push(points);
                        cellcount++;
                    }
                    seriesPoints.push(YPoints);
                });
                jQuery.each(colHeaderLable, function (index, value) {
                    tempArray.push(new Array());
                });
                jQuery.each(chartLables, function (index, value) {
                    for (var i = 0; i < seriesPoints[index].length; i++) {
                        tempArray[i].push((seriesPoints[index])[i]);
                    }
                });
                jQuery.each(colHeaderLable, function (index, value) {
                    chartSeries[pointsCount] = { dataSource: tempArray[index], xName: "xValues", yName: ["yValues"], name: colHeaderLable[pointsCount] };
                    pointsCount++;
                });
                chart.model.series = chartSeries;
                chart.model.commonSeriesOptions.enableAnimation = true;
                chart.redraw();
                chartSeries = [];
                colHeaderLable = [];
                chartLables = [];
                seriesName = [];
                seriesPoints = [];
                tempArray = [];
            }
        };
    });