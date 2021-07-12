syncApp.controller('DatetimepickerEventeventCtrl', function ($scope) {
    $scope.value = new Date();

    $scope.onCreate = function (args) {
        jQuery.addEventLog("DateTimePicker has been <span class='eventTitle'>created.</span>");
    }

    $scope.onOpen = function (args) {
        jQuery.addEventLog("DateTimePicker popup has been <span class='eventTitle'>opened.</span>");
    }
    $scope.onClose = function (args) {
        jQuery.addEventLog("DateTimePicker popup has been <span class='eventTitle'>closed.</span>");
    }
    $scope.timeValChange = function (args) {
        jQuery.addEventLog("DateTimePicker value has been <span class='eventTitle'> changed</span> to " + args.value + ".</br>");
    }
    $scope.onClear = function () {
        jQuery.clearEventLog();
    }


});