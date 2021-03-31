$(function () {
    $("#btnOpen").hide();
    $("#btnDialogOpen").ejButton("disable");
});

syncApp.controller('DialogApiCtrl', function ($scope) {
    $scope.onDialogClose=function(args) {
        $("#btnOpen").show();
        $("#btnDialogMinimize").ejToggleButton("disable");
        $("#btnDialogMaximize").ejToggleButton("disable");
        $("#btnDialogCollapse").ejToggleButton("disable");
        $("#btnDialogClose").ejButton("disable");
        $("#btnDialogOpen").ejButton("enable");
    }
    $scope.onOpen=function() {
       var eDialog = $("#dialogAPI").data("ejDialog");
        if (eDialog.model) {
            $("#btnOpen").hide();
            eDialog.open();
            $("#btnDialogOpen").ejButton("disable");
            $("#btnDialogClose").ejButton("enable");
        }
    }
    $scope.onClose=function() {
        var eDialog = $("#dialogAPI").data("ejDialog");
        eDialog.close();
        $("#btnDialogClose").ejButton("disable");
        $("#btnDialogOpen").ejButton("enable");
    }
    $scope.onMinimize=function(args) {
        var eDialog = $("#dialogAPI").data("ejDialog");
        if (args.isChecked) {
            if ($("#btnDialogMaximize").ejToggleButton("model.toggleState") == true)
                $("#btnDialogMaximize").ejToggleButton("model.toggleState", false);
            eDialog.minimize();
            $("#btnDialogMinimize").ejToggleButton("model.toggleState", true)
            $("#btnDialogCollapse").ejToggleButton("disable");
        }
        else {
            eDialog.restore();
            $("#btnDialogCollapse").ejToggleButton("enable");
            if ($("#btnDialogCollapse").ejToggleButton("model.toggleState") == true)
                $("#btnDialogCollapse").ejToggleButton("model.toggleState", false);
        }
    }
    $scope.onMaximize=function(args) {
        var eDialog = $("#dialogAPI").data("ejDialog");
        if (args.isChecked) {
            if ($("#btnDialogMinimize").ejToggleButton("model.toggleState") == true)
                $("#btnDialogMinimize").ejToggleButton("model.toggleState", false);
            eDialog.maximize();
            if ($("#btnDialogCollapse").ejToggleButton("model.toggleState") == true)
                $("#btnDialogCollapse").ejToggleButton("model.toggleState", false);
        }
        else {
            eDialog.restore();
            if ($("#btnDialogMinimize").ejToggleButton("model.toggleState") == true)
                $("#btnDialogMinimize").ejToggleButton("model.toggleState", false);
            if ($("#btnDialogCollapse").ejToggleButton("model.toggleState") == true)
                $("#btnDialogCollapse").ejToggleButton("model.toggleState", false);
        }
        $("#btnDialogCollapse").ejToggleButton("enable");
    }
    $scope.onCollapse = function (args) {
        var eDialog = $("#dialogAPI").data("ejDialog");
        (args.isChecked) ? eDialog.collapse() : eDialog.expand();
    }
    $scope.enableBtn = function (args) {
        var eDialog = $("#dialogAPI").data("ejDialog");
        $("#btnDialogMinimize").ejToggleButton("enable");
        $("#btnDialogMaximize").ejToggleButton("enable");
        if (!eDialog._minimize)
            $("#btnDialogCollapse").ejToggleButton("enable");
    }
});