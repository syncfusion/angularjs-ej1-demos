var target;
syncApp.controller('MethodsCtrl', function ($scope) {
    $scope.saveurl = window.baseurl + "api/uploadbox/Save";
    $scope.removeurl = window.baseurl + "api/uploadbox/Remove";
    $scope.onCheckUncheckAll=function(args) {
        target = $("#UploadMethods").data("ejUploadbox");
        if (args.isChecked)
            target.disable();
        else
            target.enable();
    }
    $scope.OnCheck=function(args) {
        target = $("#UploadMethods").data("ejUploadbox");
        if (args.isChecked) {
            target.setModel({ multipleFilesSelection: true });
        } else {
            target.setModel({ multipleFilesSelection: false });
        }

    }
});

