var ports = [{ name: "in", offset: { x: 0.4, y: 0.01 }, shape: "circle", },
            { name: "inn", offset: { x: 0.6, y: 0.01 }, shape: "circle" }
];
var FlowShapes = ej.datavisualization.Diagram.FlowShapes;
var nodes =
    [
    { name: "node1", width: 90, height: 40, offsetX: 80, offsetY: 90, labels: [{ "text": "Start" }], type: "flow", shape: FlowShapes.Terminator },
    { name: "node2", width: 130, height: 100, offsetX: 260, offsetY: 90, labels: [{ "text": "Already installed the software?" }], type: "flow", shape: FlowShapes.Decision },
    { name: "node3", width: 100, height: 50, offsetX: 440, offsetY: 90, labels: [{ "text": "Show license agreement" }], type: "flow", shape: FlowShapes.Process },
    { name: "node4", width: 110, height: 90, offsetX: 610, offsetY: 90, labels: [{ "text": "Agreed?" }], type: "flow", shape: FlowShapes.Decision },
    { name: "node5", width: 130, height: 100, offsetX: 260, offsetY: 240, labels: [{ "text": "Can \n override existing version?", margin: { left: 10, right: 10, top: 2, bottom: 2 } }], type: "flow", shape: FlowShapes.Decision },
    { name: "node6", width: 90, height: 50, offsetX: 610, offsetY: 240, labels: [{ "text": "Select destination folder" }], type: "flow", shape: FlowShapes.Process },
    { name: "node7", width: 110, height: 90, offsetX: 610, offsetY: 410, labels: [{ "text": "Enough disk space?" }], type: "flow", shape: FlowShapes.Decision },
    { name: "node8", width: 90, height: 50, offsetX: 440, offsetY: 410, labels: [{ "text": "Free Space" }], type: "flow", shape: FlowShapes.Process },
    { name: "node9", width: 90, height: 50, offsetX: 260, offsetY: 410, labels: [{ "text": "Copy files" }], type: "flow", shape: FlowShapes.Process, ports: ports },
    { name: "node10", width: 90, height: 40, offsetX: 80, offsetY: 410, labels: [{ "text": "End" }], type: "flow", shape: FlowShapes.Terminator }
    ];
var addInfo;
var connectors =
    [
    { name: "connector1", sourceNode: "node1", targetNode: "node2" },
    { name: "connector2", sourceNode: "node2", targetNode: "node3", labels: [{ "text": "No", fillColor: "white" }] },
    { name: "connector3", sourceNode: "node3", targetNode: "node4" },
    { name: "connector4", sourceNode: "node4", targetNode: "node10", labels: [{ "text": "No", fillColor: "white", offset: { x: 0.44, y: 0.27 } }], segments: [{ type: "orthogonal", length: 30, direction: "right" }, { type: "orthogonal", length: 80, direction: "bottom" }, { type: "orthogonal", length: 620, direction: "left" }, { type: "orthogonal", length: 220, direction: "bottom" }], addInfo: { segments: [{ type: "orthogonal", length: 30, direction: "right" }, { type: "orthogonal", length: 80, direction: "bottom" }, { type: "orthogonal", length: 620, direction: "left" }, { type: "orthogonal", length: 220, direction: "bottom" }] } },
    { name: "connector5", sourceNode: "node2", targetNode: "node5", labels: [{ "text": "Yes", fillColor: "white", offset: { x: 0.2, y: 0.2 } }] },
    { name: "connector6", sourceNode: "node4", targetNode: "node6", labels: [{ "text": "Yes", fillColor: "white", offset: { x: 0.4, y: 0.2 } }] },
    { name: "connector7", sourceNode: "node6", targetNode: "node7" },
    { name: "connector8", sourceNode: "node7", targetNode: "node8", labels: [{ "text": "No", fillColor: "white" }] },
    { name: "connector9", sourceNode: "node8", targetNode: "node9" },
    { name: "connector10", sourceNode: "node9", targetNode: "node10" },
    { name: "connector11", sourceNode: "node5", targetNode: "node9", labels: [{ "text": "Yes", fillColor: "white", offset: { x: 0.01, y: 0.38 } }], targetPort: "in", segments: [{ type: "orthogonal", length: 20, direction: "left" }, { type: "orthogonal", length: 72, direction: "bottom" }, { type: "orthogonal", length: 20, direction: "right" }], addInfo: { segments: [{ type: "orthogonal", length: 20, direction: "left" }, { type: "orthogonal", length: 72, direction: "bottom" }, { type: "orthogonal", length: 20, direction: "right" }] } },
    { name: "connector12", sourceNode: "node7", targetNode: "node9", labels: [{ "text": "Yes", fillColor: "white", offset: { x: 0.22, y: 0.01 } }], targetPort: "inn", segments: [{ type: "orthogonal", length: 20, direction: "right" }, { type: "orthogonal", length: 97, direction: "top" }, { type: "orthogonal", length: 416, direction: "left" }], addInfo: { segments: [{ type: "orthogonal", length: 20, direction: "right" }, { type: "orthogonal", length: 97, direction: "top" }, { type: "orthogonal", length: 416, direction: "left" }] } }
    ];

syncApp.controller('diagramCtrl', function ($scope) {
        $scope.nodes = nodes;
        $scope.connectors = connectors;
        $scope.height = "500px";
        $scope.width = "800px";
        $scope.enableContextMenu = true;
        $scope.backgroundColor = "whitesmoke";
        $scope.bridgeDirection = "top";
        $scope.scrollSettings = {
            horizontalOffset: 0,
            verticalOffset: 0,
            zoomFactor: 0.2
        };
        $scope.pageSettings = {
            pageBackgroundColor: "transparent"
        };
        $scope.defaultSettings = {
            node: {
                borderColor: "#000000",
                constraints: ej.datavisualization.Diagram.NodeConstraints.Default & ~ej.datavisualization.Diagram.NodeConstraints.Drag,
                fillColor: "#6bbd45", labels: [{ "fontColor": "white", margin: { left: 20, right: 20, top: 2, bottom: 2 } }]
            },
            connector: {
                addInfo: addInfo, cornerRadius: 10,
                segments: [{ "type": "orthogonal" }], lineWidth: 2,
                constraints: ej.datavisualization.Diagram.ConnectorConstraints.Default | ej.datavisualization.Diagram.ConnectorConstraints.Bridging, lineColor: "black"
            }
        };
        $scope.backgroundColorList = [{ text: "Black", value: "Black" }, { text: "WhiteSmoke", value: "whitesmoke" }, { text: "White", value: "White" }, { text: "Goldenrod", value: "Goldenrod" }, { text: "Indigo", value: "Indigo" }, { text: "Chocolate", value: "Chocolate" }, { text: "DarkGoldenRod", value: "DarkGoldenRod" }, { text: "FireBrick", value: "FireBrick" }, { text: "DarkRed", value: "DarkRed" }];
        $scope.bridgeDirectionList = [{ text: "Top", value: "top" }, { text: "Bottom", value: "bottom" }, { text: "Left", value: "left" }, { text: "Right", value: "right" }]
    });



