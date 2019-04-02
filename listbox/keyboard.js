
syncApp.controller('ListBoxKeyBoardCtrl', function ($scope, $document) {
    $scope.dataList = [
              { fonts: "Algerian" },
              { fonts: "ARIAL" }, { fonts: "Bimini" }, { fonts: "Courier" },
              { fonts: "Cursive" }, { fonts: "Fantasy" }, { fonts: "Georgia" }, { fonts: "Impact" },
              { fonts: "New york" }, { fonts: "Sans-Serif" }, { fonts: "Scripts" }, { fonts: "Times" },
              { fonts: "Times New Roman" }, { fonts: "Verdana" }, { fonts: "Western" }, { fonts: "Zapfellipt bt" }
    ];
    $scope.value = "fonts";
    $scope.text = "fonts";
    $document.bind("keydown", function (e) {
        if (e.altKey && e.keyCode === 74) { // j- key code.
            var target = $('#selectfont').data("ejListBox");
            if (!ej.isNullOrUndefined(target)) {
                target.selectItemByIndex(0);
                $("#selectfont_container").focus();
            }
        }
    });
});
