var tabIndex = 1, tabObj;
$(function () {
    // declaration
    tabObj = $("#apiTab").data("ejTab");
    enableObj = $("#optEnable").data('ejDropDownList');
    disableObj = $("#optDisable").data('ejDropDownList');
    removeObj = $("#optRemove").data('ejDropDownList');

});

syncApp.controller('MethodsCtrl', function ($scope) {
    $scope.onDisableChange = function (args) {
        if (tabObj.model) {
            tabObj.option({ disabledItemIndex: [parseInt(args.value)] });
            $("#optEnable").ejDropDownList("clearText");
            $("#optRemove").ejDropDownList("clearText");
        }
    }
    $scope.onEnableChange = function (args) {
        if (tabObj.model) {
            tabObj.option({ enabledItemIndex: [parseInt(args.value)] });
            $("#optDisable").ejDropDownList("clearText");
            $("#optRemove").ejDropDownList("clearText");
        }
    }
    $scope.onRemoveChange = function (args) {
        if (tabObj.model) {
            tabObj.removeItem(parseInt(args.value));
            removObj = $("#optRemove").ejDropDownList("instance");
            $(removObj.items[removObj.popupListItems.length -= 1]).remove();
            disObj = $("#optDisable").ejDropDownList("instance");
            $(disObj.items[disObj.popupListItems.length -= 1]).remove();
            enObj = $("#optEnable").ejDropDownList("instance");
            $(enObj.items[enObj.popupListItems.length -= 1]).remove();
            $("#optDisable").ejDropDownList("clearText");
            $("#optEnable").ejDropDownList("clearText");
        }
    }
    $scope.onDestoryRestore = function (args) {
        i = 0;
        $("#optEnable").ejDropDownList("clearText");
        $("#optRemove").ejDropDownList("clearText");
        $("#optDisable").ejDropDownList("clearText");
        if (args.isChecked) {
            tabObj.destroy();
            enableObj.disable();
            disableObj.disable();
            removeObj.disable();
        }
        else {
            $("#apiTab").ejTab();
            tabObj = $("#apiTab").data("ejTab");
            enableObj.enable();
            disableObj.enable();
            removeObj.enable();
        }
    }
});
