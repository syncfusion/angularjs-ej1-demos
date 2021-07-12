syncApp.controller('datepickercontroller', function ($scope) {

    $scope.value = new Date();
    $scope.width = '100%';
    $scope.ChangeState = function (args) {
        var timeobject = $('#datepick').data("ejTimePicker");
        var tgleBtn = $("#showHide").data('ejToggleButton');
        var Btn1 = $('#values_get').data('ejButton');
        var Btn2 = $('#clear').data('ejButton');
        if (args.isChecked) {
            timeobject.disable();
            tgleBtn.disable();
            Btn1.disable();
            Btn2.disable();
        }
        else {
            timeobject.enable();
            tgleBtn.enable();
            Btn1.enable();
            Btn2.enable();
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
        var timeobject = $('#datepick').data("ejTimePicker");

        if (args.isChecked) {
            timeobject.show();
        }
        else {
            timeobject.hide();
        }
    }
    $scope.ranges = function (args) {
        var timeobject = $('#datepick').data("ejTimePicker");
        alert("Selected time is : " + timeobject.getValue());
    }
    $scope.clearrange = function (args) {
        var timeobject = $('#datepick').data("ejTimePicker");
        timeobject.setCurrentTime();
    }

});