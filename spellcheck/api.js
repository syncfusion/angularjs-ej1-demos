var dicSettings = {
    dictionaryUrl: window.baseurl + "api/SpellCheck/CheckWords",
    customDictionaryUrl: window.baseurl + "api/SpellCheck/AddToDictionary"
}

var list = [{ word: "audiobook" }, { word: "Blu" }, { word: "DVDs" }];

var classNameList = [
    { id: 'highlighter1', text: 'Highlight1', value: 'errorword' },
    { id: 'highlighter2', text: 'Highlight2', value: 'highlighter' },
    { id: 'highlighter3', text: 'Highlight3', value: 'e-errorword' }
];



syncApp.controller('spellcheckCtrl', function ($scope) {
    $scope.dictionarySettings = dicSettings;
    $scope.checkSpell = function (e) {
        var spellObj = $("#SpellCheck").data("ejSpellCheck");
        spellObj.validate();
    }
    $scope.dataList = list;
    $scope.ignoreWordsFields = { dataSource: this.dataList, text: 'word' };
    $scope.nvalue = "6";
    $scope.cssNameList = classNameList;
    $scope.cssNamesFields = { dataSource: this.cssNameList, text: 'text', value: 'value' };
    $scope.width = "195px";
	
    $scope.addIgnoreWords = function (args) {
        $("#SpellCheck").ejSpellCheck({ ignoreWords: !ej.isNullOrUndefined(args.model.value) ? args.model.value.split(",") : [] });
    };
    $scope.changeErrorHighlight = function (args) {
        $("#SpellCheck").ejSpellCheck({ misspellWordCss: args.value });
    };
    $scope.onIgnoreAlphaNumericWords = function (args) {
        $("#SpellCheck").ejSpellCheck({ ignoreSettings: { ignoreAlphaNumericWords: args.isChecked } });
    };
    $scope.onIgnoreUrl = function (args) {
        $("#SpellCheck").ejSpellCheck({ ignoreSettings: { ignoreUrl: args.isChecked } });
    };
    $scope.onIgnoreUpperCase = function (args) {
        $("#SpellCheck").ejSpellCheck({ ignoreSettings: { ignoreUpperCase: args.isChecked } });
    };
    $scope.onIgnoreMixedCaseWords = function (args) {
        $("#SpellCheck").ejSpellCheck({ ignoreSettings: { ignoreMixedCaseWords: args.isChecked } });
    };
    $scope.onIgnoreFileNames = function (args) {
        $("#SpellCheck").ejSpellCheck({ ignoreSettings: { ignoreFileNames: args.isChecked } });
    };
    $scope.onIgnoreEmailAddress = function (args) {
        $("#SpellCheck").ejSpellCheck({ ignoreSettings: { ignoreEmailAddress: args.isChecked } });
    };
    $scope.maxSuggestionChange = function (args) {
        $("#SpellCheck").ejSpellCheck({ maxSuggestionCount: args.value });
    };
});