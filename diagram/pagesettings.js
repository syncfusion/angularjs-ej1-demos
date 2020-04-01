var datalist = [
        { name: "node1", height: 60, width: 60, offsetX: 170, offsetY: 105, borderWidth: 1, borderColor: "#99SF13", shape: "ellipse", gradient: { type: "radial", cx: 50, cy: 50, fx: 50, fy: 50, stops: [{ offset: 0, color: "white", opacity: 0 }, { offset: 100, color: "#FBB040", opacity: 1 }] } },
        { name: "node2", height: 90, width: 60, offsetX: 240, offsetY: 105, borderWidth: 1, borderColor: "#8BB23F", shape: "ellipse", gradient: { type: "radial", cx: 50, cy: 50, fx: 50, fy: 50, stops: [{ offset: 0, color: "white", opacity: 0 }, { offset: 100, color: "#A0D05F", opacity: 1 }] } },
        { name: "node3", height: 120, width: 60, offsetX: 310, offsetY: 105, borderWidth: 1, borderColor: "#27A9CC", shape: "ellipse", gradient: { type: "radial", cx: 50, cy: 50, fx: 50, fy: 50, stops: [{ offset: 0, color: "white", opacity: 0 }, { offset: 100, color: "#7FDEFF", opacity: 1 }] } },
        { name: "node4", height: 90, width: 60, offsetX: 160, offsetY: 255, borderWidth: 1, borderColor: "#99SF13", shape: "ellipse", gradient: { type: "radial", cx: 50, cy: 50, fx: 50, fy: 50, stops: [{ offset: 0, color: "white", opacity: 0 }, { offset: 100, color: "#FBB040", opacity: 1 }] } },
        { name: "node5", height: 90, width: 90, offsetX: 240, offsetY: 255, borderWidth: 1, borderColor: "#8BB23F", shape: "ellipse", gradient: { type: "radial", cx: 50, cy: 50, fx: 50, fy: 50, stops: [{ offset: 0, color: "white", opacity: 0 }, { offset: 100, color: "#A0D05F", opacity: 1 }] } },
        { name: "node6", height: 90, width: 60, offsetX: 320, offsetY: 255, borderWidth: 1, borderColor: "#27A9CC", shape: "ellipse", gradient: { type: "radial", cx: 50, cy: 50, fx: 50, fy: 50, stops: [{ offset: 0, color: "white", opacity: 0 }, { offset: 100, color: "#7FDEFF", opacity: 1 }] } },
        { name: "node7", height: 60, width: 90, offsetX: 165, offsetY: 400, borderWidth: 1, borderColor: "#99SF13", shape: "ellipse", gradient: { type: "radial", cx: 50, cy: 50, fx: 50, fy: 50, stops: [{ offset: 0, color: "white", opacity: 0 }, { offset: 100, color: "#FBB040", opacity: 1 }] } },
        { name: "node8", height: 60, width: 90, offsetX: 240, offsetY: 400, borderWidth: 1, borderColor: "#8BB23F", shape: "ellipse", gradient: { type: "radial", cx: 50, cy: 50, fx: 50, fy: 50, stops: [{ offset: 0, color: "white", opacity: 0 }, { offset: 100, color: "#A0D05F", opacity: 1 }] } },
        { name: "node9", height: 60, width: 90, offsetX: 315, offsetY: 400, borderWidth: 1, borderColor: "#27A9CC", shape: "ellipse", gradient: { type: "radial", cx: 50, cy: 50, fx: 50, fy: 50, stops: [{ offset: 0, color: "white", opacity: 0 }, { offset: 100, color: "#7FDEFF", opacity: 1 }] } },


        { name: "node10", height: 40, width: 90, offsetX: 240, offsetY: 170, fillColor: "transparent", borderWidth: 1, borderColor: "transparent", labels: [{ name: "label1", text: "Same Width" }], constraints: ej.datavisualization.Diagram.NodeConstraints.Default & ~ej.datavisualization.Diagram.NodeConstraints.Select },
        { name: "node11", height: 40, width: 90, offsetX: 240, offsetY: 320, fillColor: "transparent", borderWidth: 1, borderColor: "transparent", labels: [{ name: "label1", text: "Same Height" }], constraints: ej.datavisualization.Diagram.NodeConstraints.Default & ~ej.datavisualization.Diagram.NodeConstraints.Select },
        { name: "node12", height: 40, width: 90, offsetX: 240, offsetY: 450, fillColor: "transparent", borderWidth: 1, borderColor: "transparent", labels: [{ name: "label1", text: "Same Size" }], constraints: ej.datavisualization.Diagram.NodeConstraints.Default & ~ej.datavisualization.Diagram.NodeConstraints.Select },
];

syncApp.controller('diagramCtrl', function ($scope) {
    $scope.backgroundColor = "whitesmoke";
    $scope.pageSettings = {
        pageWidth: 500,
        pageHeight: 500,
        pageBackgroundColor: "White",
        multiplePage: true,
        pageBorderWidth: 1,
        pageBorderColor: "Black",
        pageMargin: 20,
        showPageBreak: true,
        pageOrientation: "landscape",
        scrollLimit: "diagram",
        enableSnapToObject: true,
    };
    $scope.snapSettings = {
        enableSnapToObject: true,
        snapObjectDistance: 10,
        snapAngle: 1,
    };
    $scope.pvalue = 400;
    $scope.nodes = datalist;
    $scope.pageStyle = [{  text: "portrait", value: "portrait" }, { text: "landscape", value: "landscape" }, ];
    $scope.pageColor = [{ text: "Black", value: "Black" }, { text: "White", value: "White" }, { text: "Goldenrod", value: "Goldenrod" }, { text: "Indigo", value: "Indigo" }, { text: "Chocolate", value: "Chocolate" }, { text: "DarkGoldenRod", value: "DarkGoldenRod" }, { text: "FireBrick", value: "FireBrick" }, { text: "DarkRed", value: "DarkRed" }];
    $scope.create = function(){
        var diagram = $("#diagramCore").ejDiagram("instance");
        diagram.fitToPage(null, null, { left: 0, right: 0, top: 0, bottom: 0 });
    }
});


         
