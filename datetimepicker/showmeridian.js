syncApp.controller('datetimepickercontroller', function ($scope) {
    $scope.value = "12:00 AM",
    $scope.width = '100%',
    $scope.timeDrillDown = {
        enabled: true,
        interval: 5,
        showMeridian: true
    }

});
