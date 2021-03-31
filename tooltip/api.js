var target, value, count = 0;
$(function () {
    $("#temp").hide();
    target = $("#reload").ejTooltip(
    {
        isBalloon: false,
        content: "Reload current page",
        position: {
            target: {
                horizontal: "center", vertical: "bottom"
            },
            stem: {
                horizontal: "left", vertical: "top"
            }
        }
    }).data("ejTooltip");
    $("#go").ejTooltip(
    {
        content: "search",

    });
    $("#back").ejTooltip(
    {
        content: "Go back one page",

    });
});
syncApp.controller('MethodsCtrl', function ($scope) {
    $scope.position1 = {
        target: {
            horizontal: "center", vertical: "bottom"
        },
        stem: {
            horizontal: "left", vertical: "top"
        },
    };
    $scope.position2 = {
        target: {
            horizontal: "center", vertical: "bottom"
        },
        stem: {
            horizontal: "left", vertical: "top"
        },
    };
    $scope.onEffectChange = function (args) {
        var btnObj = $("#hideButton").data("ejButton");
        target.show($("#" + args.value));
        $('#hideButton').ejButton({ text: "Hide" });
    }
    $scope.onEnableDisable = function (args) {
        var text;
        var btnObj = $("#hideButton").data("ejButton");
        var DropDownListObj = $("#refresh").data("ejDropDownList");
        if (args.model.text == "Disable") {
            target.disable();
            text = "Enable";
            btnObj.disable();
            DropDownListObj.disable();
        }
        else {
            target.enable();
            text = "Disable";
            btnObj.enable();
            DropDownListObj.enable();
        }

        $('#btnEnable').ejButton({ text: text });

    }
    $scope.onShowHide = function (args) {
        var text;
        var DropDownListObj = $("#refresh").data("ejDropDownList");
        var value = DropDownListObj.getSelectedValue();
        enableBtn = $("#btnEnable").data("ejButton");
        if (args.model.text == "Hide") {
            target.hide();
            text = "Show";
            enableBtn.disable();
        }
        else {
            target.show($("#" + value));
            text = "Hide";
            enableBtn.enable();
        }
        $('#hideButton').ejButton({ text: text });
    }
});