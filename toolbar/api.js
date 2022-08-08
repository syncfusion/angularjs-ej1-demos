var toolbar1;
$(function () {
    toolbar1 = $("#toolbarMethods").data("ejToolbar");
});
syncApp.controller('MethodsCtrl', function ($scope) {
    $scope.onSelectChange=function(args) {
        toolbar1.selectItemByID(args.value);
    }
    $scope.onDeselectChange=function(args) {
        $("#optSelectId").data('ejDropDownList').option('selectedItemIndex', 0);
        toolbar1.deselectItemByID(args.value);
    }
    $scope.onDisableChange=function(args) {
        toolbar1.disableItemByID(args.value);
    }
    $scope.onEnableChange=function(args) {
        $("#optDisableId").data('ejDropDownList').option('selectedItemIndex', 0);
        toolbar1.enableItemByID(args.value);
    }

    $scope.onEnableDisableAll=function(args) {
        if (args.isChecked)
            toolbar1.disable();
        else
            toolbar1.enable();
        $("#optSelectId").data('ejDropDownList').option('selectedItemIndex', 0);
        $("#optDeselectId").data('ejDropDownList').option('selectedItemIndex', 0);
        $("#optDisableId").data('ejDropDownList').option('selectedItemIndex', 0);
        $("#optEnableId").data('ejDropDownList').option('selectedItemIndex', 0);
    }
    $scope.onShowHide=function(args) {
        if (args.isChecked)
            toolbar1.hide();
        else
            toolbar1.show();
    }
});