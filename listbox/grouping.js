
ej.support.stableSort = false;
syncApp.controller('ListBoxGroupingCtrl', function ($scope) {
    $scope.dataList = [
         { skill: "Bahrain", category: "B" }, { skill: "Brazil", category: "B" }, { skill: "Argentina", category: "A" },
         { skill: "Bangladesh", category: "B" }, { skill: "Burma", category: "B" }, { skill: "Afghanistan", category: "A" }, { skill: "Antigua and Barbuda", category: "A" },
         { skill: "Barbados", category: "B" }, { skill: "Botswana", category: "B" }, { skill: "Albania", category: "A" }, { skill: "Andorra", category: "A" },
         { skill: "Belarus", category: "B" }, { skill: "Bolivia", category: "B" }, { skill: "Algeria", category: "A" }, { skill: "Angola", category: "A" }
    ];
    $scope.text = "skill";
    $scope.groupby = "category";
});
