
syncApp.controller('ListBoxMultiSelectCtrl', function ($scope) {
    $scope.dataList = [
         { skill: "ASP.NET" }, { skill: "ActionScript" }, { skill: "Basic" },
         { skill: "C++" }, { skill: "C#" }, { skill: "dBase" }, { skill: "Delphi" },
         { skill: "ESPOL" }, { skill: "F#" }, { skill: "FoxPro" }, { skill: "Java" },
         { skill: "J#" }, { skill: "Lisp" }, { skill: "Logo" }, { skill: "PHP" }
    ];
    $scope.text = "skill";
});
