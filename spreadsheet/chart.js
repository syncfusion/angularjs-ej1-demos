syncApp.controller('SpreadsheetCtrl', function ($scope,$rootScope) {
    $scope.sheetData = [
						{ rangeSettings: [{ dataSource: window.chartDetails, startCell: 'A1', showHeader: true }], sheetName: "3D Column" },
						{ rangeSettings: [{ dataSource: window.chartDetails, startCell: 'A1', showHeader: true }], sheetName: "Radar" },
						{ rangeSettings: [{ dataSource: window.chartDetails, startCell: 'A1', showHeader: true }], sheetName: "Pie" }
						];
   
});

 function actionBegin(args) {
        if (args.reqType === "gotoSheet" && !args.newSheet) {
            var charts, len, i = 0;
            charts = this.getSheetElement(args.gotoIndex).find(".e-datavisualization-chart");
            len = charts.length;
            while (i < len) {
                $(charts[i]).ejChart("redraw");
                i++;
            }
        }
    }
    function loadComplete(args) {
        var xlFormat = this.XLFormat, xlEdit = this.XLEdit, xlChart = this.XLChart;
        this.setWidthToColumns([{ colIndex: 0, width: 90 }, { colIndex: 1, width: 85 }, { colIndex: 2, width: 100 }, { colIndex: 11, width: 70 }]);
        this.mergeCells("F16:H16", true);
        xlEdit.updateValue('F16', "3D Column");
        xlFormat.format({ "type": "currency" }, "B2:B21");
        xlFormat.format({ "style": { "font-weight": "bold" } }, "F16:F16");
        xlFormat.format({ "style": { "font-weight": "bold" } }, "A1:C1");
        xlChart.createChart("A1:B6", { type: "column", enable3D: true, marker: { visible: false }, top: 40, left: 260, width: 340, height: 250 });
        this.gotoPage(2, false);
        this.setWidthToColumns([{ colIndex: 0, width: 90 }, { colIndex: 1, width: 85 }, { colIndex: 2, width: 100 }, { colIndex: 11, width: 70 }]);
        this.mergeCells("F16:G16", true);
        xlEdit.updateValue('F16', "Radar with Markers");
        xlFormat.format({ "type": "currency" }, "B2:B21");
        xlFormat.format({ "style": { "font-weight": "bold" } }, "F16:F16");
        xlFormat.format({ "style": { "font-weight": "bold", "font-size": "12px" } }, "A1:C1");
        xlChart.createChart("A1:B6", { type: "radar", enable3D: false, marker: { visible: true }, top: 40, left: 260, width: 340, height: 250 });
        this.gotoPage(3, false);
        this.setWidthToColumns([{ colIndex: 0, width: 90 }, { colIndex: 1, width: 85 }, { colIndex: 2, width: 100 }, { colIndex: 7, width: 90 }, { colIndex: 11, width: 70 }]);
        this.mergeCells("F16:G16", true);
        xlEdit.updateValue('F16', "3D Pie");
        xlFormat.format({ "type": "currency" }, "B2:B21");
        xlFormat.format({ "style": { "font-weight": "bold" } }, "F16:F16");
        xlFormat.format({ "style": { "font-weight": "bold" } }, "A1:C1");
        xlChart.createChart("A1:C6", { type: "pie", enable3D: true, marker: { visible: false }, top: 40, left: 260, width: 360, height: 250 });
        this.gotoPage(1, false);
        this.performSelection("A1");
        this.setSheetFocus();
    }