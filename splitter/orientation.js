

var splitterOutter, splitterInner;
$(function(){
	splitterOutter = $("#outterSpliter").data("ejSplitter");
    splitterInner = $("#innerSpliter").data("ejSplitter");
});


syncApp.controller('SplitterCtrl', function ($scope) {
    $scope.properties1 = [{ paneSize: 60, minSize: 30 }, { minSize: 30 }];
	$scope.properties2 = [{ paneSize: "33%", minSize: 30 }, { paneSize: "33%", minSize: 30 }, {minSize: 30 }];
})

function onOrientationChange(args) {
            switch (args.value) {
                case "vertical":
                    splitterOutter.option("orientation", "horizontal");
                    splitterInner.option("orientation", "vertical");

                    break;
                case "horizontal":
                    splitterOutter.option("orientation", "vertical");
                    splitterInner.option("orientation", "horizontal");
                    break;
            }
        }