var lineData = [12, 14, 11, 12, 11, 15, 12, 10, 11, 12, 15, 13, 12, 11, 10, 13, 15, 12, 14, 16, 14, 12, 11];
var columnData = [2, 6, -1, 1, 12, 5, -2, 7, -3, 5, 8, 10];
var areaData = [12, -10, 11, 8, 17, 6, 2, -17, 13, -6, 8, 10];
var winlossData = [12, 15, -11, 13, 17, 0, -12, 17, 13, -15, 8, 10];
var pie1Data = [4, 6, 7];
var pie2Data = [8, 9, 1, ];
var pie3Data = [2, 3, 5];
var pie4Data = [10, 12, 11]; 

if (!!window.SVGSVGElement) {
 $("#sparkline").css('visibility', 'visible');
    syncApp.controller("sparkline", function ($scope) {
		$scope.LineDataSource = lineData;
		$scope.ColumnDataSource = columnData;
		$scope.AreaDataSource = areaData;
		$scope.WinlossDataSource = winlossData;
		$scope.Pie1DataSource = pie1Data;	
		$scope.Pie2DataSource = pie2Data;
		$scope.Pie3DataSource = pie3Data;
		$scope.Pie4DataSource = pie4Data;
        
    });
}
else {
    $("#sparkline").css('visibility', 'hidden');
    alert("Sparkline will not be supported in IE Version < 9");
}