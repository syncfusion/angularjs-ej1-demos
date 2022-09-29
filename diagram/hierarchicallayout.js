//Diagram Control
var data = [
{ "Name": "Diagram", "fillColor": "#916DAF" },
{ "Name": "Layout", "Category": "Diagram" },
{ "Name": "Tree Layout", "Category": "Layout" },
{ "Name": "Organizational Chart", "Category": "Layout" },
{ "Name": "Hierarchical Tree", "Category": "Tree Layout" },
{ "Name": "Radial Tree", "Category": "Tree Layout" },
{ "Name": "Mind Map", "Category": "Hierarchical Tree" },
{ "Name": "Family Tree", "Category": "Hierarchical Tree" },
{ "Name": "Management", "Category": "Organizational Chart" },
{ "Name": "Human Resource", "Category": "Management" },
{ "Name": "University", "Category": "Management" },
{ "Name": "Business", "Category": "Management" },
];

//Binds Custom JSON with node
function nodeTemplate(diagram, node) {
    node.labels[0].text = node.Name;
}

//Initializes diagram control
syncApp.controller('diagramCtrl', function ($scope) {
    $scope.tool = ej.datavisualization.Diagram.Tool.SingleSelect;
    $scope.layout = { type: "hierarchicaltree", orientation:"toptobottom", horizontalSpacing: 25, verticalSpacing: 35, marginX: 3, marginY: 3 };
    $scope.defaultSettings = {
        node: {
            constraints: ej.datavisualization.Diagram.NodeConstraints.Select | ej.datavisualization.Diagram.NodeConstraints.PointerEvents, fillColor: "#88C65C", width: 100,
            height: 40, borderColor: "black", borderWidth: 1, labels: [{ name: "label1", fontColor: "white", fontSize: 12, margin: { left: 10, right: 10 } }]
        },
        connector: {
            lineColor: "#000000", constraints: ej.datavisualization.Diagram.ConnectorConstraints.None,
            segments: [{ type: "orthogonal" }]
        }
    };
    $scope.selectedItems = { constraints: ~ej.datavisualization.Diagram.SelectorConstraints.Rotator };
    $scope.selectionChange = "selectionChanged";
    $scope.nodeTemplate = "nodeTemplate";
    $scope.dataSourceSettings = { id: "Name", parent: "Category", dataSource: data };
    $scope.pageSettings = { scrollLimit: "diagram" };
    $scope.snapSettings = { snapConstraints: ej.datavisualization.Diagram.SnapConstraints.None };
    $scope.layoutOrientations=[
        {  text: "Top-Bottom", value: "toptobottom" }, { text: "Left-Right", value: "lefttoright" },
        {  text: "Right-Left", value: "righttoleft" }, { text: "Bottom-Top", value: "bottomtotop" }
    ];
});


$(function(){
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