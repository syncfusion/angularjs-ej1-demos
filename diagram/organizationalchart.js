//Diagram Control
var data = [
{ "Id": "parent", "Function": "Project Management" },
{ "Id": "1", "Function": "R&D Team", "Phase": "parent" },
{ "Id": "2", "Function": "HR Team", "Phase": "parent" },
{ "Id": "3", "Function": "Sales Team", "Phase": "parent" },
{ "Id": "4", "Function": "Philosophy", "Phase": "1" },
{ "Id": "5", "Function": " Organization", "Phase": "1" },
{ "Id": "6", "Function": "Technology", "Phase": "1" },
{ "Id": "7", "Function": " Funding", "Phase": "1" },
{ "Id": "8", "Function": "Resource", "Phase": "1" },
{ "Id": "9", "Function": "Targeting", "Phase": "1" },
{ "Id": "10", "Function": "Evaluation", "Phase": "1" },
{ "Id": "11", "Function": "Recruitment", "Phase": "2" },
{ "Id": "12", "Function": "Relation", "Phase": "2" },
{ "Id": "13", "Function": "Design", "Phase": "3" },
{ "Id": "14", "Function": "Operation", "Phase": "3" },
{ "Id": "15", "Function": "Support", "Phase": "3" },
{ "Id": "16", "Function": "Quality", "Phase": "3" },
{ "Id": "17", "Function": "Interaction", "Phase": "3" },
{ "Id": "18", "Function": "Support", "Phase": "3" },
{ "Id": "19", "Function": "Coordination", "Phase": "3" }
];

var addInfo = { orientation: "vertical", type: "alternate" };

//Binds Custom JSON with node
function nodeTemplate(diagram, node) {
    node.labels[0].text = node.Function;
    node.fillColor = node.Color;
    if (node.Id == "parent") { node.fillColor = "#3484bb"; }
    if (node.Phase == "parent") { node.fillColor = "#9ace7f"; }
    if (node.Phase == "1") { node.fillColor = "#9264aa"; }
    if (node.Phase == "2") { node.fillColor = "#9264aa"; }
    if (node.Phase == "3") { node.fillColor = "#9264aa"; }
}

function getLayoutInfo(diagram, node, options) {
    if (!options.hasSubTree) {
        options.orientation = node.addInfo.orientation;
        options.type = node.addInfo.type;

    }
}


//Initializes diagram control
syncApp.controller('diagramCtrl', function ($scope) {
    $scope.tool = ej.datavisualization.Diagram.Tool.SingleSelect;
    $scope.layout = {
        type: "organizationalchart", orientation: "toptobottom", horizontalSpacing: 25, verticalSpacing: 35,
        marginX: 3, marginY: 3, getLayoutInfo: getLayoutInfo
    };
    $scope.defaultSettings = {
        node: {
            constraints: ej.datavisualization.Diagram.NodeConstraints.Select | ej.datavisualization.Diagram.NodeConstraints.PointerEvents, fillColor: "#88C65C", width: 100,
            height: 40, borderColor: "black", borderWidth: 1, labels: [{ name: "label1", fontColor: "white", fontSize: 12, margin: { left: 10, right: 10 } }]
        },
        connector: {
            lineColor: "#000000", segments: [{ type: "orthogonal" }], targetDecorator: { shape: "none" },
            constraints: ej.datavisualization.Diagram.ConnectorConstraints.None
        }
    };
    $scope.selectedItems = { constraints: ~ej.datavisualization.Diagram.SelectorConstraints.Rotator };
    $scope.selectionChange = "selectionChanged";
    $scope.nodeTemplate = "nodeTemplate";
    $scope.dataSourceSettings = { id: "Id", parent: "Phase", dataSource: data };
    $scope.pageSettings = { scrollLimit: "diagram" };
    $scope.snapSettings = { snapConstraints: ej.datavisualization.Diagram.SnapConstraints.None };
    $scope.layoutOrientations = [
        { text: "Top-Bottom", value: "toptobottom" }, { text: "Left-Right", value: "lefttoright" },
        { text: "Right-Left", value: "righttoleft" }, { text: "Bottom-Top", value: "bottomtotop" }
    ];
});


$(function () {
    $("#hide").hide();
});
//end region

//region helper methods
function selectionChanged(args) {
    if (args.selectedItems.length == 1) {
        $("#hide").show();
        $("#expand").ejCheckBox({
            "checked": args.selectedItems[0].isExpanded ? true : false
        });
    }
    else {
        $("#hide").hide();
    }
}

function onChange(args) {
    var diagram = $("#diagram").ejDiagram("instance");
    if (diagram.model.selectedItems.children.length != 0)
        diagram.updateNode(diagram.model.selectedItems.children[0].name, { isExpanded: args.isChecked ? true : false })
}
//end region