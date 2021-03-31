var today = new Date(), year = today.getFullYear(), month = today.getMonth(),
                           spldays = [
                                  { date: new Date(year, month, 8), tooltip: "In Australia", iconClass: "flags sprite-Australia" },
                                  { date: new Date(year, month, 21), tooltip: "In France", iconClass: "flags sprite-France" },
                                  { date: new Date(year, month, 17), tooltip: "In USA", iconClass: "flags sprite-USA" },
                                  { date: new Date(year, month + 1, 15), tooltip: "In Germany", iconClass: "flags sprite-Germany" },
                                  { date: new Date(year, month - 1, 22), tooltip: "In India", iconClass: "flags sprite-India" },
                           ]
syncApp.controller('DatePickerCtrl', function ($scope) {
    $scope.dateValue = new Date();
    $scope.splDates = spldays;
   });