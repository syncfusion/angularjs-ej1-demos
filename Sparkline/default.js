if (!!window.SVGSVGElement) {
    $("#sparkline").css('visibility', 'visible');
    size = { height: 40, width: 170 };
    var cdata = [2, 6, -1, 1, 12, 5, -2, 7, -3, 5, 8, 10, ],
    strokeWidth = 0.4,
    negativeColor = "red",
    highColor = "blue",
    ctype = "column",
    cheight = 100, cwidth = 150;


    syncApp.controller("sparkline", function ($scope) {
        $scope.lheight = size.height;
        $scope.lwidth = size.width;
        $scope.cdata = cdata;
        $scope.ctype = ctype;

        $scope.negativeColor = negativeColor;
        $scope.cheight = cheight;
        $scope.cwidth = cwidth;
        $scope.strokeWidth = strokeWidth;
        $scope.colorValue = "#ff14ae";
        $scope.low = "#138808";
        $scope.rangeColor = "#712002",
        $scope.opacity = "100";
        $scope.modelType = "picker";


        $scope.value = 5;
        $scope.value2 = 7;
        $scope.width = "100%";
    });
}
else {
    $("#sparkline").css('visibility', 'hidden');
    alert("Sparkline will not be supported in IE Version < 9");
}