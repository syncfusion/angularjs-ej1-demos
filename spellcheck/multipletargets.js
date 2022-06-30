var dicSettings = {
    dictionaryUrl: window.baseurl + "api/SpellCheck/CheckWords",
    customDictionaryUrl: window.baseurl + "api/SpellCheck/AddToDictionary"
}

syncApp.controller('spellcheckCtrl', function ($scope) {
    $scope.dictionarySettings = dicSettings;
    $scope.checkInDialog = function (e) {
        var spellObj = $("#SpellCheck").data("ejSpellCheck");
        spellObj.showInDialog();
    }
    $scope.onTargetUpdating = function (args) {
        onUpdate(args.previousElement);
        $(args.currentElement)[0].style.border = "thin solid blue";
    }
    $scope.onDialogClose = function (args) {
        onUpdate(args.targetElement);
    }

    function onUpdate(element) {
        if (!ej.isNullOrUndefined(element)) {
            if ($(element)[0].attributes["id"].value === "control2")
                $(element)[0].style.borderColor = "rgb(169, 169, 169)";
            else
                $(element)[0].style.border = "none";
        }
    }
});