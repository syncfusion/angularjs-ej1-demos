syncApp.controller('PhoneListCtrl', function ($scope,$rootScope) {
   
   $scope.data = window.gridData;
   $scope.grouping = {groupedColumns:["ShipCity"], showToggleButton: true, showDropArea: false };
 });