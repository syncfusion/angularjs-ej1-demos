var margin = { "left": 20, "top": 0, "right": 20, "bottom": 0 };
var FlowShapes = ej.datavisualization.Diagram.FlowShapes;
var nodes =
    [
        { name: "NewIdea", width: 150, height: 60, offsetY: 60, labels: [{ "text": "Start Terminator", "fontColor": "white" }],type:"flow",shape: FlowShapes.Terminator },
        { name: "Meeting", width: 150, height: 60, offsetY: 165,  labels: [{ "text": "Progress"}],type:"flow",shape: FlowShapes.Process  },
        { name: "BoardDecision", width: 150, height: 100,  offsetY: 285, labels: [{ text: "Decision" }], type:"flow",shape: FlowShapes.Decision  },
        { name: "Data", width: 150, height: 100,  offsetY: 425,  labels: [{ "text": "Data"}],type:"flow",shape: FlowShapes.Data  },
        { name: "Document", width: 150, height: 60,  offsetY: 545,  labels: [{ "text": "Document" }],type:"flow",shape: FlowShapes. Document   },
        { name: "End", width: 150, height: 60, offsetY: 650, labels: [{ "text": "End Terminator" }],type:"flow",shape: FlowShapes.Terminator} ];
    
    var connectors = [
        { name: "connector1", sourceNode: "NewIdea", targetNode: "Meeting" },
        { name: "connector2", sourceNode: "Meeting", targetNode: "BoardDecision" },
        { name: "connector3", sourceNode: "BoardDecision", targetNode: "Data", labels: [{ "text": "Yes" }] },
        { name: "connector4", sourceNode: "Data", targetNode: "Document", labels: [{ "text": "" }] },
        { name: "connector5", sourceNode: "Document", targetNode: "End", labels: [{ "text": "" }] },
        { name: "connector6", sourceNode:"BoardDecision" , targetNode:"Meeting" , segments: [{ "type": "orthogonal", length: 50, direction: "right" }], labels: [{ "text": "No", horizontalAlignment: "left" }], sourceDecorator: { shape: "none", }, targetDecorator: { shape: "arrow" } },
];

syncApp.controller('diagramCtrl', function ($scope) {
    $scope.nodes = nodes;
    $scope.connectors = connectors;
    $scope.pageSettings = { scrollLimit: "diagram" };
    $scope.defaultSettings = {
        node: { offsetX: 340, borderColor: "#1BA0E2", fillColor: "darkcyan", labels: [{ "fontColor": "white" }] },
        connector: { targetDecorator: { shape: "arrow", borderColor: "#606060", width: "10", height: "10" }, segments: [{ "type": "orthogonal" }], lineWidth: 2, lineColor: "#606060", labels: [{ "fillColor": "white", "fontColor": "black" }] }
    };
    $scope.locale = "en-US";
    $scope.localeText = ["en-US", "de-DE", "es-ES"];
});

$(function(){
    $("#language").ejDropDownList({ width: "100px",enableFilterSearch:true, change: "Change" }).ejDropDownList("option", "selectedItemIndex", 0);    
});

function Change(args) {
    $("#DiagramContent").ejDiagram({
     "locale": args.value   
    });
}

ej.datavisualization.Diagram.Locale["es-ES"] = {
    cut: "Corte",
    copy: "Copia",
    paste: "Pasta",
    undo: "Deshacer",
    redo: "Rehacer",
    selectAll: "Seleccionar todo",
    grouping: "Agrupación",
    group: "Grupo",
    ungroup: "Desagrupar",
    order: "Fin",
    bringToFront: "Traer a delante",
    moveForward: "Movimiento adelante",
    sendToBack: "Enviar a espalda",
    sendBackward: "Enviar hacia atrás"

};
ej.datavisualization.Diagram.Locale["de-DE"] = {
    cut: "Schnitt",
    copy: "Kopie",
    paste: "Klebstoff",
    undo: "Rückgängig ",
    redo: "Rehacer",
    selectAll: "Wählen alle",
    grouping: "Gruppierung",
    group: "Gruppe",
    ungroup: "Aufheben",
    order: "Bestellen",
    bringToFront: "Bringen zu Front",
    moveForward: "Umzug vorwärts",
    sendToBack: "Senden zu zurück",
    sendBackward: "Senden rückwärts"

};
