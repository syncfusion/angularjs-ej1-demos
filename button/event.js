syncApp.controller('ButtoneventCtrl', function ($scope) {
    var list = [{ text: "Play" }, { text: "Pause" }, { text: "Stop" }];

    var listdrp = [{ text: "Before Open", value: "beforeOpen" }, { text: "Open", value: "open" }, { text: 'Change', value: 'change' }, { text: 'Item Mouse Over', value: 'itemMouseOver' }, { text: 'Item Mouse Out', value: 'itemMouseout' }, { text: 'itemSelected', value: 'Item Selected' }, { text: 'Close', value: 'close' }, { text: 'Select', value: 'select' }, { text: 'Before Select', value: 'beforeSelect' }, { text: 'Key Press', value: 'keyPress' }];
    var grpbtnObj = $("#groupButton").data("ejGroupButton");
    var btnObj = $("#buttonnormal").data("ejButton");
    var tglbtnObj = $("#TextOnly").data("ejToggleButton");
    var spltbtnObj = $("#splitbuttonnormal").data("ejSplitButton");

    $scope.dataSource = list,
    $scope.droplist = listdrp,
    ($scope).btnLoad = function (e) {
        jQuery.addEventLog("Button has been <span class='eventTitle'>created</span>.");
    },
    $scope.btnClick = function (e) {
        jQuery.addEventLog("Button has been <span class='eventTitle'>clicked</span>.");
    },
    $scope.tglebtnLoad = function (e) {
        jQuery.addEventLog("ToggleButton has been <span class='eventTitle'>created</span>.");
    },
    $scope.tglebtnClick = function (e) {
        jQuery.addEventLog("ToggleButton has been <span class='eventTitle'>clicked</span>.");
    }
    $scope.tglebtnChange = function (e) {
        jQuery.addEventLog("ToggleButton value has been <span class='eventTitle'>changed</span> to " + e.isChecked + ".");
    }
    $scope.spltbtnLoad = function (e) {
        jQuery.addEventLog("SplitButton has been <span class='eventTitle'>created</span>.");
    }
    $scope.spltbtnClick = function (e) {
        jQuery.addEventLog("SplitButton has been <span class='eventTitle'>clicked</span>.");
    }
    $scope.onFocusIn = function (e) {
        jQuery.addEventLog("SplitButton popup has been <span class='eventTitle'>BeforeOpened</span>. ");
    }
    $scope.spltbtnOpened = function (e) {
        jQuery.addEventLog("SplitButton popup has been <span class='eventTitle'>Opened</span>. ");
    }
    $scope.spltbtnClosed = function (e) {
        jQuery.addEventLog("SplitButton popup has been <span class='eventTitle'>Closed</span>.");
    }
    $scope.spltbtnitmHover = function (e) {
        jQuery.addEventLog("SplitButton item <span class='eventTitle'>hovered-in</span>.");
    }
    $scope.spltbtnitmOut = function (e) {
        jQuery.addEventLog("SplitButton item <span class='eventTitle'>hovered-out</span>.");
    }
    $scope.spltbtnitmSelected = function (e) {
        jQuery.addEventLog(e.text + " item has been <span class='eventTitle'>selected</span>.");
    }
    $scope.grpbtnBeforeSelect = function (args) {
        jQuery.addEventLog("Group Button <span class='eventTitle'>BeforeActive</span> event is fired for Index " + args.index + ".");
    }
    $scope.grpbtnSelect = function (args) {
        jQuery.addEventLog("Group Button <span class='eventTitle'>Active</span> event is fired for Index " + args.index + ".");
    }
    $scope.grpbtnKeyPress = function (args) {
        jQuery.addEventLog("Group Button <span class='eventTitle'>Focus</span> Changed to the index" + args.index + ".");
    }
    $scope.grpbtnLoad = function (e) {
        jQuery.addEventLog("Group Button has been <span class='eventTitle'>created</span>.");
    }
    $scope.onClear = function () {
        jQuery.clearEventLog();
    }

    $scope.evtpropscheckedevent = function (args) {
        if (args.isChecked) {
            switch (args.selectedValue) {
                case "create":
                    btnObj.option(args.selectedValue, "btnLoad");
                    tglbtnObj.option(args.selectedValue, "tglebtnLoad");
                    spltbtnObj.option(args.selectedValue, "spltbtnLoad");
                    grpbtnObj.option(args.value, "grpbtnLoad");
                    break;
                case "click":
                    btnObj.option(args.selectedValue, "btnClick");
                    tglbtnObj.option(args.selectedValue, "tglebtnClick");
                    spltbtnObj.option(args.selectedValue, "spltbtnClick");
                    break;
                case "beforeOpen": spltbtnObj.option(args.selectedValue, "onFocusIn"); break;
                case "open": spltbtnObj.option(args.selectedValue, "spltbtnOpened"); break;
                case "change": tglbtnObj.option(args.selectedValue, "tglebtnChange"); break;
                case "itemMouseOver": spltbtnObj.option(args.selectedValue, "spltbtnitmHover"); break;
                case "itemMouseOut": spltbtnObj.option(args.selectedValue, "spltbtnitmOut"); break;
                case "itemSelected": spltbtnObj.option(args.selectedValue, "spltbtnitmSelected"); break;
                case "close": spltbtnObj.option(args.selectedValue, "spltbtnClosed"); break;
                case "select": grpbtnObj.option(args.value, "grpbtnSelect"); break;
                case "beforeSelect": grpbtnObj.option(args.value, "grpbtnBeforeSelect"); break;
                case "keyPress": grpbtnObj.option(args.value, "grpbtnKeyPress"); break;
            }
        }
        else {
            btnObj.option(args.selectedValue, null);
            tglbtnObj.option(args.selectedValue, null);
            spltbtnObj.option(args.selectedValue, null);
            grpbtnObj.option(args.selectedValue, null);
        }
    }
});
