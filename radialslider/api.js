


syncApp.controller('radialSliderCtrl', function ($scope) {
    $scope.onStartchange = function (args) {
        var instance = $("#apiradialSlider").data("ejRadialSlider");
        var value1 = instance.model.endAngle;
        if (args.value > value1)
            alert("Value must be less than end angle");
        else
            $("#apiradialSlider").ejRadialSlider({ startAngle: args.value })
    }
    $scope.onEndchange = function (args) {
        var instance = $("#apiradialSlider").data("ejRadialSlider");
        var value2 = instance.model.startAngle;
        if (args.value < value2)
            alert("Value must be greater than start angle");
        else
            $("#apiradialSlider").ejRadialSlider({ endAngle: args.value })
    }
    $scope.onShowHideReset = function (args) {
        var roundUpp = args.isChecked ? false : true;
        $("#apiradialSlider").ejRadialSlider({ enableRoundOff: roundUpp })
    }
    $scope.valueChange = function (args) {
        if (!ej.isNullOrUndefined(args.value))
            $("#apiradialSlider").ejRadialSlider({ strokeWidth: (args.value != null) ? args.value : 1 })
    }
    $scope.radialshowChange = function (args) {
        $("#apiradialSlider").ejRadialSlider(args.isChecked ? "hide" : "show");

    }
});
