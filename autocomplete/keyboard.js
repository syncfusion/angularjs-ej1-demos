
syncApp.controller('AutocompleteKeyBoardCtrl', function ($scope, $rootScope) {
    $scope.keyboarddataList = [
        "ActionScript", "AppleScript", "ASP", "BASIC", "BeanShell",
        "C", "C++", "C#", "Clojure", "COBOL", "ColdFusion", "DataFlex", "DCL",
        "Erlang", "E#", "Fortran", "F#", "Flex", "Google Apps Script", "Groovy",
        "Haskell", "Hope", "IBM HAScript",
        "Java", "JavaScript", "J#", "Lisp", "MATLAB", "Oak", "Perl", "PHP",
        "Python", "Ruby", "Scala", "Scheme", "T-SQL", "WebQL", "ZOPL"
    ];
    $scope.keyboardmultiselect = ej.MultiSelectMode.Delimiter;
    $(document).on("keydown", function (e) {
        if (e.altKey && e.keyCode === 74) { // j- key code.
            $("#autokeyboard").focus();
        }
    });
});