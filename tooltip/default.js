
          syncApp.controller('DropDownCtrl', function ($scope) {
               $scope.content = "ECMAScript (or ES) is a trademarked scripting-language specification standardized by Ecma International in ECMA-262 and ISO/IEC 16262.";
               $scope.width = "30%";
               $scope.www = "The World Wide Web (WWW) is an information space where documents and other web resources are identified by URLs, interlinked by hypertext links, and can be accessed via the Internet.";
               $scope.widthWWW = "40%";
               $scope.position = {
                   stem: {
                       horizontal: "left",
                       vertical: "center"
                   },
                   target: {
                       horizontal: "right",
                       vertical: "center",
                   },
               };
               $scope.objLanguage = "Object-oriented programming (OOP) is a programming language model organized around objects rather than 'actions' and data rather than logic.";
               $scope.widthObj = "35%";
               $scope.positionObj = {
                   stem: {
                       horizontal: "right",
                       vertical: "center"
                   },
                   target: {
                       horizontal: "left",
                       vertical: "center",
                   },
               };

           });