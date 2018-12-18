syncApp.controller('datepickercontroller', function ($scope) {

    $scope.width = '100%';
    $scope.ChangeState = function (args) {
        var dateobject = $('#datepick').data("ejDateRangePicker");
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
        var dateobject = $('#datepick').data("ejDateRangePicker");

        if (args.isChecked) {
            dateobject.popupShow();
        }
        else {
            dateobject.popupHide();
        }
    }
    $scope.ranges = function (args) {
        var dateobject = $('#datepick').data("ejDateRangePicker");
        alert("StartDate - " + dateobject.getSelectedRange().startDate);
        alert("endDate - " + dateobject.getSelectedRange().endDate);
    }
    $scope.clearrange = function (args) {
        var dateobject = $('#datepick').data("ejDateRangePicker");
        if (args) {
            dateobject.clearRanges();
        }
    }

});
