var target;
$(function () {
    target = $('#bookSelect').data("ejDropDownList");
});
syncApp.controller('MethodsCtrl', function ($scope) {
    $scope.BooksSection = [
   { category: "Art" }, { category: "Architecture" }, { category: "Biographies" }, { category: "Business" }, { category: "ComputerIT" },
   { category: "Comics" }, { category: "Cookery" }, { category: "Environment" }, { category: "Fiction" },
   { category: "Health" }, { category: "Humanities" }, { category: "Language" }, { category: "Literature" }, { category: "Memoirs" },
   { category: "Management" }, { category: "Professional" }, { category: "Reference" }, { category: "Spirituality" },
   { category: "Sports" }, { category: "Sciences" }
    ];
    $scope.onActiveIndexChange = function (args) {
        target.option({ selectedIndex: parseInt(args.selectedValue) });
        $("#optValueChange").ejDropDownList("clearText");
        $("#optTextChange").ejDropDownList("clearText");

    }
    $scope.onActiveValueChange = function (args) {
        target.selectItemByValue(args.selectedValue);
        $("#optIndexChange").ejDropDownList("clearText");
        $("#optTextChange").ejDropDownList("clearText");
    }
    $scope.onActiveTextChange = function (args) {
        target.selectItemByText(args.selectedValue);
        $("#optIndexChange").ejDropDownList("clearText");
        $("#optValueChange").ejDropDownList("clearText");
    }

    $scope.onCheckUncheckAll = function (args) {
        (args.isChecked) ? target.disable() : target.enable()
    }
    $scope.incrementalchange = function (args) {
        (args.isChecked) ? target.option({ "enableFilterSearch": true }) : target.option({ "enableFilterSearch": false })
    }
    $scope.casesensitivechange = function (args) {
        (args.isChecked) ? target.option({ "caseSensitiveSearch": true }) : target.option({ "caseSensitiveSearch": false })
    }
    $scope.valuetext = function (e, ui) {
        alert("Selected Item is " + target.getValue());
    }
});
