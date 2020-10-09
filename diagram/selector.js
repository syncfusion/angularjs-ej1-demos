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
    $scope.selectedItems = {
        offsetX: 0,
        offsetY: 0,
        width: 0,
        height: 0,
        rotateAngle: 0
    };
    $scope.nodes = datalist;
});

function selectionChange(args){
    if (args.selectedItems.length >= 1) {
        
    }
    else{
        
    }
    
}