var fontfamily = ["Segoe UI", "Arial", "Times New Roman", "Tahoma", "Helvetica"],
          fontsize = ["1pt", "2pt", "3pt", "4pt", "5pt"],
          action1 = ["New", "Clear"],
          action2 = ["Bold", "Italic", "Underline", "strikethrough", "superscript", "subscript", "JustifyLeft", "JustifyCenter", "JustifyRight", "JustifyFull", "Undo", "Redo"];

syncApp.controller('customTooltipCtrl', function ($scope,  $rootScope) {
    $scope.fontlist = fontfamily;
    $scope.fontsize = fontsize;
    $scope.action1 = action1;
    $scope.action2 = action2;
});

