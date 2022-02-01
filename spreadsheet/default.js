syncApp.controller('SpreadsheetCtrl', function ($scope,$rootScope) {
    $scope.excelurl = window.baseurl + "api/Spreadsheet/ExcelExport";
    $scope.importurl = window.baseurl + "api/Spreadsheet/Import";
    $scope.csvurl = window.baseurl + "api/Spreadsheet/CsvExport";
    $scope.pdfurl = window.baseurl + "api/Spreadsheet/PdfExport";
   $scope.sheetData = [{ rangeSettings: [{ dataSource: window.defaultData, startCell: 'A1' }] }];
   $scope.loadComplete = loadComplete;
 });
 function loadComplete(args) {
            var xlFormat = this.XLFormat;
			if(!this.model.isImport){
				this.setWidthToColumns([140, 128, 105, 100, 100, 110, 120, 120, 100]);          
				xlFormat.format({ "style": { "font-weight": "bold" } }, "A1:H1");
				xlFormat.format({ "type": "currency" }, "E2:H11");            
				this.XLRibbon.updateRibbonIcons();
			}
        }