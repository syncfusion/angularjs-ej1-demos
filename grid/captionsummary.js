syncApp.controller('PhoneListCtrl', function ($scope,$rootScope) {
   
   $scope.data = window.gridData;
    $scope.summaryRows = [{ title: "Sum", summaryColumns: [{ summaryType: ej.Grid.SummaryType.Sum, displayColumn: "Freight", dataMember: "Freight", format: "{0:C2}" }],
	showCaptionSummary: true
	
    }];
   $scope.grouping = { groupedColumns:["ShipCity"], showDropArea: true };
 });