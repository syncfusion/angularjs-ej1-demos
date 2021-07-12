var list = [
                    { text: "1", value: "1" },
                    { text: "2", value: "2" },
                    { text: "3", value: "3" },
                    { text: "4", value: "4" },
                    { text: "5", value: "5" },
                    { text: "6 ", value: "6" },
                    { text: "7 ", value: "7" },
                    { text: "8 ", value: "8" },

];

syncApp.controller('signatureCtrl', function ($scope) {
    $scope.colorValue = "#000000";
    $scope.dataList = list;
    $scope.onstrokecolorchange = function (args) {
        var sig = $("#apisignature").ejSignature("instance");
        sig.model.strokeColor = args.value;
    }
    $scope.onchange = function (args) {
        var sig = $("#apisignature").ejSignature("instance");
        sig.model.strokeWidth = parseInt(args.value);
    }

    $scope.onsave = function (args) {
        var sig = $("#apisignature").ejSignature("instance");
        sig.save("MySignature");
    }

    $scope.onclear = function () {
        var sig = $("#apisignature").ejSignature("instance");
        sig.clear();
    }

    $scope.onundo = function () {
        var sig = $("#apisignature").ejSignature("instance");
        sig.undo();
    }

    $scope.onredo = function () {
        var sig = $("#apisignature").ejSignature("instance");
        sig.redo();
    }

    $scope.signshowChange = function (args) {
        $("#apisignature").ejSignature(args.isChecked ? "hide" : "show");
    }

});
