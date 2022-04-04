var pathData = "M 120 24.9999 C 120 38.8072 109.642 50 96.8653 50 L 23.135" +
    " 50 C 10.3578 50 0 38.8072 0 24.9999 L 0 24.9999 C" +
    "0 11.1928 10.3578 0 23.135 0 L 96.8653 0 C 109.642 0 120 11.1928 120 24.9999 Z";
var palettes = [
{
    name: "Flow Shapes", expanded: true, templateId: "svgTemplate", addInfo: { source: "content/images/flow.PNG" },
    items: [
    { name: "Process", width: 44, height: 40, offsetX: 20, offsetY: 20, fillColor: "white", borderWidth: 1, type: "flow", shape: ej.datavisualization.Diagram.FlowShapes.Process },
                { name: "Decision", width: 44, height: 40, offsetX: 20, offsetY: 20, fillColor: "white", borderWidth: 1, type: "flow", shape: ej.datavisualization.Diagram.FlowShapes.Decision },
                { name: "Sort", width: 44, height: 40, offsetX: 20, offsetY: 20, fillColor: "white", borderWidth: 1, type: "flow", shape: ej.datavisualization.Diagram.FlowShapes.Sort },
                { name: "Document", width: 44, height: 40, offsetX: 20, offsetY: 15, fillColor: "white", borderWidth: 1, type: "flow", shape: ej.datavisualization.Diagram.FlowShapes.Document },
                { name: "MultiDocument", width: 43, height: 40, offsetX: 20, offsetY: 15, fillColor: "white", borderWidth: 1, type: "flow", shape: ej.datavisualization.Diagram.FlowShapes.MultiDocument },
    ]
},
{
    name: "Connectors", expanded: true, templateId: "svgTemplate", addInfo: { source: "content/images/connector.PNG" },
    items: [
    { name: "Link1", segments: [{ type: "orthogonal" }], sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 40, y: 40 }, targetDecorator: { shape: "arrow" }, paletteItem: { height: 45, width: 57, enableScale: false } },
    { name: "link2", segments: [{ type: "orthogonal" }], sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 40, y: 40 }, targetDecorator: { shape: "none" }, paletteItem: { height: 45, width: 57, enableScale: false } },
    { name: "Link3", segments: [{ type: "straight" }], sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 40, y: 40 }, targetDecorator: { shape: "arrow" }, paletteItem: { height: 45, width: 57, enableScale: false } },
    { name: "Link4", segments: [{ type: "straight" }], sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 40, y: 40 }, targetDecorator: { shape: "none" }, paletteItem: { height: 45, width: 57, enableScale: false } },
    ],
},
{
    name: "Basic Shapes", expanded: true, templateId: "svgTemplate", addInfo: { source: "content/images/basic.PNG" },
    items: [
        { name: "Rectangle", width: 80, height: 160, paletteItem: { enableScale: false, margin: { left: 4, right: 4, top: 12, bottom: 10 } }, fillColor: "white", borderWidth: 1, type: "basic", shape: "rectangle" },
        { name: "Rectangle", width: 70, height: 70, fillColor: "white", borderWidth: 1.5, type: "basic", shape: "rectangle" },
        { name: "Ellipse", width: 70, height: 70, fillColor: "white", borderWidth: 1.5, type: "basic", shape: "ellipse" },
        { name: "Hexagon", width: 70, height: 70, fillColor: "white", borderWidth: 1.5, type: "basic", shape: "polygon", points: [{ x: 25, y: 0 }, { x: 75, y: 0 }, { x: 100, y: 50 }, { x: 75, y: 100 }, { x: 25, y: 100 }, { x: 0, y: 50 }] },
        { name: "Triangle", width: 70, height: 70, fillColor: "white", borderWidth: 1.5, type: "basic", shape: "polygon", points: [{ x: 50, y: 0 }, { x: 100, y: 100 }, { x: 0, y: 100 }] },
    ]
}
];




syncApp.controller('diagramCtrl', function ($scope) {
    $scope.palettes = palettes;
    $scope.selectedPalette = [
      { text: "Basic Shapes", value: "Basic Shapes" }, { text: "Flow Shapes", value: "Flow Shapes" },
      { text: "Connectors", value: "Connectors" }
    ];
    $scope.selectedPaletteName = "Flow Shapes";
    $scope.headerHeight = 30;
    $scope.showPaletteItemText = false;
});


  
$("#headervisibility").ejCheckBox({ size: "small", change: change });
$("#headerinteraction").ejCheckBox({ size: "small", change: change });
$("#visiblepalette").ejCheckBox({ size: "small", change: change });
$("#itemtext").ejCheckBox({ size: "small", change: change });
var preventChange = false;
function change(args) {
    symbolpalette = $("#symbolpalette").ejSymbolPalette("instance");
    if (!preventChange && symbolpalette.activePalette && args && args.model) {
        switch (args.model.id) {
            case "headervisibility":
                symbolpalette.updatePalette(symbolpalette.activePalette.name, { constraints: symbolpalette.activePalette.constraints ^ ej.datavisualization.Diagram.PaletteConstraints.HeaderVisibility });
                break;
            case "headerinteraction":
                symbolpalette.updatePalette(symbolpalette.activePalette.name, { constraints: symbolpalette.activePalette.constraints ^ ej.datavisualization.Diagram.PaletteConstraints.Expandable });
                break;
            case "visiblepalette":
                symbolpalette.updatePalette(symbolpalette.activePalette.name, { constraints: symbolpalette.activePalette.constraints ^ ej.datavisualization.Diagram.PaletteConstraints.Visible });
                break;
        }
        if (args.model.id == "itemtext") {
            symbolpalette.showPaletteItemText(!symbolpalette.model.showPaletteItemText)
        }
    }
}


$('#selectedpalette').ejDropDownList({
    targetID: "palettelist",
    watermarkText: "Flow Shapes",
    width: "100%", selectedIndex: 1,
    change: function (args) {
        if (args && args.selectedValue)
            $("#symbolpalette").ejSymbolPalette({ selectedPaletteName: args.selectedValue });
        preventChange = true;
        $("#itemtext").ejCheckBox({ checked: symbolpalette.model.showPaletteItemText ? "checked" : "" });
        var constraints = symbolpalette.activePalette.constraints & ej.datavisualization.Diagram.PaletteConstraints.HeaderVisibility;
        $("#headervisibility").ejCheckBox({ checked: constraints ? "checked" : "" });
        constraints = symbolpalette.activePalette.constraints & ej.datavisualization.Diagram.PaletteConstraints.Visible;
        $("#visiblepalette").ejCheckBox({ checked: constraints ? "checked" : "" });
        constraints = symbolpalette.activePalette.constraints & ej.datavisualization.Diagram.PaletteConstraints.Expandable;
        $("#headerinteraction").ejCheckBox({ checked: constraints ? "checked" : "" });
        preventChange = false;
    }
});