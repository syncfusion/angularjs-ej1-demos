var obj = [
              { "Day": 1, "John": 57, "Hendry": 43 },
              { "Day": 2, "John": 73, "Hendry": 27 },
              { "Day": 3, "John": 49, "Hendry": 51 },
              { "Day": 4, "John": 63, "Hendry": 37 },
              { "Day": 5, "John": 44, "Hendry": 56 },
              { "Day": 6, "John": 49, "Hendry": 51 },
              { "Day": 7, "John": 61, "Hendry": 39 },
              { "Day": 8, "John": 35, "Hendry": 65 },
              { "Day": 9, "John": 45, "Hendry": 55 },
              { "Day": 10, "John": 37, "Hendry": 63 }
];
syncApp.controller('ChartCtrl', function ($scope) {
    $scope.xZoomFactor = 0.1;
    $scope.yZoomFactor = 0.1;
    $scope.xZoomPosition = 0.5;
    $scope.yZoomPosition = 0.5;
    $scope.dataSource = obj;
    $scope.enable = true;
    $scope.johnVisibilty = "visible";
    $scope.hendryVisibilty = "hidden";
    $scope.onchartload = "load";
});

function load(sender) {
    if (!ej.util.isNullOrUndefined(window.orientation)) {    	//to modify chart properties for mobile view
        var model = sender.model,
		seriesLength = model.series.length;
        model.title.enableTrim = true;
        model.elementSpacing = 5;
        model.size.height = null;
        model.size.width = null;
        model.primaryXAxis.labelIntersectAction = "rotate45";
        model.primaryXAxis.title.text = "";
        model.primaryXAxis.edgeLabelPlacement = "hide";
        model.primaryYAxis.labelIntersectAction = "rotate45";
        model.primaryYAxis.title.text = "";
        model.primaryYAxis.edgeLabelPlacement = "hide";
        
    }
}
$("#xZoomFactor").keyup(function () {
    var txtval = parseInt(document.getElementById("xZoomFactor").value);
    if (txtval > 1) {
        document.getElementById("xZoomFactor").value = 1;
        $("#Chart").ejChart("option", { primaryXAxis: { "zoomFactor": 1 } });
    }
    else if (txtval < 0) {
        document.getElementById("xZoomFactor").value = 0;
        $("#Chart").ejChart("option", { primaryXAxis: { "zoomFactor": 0 } });
    }
});
$("#xZoomPosition").keyup(function () {
    var txtval = parseInt(document.getElementById("xZoomPosition").value);
    if (txtval > 1) {
        document.getElementById("xZoomPosition").value = 1;
        $("#Chart").ejChart("option", { primaryXAxis: { "ZoomPosition": 1 } });
    }
    else if (txtval < 0) {
        document.getElementById("xZoomPosition").value = 0;
        $("#Chart").ejChart("option", { primaryXAxis: { "ZoomPosition": 0 } });
    }
});
$("#yZoomFactor").keyup(function () {
    var txtval = parseInt(document.getElementById("yZoomFactor").value);
    if (txtval > 1) {
        document.getElementById("yZoomFactor").value = 1;
        $("#Chart").ejChart("option", { primaryXAxis: { "zoomFactor": 1 } });
    }
    else if (txtval < 0) {
        document.getElementById("yZoomFactor").value = 0;
        $("#Chart").ejChart("option", { primaryXAxis: { "zoomFactor": 0 } });
    }
});
$("#yZoomPosition").keyup(function () {
    var txtval = parseInt(document.getElementById("yZoomPosition").value);
    if (txtval > 1) {
        document.getElementById("yZoomPosition").value = 1;
        $("#Chart").ejChart("option", { primaryXAxis: { "ZoomPosition": 1 } });
    }
    else if (txtval < 0) {
        document.getElementById("yZoomPosition").value = 0;
        $("#Chart").ejChart("option", { primaryXAxis: { "ZoomPosition": 0 } });
    }
});