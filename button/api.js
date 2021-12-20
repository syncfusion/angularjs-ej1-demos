var list = [{ text: "Right", value: 'right' },
            { text: "Left", value: 'left' },
            { text: "Top", value: 'top' },
            { text: "Bottom", value: 'bottom' }];

syncApp.controller('ButtonApiCtrl', function ($scope, $rootScope) {
    $scope.buttonMode = "Dropdown",
    $scope.index = 0,
    $scope.dataList = list,
    $scope.checkuncheck = function (args) {
        var button1 = $("#button").data('ejButton');
        var button2 = $("#toggle1").data('ejToggleButton');
        var button3 = $("#split1").data('ejSplitButton');
        var button4 = $("#dropdown1").data('ejSplitButton');
        if (args.isChecked) {
            button1.disable();
            button2.disable();
            button3.disable();
            button4.disable();
        }
        else {
            button1.enable();
            button2.enable();
            button3.enable();
            button4.enable();
        }
    }
    $scope.onArrowChange = function (args) {
        if (args.value == "top" || args.value == "bottom")
            $(".splttd").css("padding", "6px 20px 6px 20px");
        else
            $(".splttd").css("padding", "6px 20px 6px 20px");
        $(".e-splitbutton").ejSplitButton({ "arrowPosition": args.value });
    }


})