syncApp.controller('DatepickerEventeventCtrl', function ($scope) {
    $scope.value = new Date();

    $scope.onCreate = function (args) {
        jQuery.addEventLog("DatePicker has been <span class='eventTitle'>created.</span>");
    }
    $scope.onSelected = function (args) {
        jQuery.addEventLog(args.value + " was <span class='eventTitle'>selected.</span>");
    }
    $scope.onOpen = function (args) {
        jQuery.addEventLog("DatePicker popup has been <span class='eventTitle'>opened.</span>");
    }
    $scope.onClose = function (args) {
        jQuery.addEventLog("DatePicker popup has been <span class='eventTitle'>closed.</span>");
    }
    $scope.onClear = function () {
        jQuery.clearEventLog();
    }


});