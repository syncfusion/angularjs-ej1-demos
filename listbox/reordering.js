
syncApp.controller('ListBoxReorderingCtrl', function ($scope) {
    $scope.dataList = [
         { skill: "ASP.NET" }, { skill: "ActionScript" }, { skill: "Basic" },
         { skill: "C++" }, { skill: "C#" }, { skill: "dBase" }, { skill: "Delphi" },
         { skill: "ESPOL" }, { skill: "F#" }, { skill: "FoxPro" }, { skill: "Java" },
         { skill: "J#" }, { skill: "Lisp" }, { skill: "Logo" }, { skill: "PHP" }
    ];
    $scope.text = "skill";
    $scope.Moveup = function (e) {
        var target = $('#selectskills').data("ejListBox");
        target.moveUp();
    }
    $scope.Movedown = function (e) {
        var target = $('#selectskills').data("ejListBox");
        target.moveDown();
    }
});
