syncApp.controller('DatepickerEventeventCtrl', function ($scope) {
    $scope.value = new Date();

    $scope.onCreate = function (args) {
        jQuery.addEventLog("TimePicker has been <span class='eventTitle'>created.</span>");
    }
    $scope.timeValChange = function (args) {
        jQuery.addEventLog("TimePicker value has been <span class='eventTitle'>changed</span> to " + args.value + ".</br>");
    }
    $scope.onFocusIn = function (args) {
        jQuery.addEventLog("TimePicker is in <span class='eventTitle'>Focus</span>");
    }
    $scope.onFocusOut = function (args) {
        jQuery.addEventLog("TimePicker is out of <span class='eventTitle'>Focus</span>");
    }
    $scope.onClear = function () {
        jQuery.clearEventLog();
    }


});
