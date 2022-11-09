var dicSettings = {
    dictionaryUrl: window.baseurl + "api/SpellCheck/CheckWords",
    customDictionaryUrl: window.baseurl + "api/SpellCheck/AddToDictionary"
}

syncApp.controller('spellcheckCtrl', function ($scope) {
    $scope.dictionarySettings = dicSettings;
    $scope.checkSpell = function (e) {
        var spellObj = $("#SpellCheck").data("ejSpellCheck");
        spellObj.validate();
    }
});