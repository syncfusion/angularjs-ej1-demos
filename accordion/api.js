var acrdnObj, optDisable, optEnable, activeObj;
$(function () {
    acrdnObj = $("#APIAccordion").data("ejAccordion");
    activeObj = $("#optActiveChange").data("ejDropDownList");
    optDisable = $("#optDisableChange").data("ejDropDownList");
    optEnable = $("#optEnableChange").data("ejDropDownList");
});
syncApp.controller('MethodsCtrl', function ($scope, $rootScope) {
    $scope.onEnaleDisableAll = function (args) {
        if (acrdnObj) {
            if (args.isChecked) {
                acrdnObj.disable();
                activeObj.disable();
                optDisable.disable();
            }
            else {
                acrdnObj.enable();
                activeObj.enable();
                optDisable.enable();
            }
        }
    }
    $scope.onDestoryRestore = function (args) {
        if (args.isChecked) {
            acrdnObj.destroy();
            acrdnObj = null;
        }
        else {
            $("#APIAccordion").ejAccordion();
            acrdnObj = $("#APIAccordion").data("ejAccordion");
        }
    }
    $scope.onActiveChange = function (args) {
        if (acrdnObj) {
            acrdnObj.option({ selectedItemIndex: args.value });
            $("#optDisableChange").ejDropDownList("clearText");
            $("#optEnableChange").ejDropDownList("clearText");
        }
    }
    $scope.onDisableChange = function (args) {
        var arrIndex = [], uncheck = [];
        if (args.isChecked) arrIndex.push(parseInt(args.value));
        else uncheck.push(parseInt(args.value));
        if (acrdnObj) {
            acrdnObj.disableItems(arrIndex); acrdnObj.enableItems(uncheck);
            $("#optActiveChange").ejDropDownList("clearText");
            $("#optEnableChange").ejDropDownList("clearText");

        }
    }
    $scope.onEnableChange = function (args) {
        var arrayIndex = [], uncheck = [];
        if (args.isChecked) arrayIndex.push(parseInt(args.value));
        else uncheck.push(parseInt(args.value));
        if (acrdnObj) {
            acrdnObj.enableItems(arrayIndex); acrdnObj.disableItems(uncheck);
            $("#optActiveChange").ejDropDownList("clearText");
            $("#optDisableChange").ejDropDownList("clearText");
        }
    }
    $scope.onShowHide = function (args) {
        if (acrdnObj) {
            if (args.isChecked)
                acrdnObj.show();
            else
                acrdnObj.hide();
        }
    }
    $scope.onHeightAdjust = function (args) {
        if (acrdnObj) {
            acrdnObj.element.find(">.e-content").css("height", "");
            acrdnObj.option("heightAdjustMode", args.value);
        }
    }
    $scope.onShowHideCloseBtn = function (args) {
        acrdnObj && acrdnObj.option("showCloseButton", args.isChecked);
    }
});