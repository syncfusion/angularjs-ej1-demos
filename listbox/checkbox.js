
syncApp.controller('ListBoxCheckBoxCtrl', function ($scope) {
    $scope.onCheckUncheckAll = function (args) {
        var target = $('#selectcheck').data("ejListBox");
        if (args.isChecked)
            target.checkAll();
        else
            target.uncheckAll();
    }
    $scope.onShowHide = function (args) {
        var target = $('#selectcheck').data("ejListBox");
        var ButtonObj = $("#get").data("ejButton");
        var ToggleButtonObj = $("#btnchkunchk").data("ejToggleButton");
        if (args.isChecked) {
            target.option("showCheckbox", false);
            ButtonObj.disable();
            ToggleButtonObj.disable();
        }

        else {
            target.option("showCheckbox", true);
            ButtonObj.enable();
            ToggleButtonObj.enable();
        }
    }
    $scope.GetCheckeditems = function (e) {
        var target = $('#selectcheck').data("ejListBox");
        var alertMsg = "";
        var checkedItems = target.getCheckedItems();
        if (checkedItems.length) {
            $(checkedItems).each(function (index, ele) {
                alertMsg += "<tr class='checkedItems'><td>" + ele.index + "</td><td>" + ele.value + "</td></tr>";
                $(".checkedItems").remove();
                $("#resultdata").append(alertMsg);
            });
        }
        else {
            $(".checkedItems").remove();
            $("#resultarea br").remove();
            $("#resultarea").append("<br /><span class='checkedItems'>No items are checked</span>");
        }
    }
});

