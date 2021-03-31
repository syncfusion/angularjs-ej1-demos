var progressBar;
syncApp.controller('MethodsCtrl', function ($scope) {
    $scope.changeState = function (args) {
        progressBar = $("#progressBar").data("ejProgressBar");
        if (args.isChecked) progressBar.disable();
        else progressBar.enable();
    }
    $scope.onGetPercentage=function() {
        progressBar = $("#progressBar").data("ejProgressBar");
        alert("Progress percentage : " + progressBar.getPercentage());
    }

});
