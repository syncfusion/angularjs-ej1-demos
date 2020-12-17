
syncApp.controller('ListBoxApiCtrl', function ($scope) {
    $scope.skillset = [{ skill: "ASP.NET" }, { skill: "ActionScript" }, { skill: "Basic" },
            { skill: "C++" }, { skill: "C#" }, { skill: "dBase" }, { skill: "Delphi" },
            { skill: "ESPOL" }, { skill: "F#" }
    ];
    $scope.add = function (e) {
        var ListboxObj = $('#selectsection').data("ejListBox");
        ListboxObj.addItem($("#additem").val());
    }
    $scope.remove = function (e) {
        var ListboxObj = $('#selectsection').data("ejListBox");
        ListboxObj.removeItem();
    }
    $scope.onEnableDiasableAll = function (args) {
        var ListboxObj = $('#selectsection').data("ejListBox");
        if (args.isChecked) {
            ListboxObj.disable();
            $(".ctrllabel").css("opacity", 0.5);
        }
        else {
            ListboxObj.enable();
            $(".ctrllabel").css("opacity", 1);
        }
    }
    $scope.onShowHide = function (args) {
        var ListboxObj = $('#selectsection').data("ejListBox");
        var CheckedObj = $("#Checks").data("ejButton");
		var UnCheckObj = $("#Unchecks").data("ejButton");
		var SelectObj = $("#Selects").data("ejButton");
		var UnSelectObj = $("#Unselects").data("ejButton");
        if (args.isChecked) {
            ListboxObj.option("showCheckbox", true);
            CheckedObj.enable();
            UnCheckObj.enable();
            SelectObj.disable();
            UnSelectObj.disable();
            $("#unselects").attr("disabled", "true");
            $("#selects").attr("disabled", "true");
            $("#checks").removeAttr("disabled");
            $("#unchecks").removeAttr("disabled");
        }
        else {
            ListboxObj.option("showCheckbox", false);
            CheckedObj.disable();
            UnCheckObj.disable();
            SelectObj.enable();
            UnSelectObj.enable();
            $("#unselects").removeAttr("disabled");
            $("#selects").removeAttr("disabled");
            $("#checks").attr("disabled", "true");
            $("#unchecks").attr("disabled", "true");
        }
    }
    
    $scope.checks = function (args) {
        var ListboxObj = $('#selectsection').data("ejListBox");
        value = $("#checks").val();
        if (value != "") {
            ListboxObj.checkItemsByIndices(value);
        }
        else alert("Please enter the item index");
    }
    $scope.unchecks = function (e) {
        var ListboxObj = $('#selectsection').data("ejListBox");
        value = $("#unchecks").val();
        if (value != "") {
            ListboxObj.uncheckItemsByIndices(value);
        }
        else alert("Please enter the item index");
    }    

    $scope.selects = function (e) {
        var ListboxObj = $('#selectsection').data("ejListBox");
        value = $("#selects").val();
        if (value != "")
            ListboxObj.selectItemsByIndex(value);
        else alert("Please enter the item index");
    }
    $scope.unselects = function (e) {
        var ListboxObj = $('#selectsection').data("ejListBox");
        value = $("#unselects").val();
        ListboxObj.unselectItemsByIndex(value);
    }

    $scope.disable = function (e) {
        var ListboxObj = $('#selectsection').data("ejListBox");
        value = $("#disable").val();
        if (value != "")
            ListboxObj.disableItemsByIndices(value);
        else alert("Please enter the item index");
    }
    $scope.enable = function (e) {
        var ListboxObj = $('#selectsection').data("ejListBox");
        value = $("#enable").val();
        if (value != "")
            ListboxObj.enableItemsByIndices(value);
        else alert("Please enter the item index");
    }
});
