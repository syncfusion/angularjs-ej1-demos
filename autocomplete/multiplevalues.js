
syncApp.controller('AutocompleteMultiCtrl', function ($scope, $rootScope) {
    $scope.multidelimit = ej.MultiSelectMode.Delimiter;
	$scope.multivisual  = ej.MultiSelectMode.VisualMode;
    $scope.multidataList = [
                    "ActionScript", "AppleScript", "ASP", "BASIC", "BeanShell",
                    "C", "C++", "C#", "Clojure", "COBOL", "ColdFusion", "DataFlex", "DCL",
                    "Erlang", "E#", "Fortran", "F#", "Flex", "Google Apps Script", "Groovy", "Haskell", "Hope", "IBM HAScript",
                    "Java", "JavaScript", "J#", "Lisp", "MATLAB", "Oak", "Perl", "PHP",
                    "Python", "Ruby", "Scala", "Scheme", "T-SQL", "WebQL", "ZOPL"
            ];;
});