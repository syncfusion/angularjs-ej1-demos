syncApp.controller('ButtoneventCtrl', function ($scope) {
    $scope.value = "#102010";
    $scope.onCreate = function (e) {
        jQuery.addEventLog("ColorPicker has been <span class='eventTitle'> created</span>.");
    }

    $scope.onFocusIn = function (e) {
        jQuery.addEventLog("ColorPicker popup has been <span class='eventTitle'>Opened</span>. ");
    }
    $scope.onFocusOut = function (e) {
        jQuery.addEventLog("ColorPicker popup has been <span class='eventTitle'>Closed</span>.");
    }
    $scope.onSelect = function (args) {
        jQuery.addEventLog("The value '" + args.value + "' has been <span class='eventTitle'>selected</span>.");
    }
    $scope.onChange = function (args) {
        jQuery.addEventLog("The value has been <span class='eventTitle'>changed</span> to '" + args.value + "'.");
    }
    $scope.onClear = function () {
        jQuery.clearEventLog();
    }
    $scope.evtpropscheckedevent = function (args) {
        var colorObj = $("#colorPicker").data("ejColorPicker");
        if (args.isChecked) {
            switch (args.selectedValue) {
                case "open": colorObj.option(args.selectedValue, "onFocusIn"); break;
                case "close": colorObj.option(args.selectedValue, "onFocusOut"); break;
                case "select": colorObj.option(args.selectedValue, "onSelect"); break;
                case "change": colorObj.option(args.selectedValue, "onChange"); break;
            }
        }
        else colorObj.option(args.selectedValue, null);
    }

});
