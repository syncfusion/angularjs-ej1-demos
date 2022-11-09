var ratingObj, ddlObj;
$(function () {
    // declaration
    $("#apiRating").ejRating();
    ratingObj = $("#apiRating").data("ejRating");
    ddlObj = $("#ddlRating").data("ejDropDownList");

});
syncApp.controller('MethodsCtrl', function ($scope) {
    $scope.onGetValueClick = function (args) {
        if (ratingObj.model) {
            var val = ratingObj.getValue();
            alert("Current Value : " + val);
        }
    }
    $scope.setRatingValue = function (args) {
        if (ratingObj.model)
            ratingObj.setValue(args.value);
    }
    $scope.onResetClick = function () {
        if (ratingObj.model)
            ratingObj.reset();
        ddlObj.option("selectedItemIndex", 0);
    }
    $scope.onShowHideRating = function (args) {
        if (ratingObj.model) {
            if (args.isChecked)
                ratingObj.hide();
            else
                ratingObj.show();
        }
    }
    $scope.onShowHideReset = function (args) {
        if (ratingObj.model) {
            if (args.isChecked)
                ratingObj.option({ allowReset: false });
            else
                ratingObj.option({ allowReset: true });
        }
    }
    $scope.onDestoryRestore = function (args) {
        if (args.isChecked) {
            ratingObj.destroy();
        }
        else {
            $("#apiRating").ejRating();
            ratingObj = $("#apiRating").data("ejRating");
            ddlObj.option('value', "");
        }
    }
    $scope.stateChange = function (state) {
        $("#ddlRating").ejDropDownList(state);
        $("#btnGetValue").ejButton(state);
        $("#btnReset").ejButton(state);
        $("#chkResetbtn").ejToggleButton(state);
        $("#chkShowHideRating").ejToggleButton(state);

    }
});
