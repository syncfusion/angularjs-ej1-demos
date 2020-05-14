syncApp.controller('DatePickerCtrl', function ($scope) {
    $scope.dateValue = "5/28/2018";
    $scope.disabledDates = [new Date(2018, 4, 10), new Date(2018, 4, 15), new Date(2018, 4, 20), new Date(2018, 4, 22), new Date(2018, 5, 12), new Date(2018, 5, 24)];
   });