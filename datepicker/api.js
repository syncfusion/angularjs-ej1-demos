syncApp.controller('datepickercontroller', function ($scope) {

    $scope.value = new Date();
    $scope.width = '100px';
    $scope.ChangeState = function (args) {
        var dateobject = $('#datepick').data("ejDatePicker");
        var tgleBtn = $("#showHide").data('ejToggleButton');
        if (args.isChecked) {
            dateobject.disable();
            tgleBtn.disable();
        }
        else {
            dateobject.enable();
            tgleBtn.enable();
        }

    }

    var tgleBtn = $("#showHide").data('ejToggleButton');
    $(".e-togglebutton").mousedown(function (e) {
        e.stopPropagation();
    });
    $scope.onClose = function (e) {
        var tgleBtn = $("#showHide").data('ejToggleButton');
        tgleBtn.option('toggleState', false);

    }
    $scope.onOpen = function (e) {
        var tgleBtn = $("#showHide").data('ejToggleButton');
        tgleBtn.option('toggleState', true);
    }
    $scope.showhide = function (args) {
        var dateobject = $('#datepick').data("ejDatePicker");

        if (args.isChecked) {
            dateobject.show();
        }
        else {
            dateobject.hide();
        }
    }
});