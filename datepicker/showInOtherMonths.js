syncApp.controller('datepickercontroller', function ($scope) {
    $scope.onStateChange = function (args) {
        var datebject = $("#datepick").data("ejDatePicker");
        if (args.isChecked)
            datebject.setModel({ showOtherMonths: true });
        else {
            datebject.setModel({ showOtherMonths: false });
        }
    }
});