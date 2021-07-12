var disableRange = [{ startTime: "3:00 AM", endTime: "6:00 AM" },
                    { startTime: "1:00 PM", endTime: "3:00 PM" },
                    { startTime: "8:00 PM", endTime: "10:00 PM" }];
       syncApp.controller('TimePickerCtrl', function ($scope) {
           $scope.tvalue = "10:30 AM";
           $scope.disabledTimes = disableRange;
       });