var skillset = [
                { skill: "ASP.NET" }, { skill: "ActionScript" }, { skill: "Basic" },
                { skill: "C++" }, { skill: "C#" }, { skill: "dBase" }, { skill: "Delphi" },
                { skill: "ESPOL" }, { skill: "F#" }, { skill: "FoxPro" }, { skill: "Java" },
                { skill: "J#" }, { skill: "Lisp" }, { skill: "Logo" }, { skill: "PHP" }
            ];

syncApp.controller('DropDownCtrl', function ($scope) {
        $scope.dataList = skillset;
        $scope.fields = {"text": "skill"};
        $scope.width = "100%";
	$scope.watermarkText= "Select a skill";
	$scope.multiSelect= "visualmode";
    });
