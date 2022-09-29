var fontfamily = ["Segoe UI", "Arial", "Times New Roman", "Tahoma", "Helvetica"],
          fontsize = ["1pt", "2pt", "3pt", "4pt", "5pt"],
          action1 = ["New", "Clear"],
          action2 = ["Bold", "Italic", "Underline", "strikethrough", "superscript", "subscript", "JustifyLeft", "JustifyCenter", "JustifyRight", "JustifyFull", "Undo", "Redo"];

syncApp.controller('RibbonCtrl', function ($scope,  $rootScope) {
    $scope.fontlist = fontfamily;
    $scope.fontsize = fontsize;
    $scope.action1 = action1;
    $scope.action2 = action2;
	$scope.backstage = {
        type: ej.Ribbon.ApplicationTabType.Backstage,
        backstageSettings: {
            text: "FILE", height: 350, width: 1000, headerWidth: 120, pages: [
            { id: "info", text: "Info", contentID: "infoCon", itemType: ej.Ribbon.ItemType.Tab },
			 { id: "new", text: "New", contentID: "newCon", itemType: ej.Ribbon.ItemType.Tab },
            { id: "close", text: "Close", enableSeparator: true, itemType: ej.Ribbon.ItemType.Button },
            { id: "account", text: "Office Account", contentID: "accountCon" }
            ]
        }
    }
});




function createControl(args) {
            var languages = [
                    "ActionScript", "AppleScript", "ASP", "BASIC",
                    "C", "C++", "Clojure", "COBOL", "ColdFusion",
                    "Erlang", "Fortran", "Groovy", "Haskell",
                    "Java", "JavaScript", "Lisp", "Perl", "PHP",
                    "Python", "Ruby", "Scala", "Scheme"
            ];
			$("#spltbutton1").ejSplitButton({
                size: "large",
                showRoundedCorner: false,
                targetID: "Ul51",
				buttonMode: "dropdown",
				contentType: "textandimage",
				imagePosition: "imagetop",
                prefixIcon: "e-protect e-newpageicon",
				arrowPosition:"bottom",
				height: 90,
                width: 100
            });
			$('#autocomplete').ejAutocomplete({
			    showPopupButton: true,
                width: 450,
				watermarkText:"Search for online templates",
                dataSource: languages
            });
			$("#spltbutton2").ejSplitButton({
                size: "large",
                showRoundedCorner: false,
                targetID: "Ul52",
				contentType: "textandimage",
				imagePosition: "imagetop",
                prefixIcon: "e-check e-newpageicon",
				buttonMode: "dropdown",
				arrowPosition:"bottom",
				height: 90,
                width: 100
            });
			$("#spltbutton3").ejSplitButton({
                size: "large",
                showRoundedCorner: false,
                targetID: "Ul53",
				contentType: "textandimage",
				imagePosition: "imagetop",
                prefixIcon: "e-version e-newpageicon",
				buttonMode: "dropdown",
				arrowPosition:"bottom",
				height: 90,
                width: 100
            });
			$("#btnlast").ejButton({
                size: "large",
                showRoundedCorner: false,
				contentType: "textandimage",
				imagePosition: "imagetop",
                prefixIcon: "e-browser e-newpageicon",
				arrowPosition:"bottom",
				height: 100,
                width: 100
            });
			$("#btn1").ejButton({
                size: "large",
				height:200,
				width:225,
				contentType: "textandimage",
				imagePosition: "imagetop",
                prefixIcon: "e-blank e-infopageicon"
            });
            $("#btn2").ejButton({
                size: "large",
				height:200,
				width:225,
				contentType: "textandimage",
				imagePosition: "imagetop",
                prefixIcon: "e-project e-infopageicon"
            });
            $("#btn3").ejButton({
                size: "lerge",
				height:200,
				width:225,
				contentType: "textandimage",
				imagePosition: "imagetop",
                prefixIcon: "e-gantt e-infopageicon"
            });
			$("#btn4").ejButton({
                size: "large",
				height:200,
				width:225,
				contentType: "textandimage",
				imagePosition: "imagetop",
                prefixIcon: "e-diet e-infopageicon"
            });
            $("#btn5").ejButton({
                size: "lerge",
				height:200,
				width:225,
				contentType: "textandimage",
				imagePosition: "imagetop",
                prefixIcon: "e-sales e-infopageicon"
            });
			
			$('#background').ejDropDownList({
                targetID: "backgroundList",
                width: "200px",
				text:"No Background"
            });
			$('#theme').ejDropDownList({
                targetID: "themeList",
                width: "200px",
				text:"White"
            });
        }
       
