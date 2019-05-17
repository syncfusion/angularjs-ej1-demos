var menuObj;
$(function () {
    menuObj = $("#JobSearch").data("ejMenu");
});
syncApp.controller('MethodsCtrl', function ($scope) {
    $scope.onChange1 = function (args) {
        var mobj = $("#JobSearch").data("ejMenu");
        mobj.enableItem(args.value);
        $("#Disable").ejDropDownList("clearText");
    }
    $scope.onChange2 = function (args) {
        var mobj = $("#JobSearch").data("ejMenu");
        mobj.disableItem(args.value);
        $("#Enable").ejDropDownList("clearText");
    }
    $scope.onCheckUncheckAll = function (args) {
        $("#Disable").ejDropDownList("clearText");
        $("#Enable").ejDropDownList("clearText");
        if (args.isChecked) {
            menuObj.disable();
        }
        else {
            menuObj.enable();
        }
    }
});