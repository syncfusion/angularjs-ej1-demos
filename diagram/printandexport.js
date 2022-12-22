var scope;
var diagram = null;
var data = [
    { "Id": "parent", "Function": "Project Management", "Color": "#0b4a6b" },
    { "Id": "1", "Function": "R&D Team", "Phase": "parent", "Color": "#3a7582" },
    { "Id": "3", "Function": "Philosophy", "Phase": "1", "Color": "#68a4d7" },
    { "Id": "4", "Function": " Organization", "Phase": "1", "Color": "#68a4d7" },
    { "Id": "5", "Function": "Technology", "Phase": "1", "Color": "#68a4d7" },
    { "Id": "7", "Function": " Funding", "Phase": "1", "Color": "#68a4d7" },
    { "Id": "8", "Function": "Resource Allocation", "Phase": "1", "Color": "#68a4d7" },
    { "Id": "9", "Function": "Targeting", "Phase": "1", "Color": "#68a4d7" },
    { "Id": "11", "Function": "Evaluation", "Phase": "1", "Color": "#68a4d7" },
    { "Id": "156", "Function": "HR Team", "Phase": "parent", "Color": "#9e4c9d" },
    { "Id": "13", "Function": "Recruitment", "Phase": "156", "Color": "#bd80b7" },
    { "Id": "112", "Function": "Employee Relation", "Phase": "156", "Color": "#bd80b7" },
    { "Id": "17", "Function": "Production & Sales Team", "Phase": "parent", "Color": "#22897d" },
    { "Id": "119", "Function": "Design", "Phase": "17", "Color": "#35b482" },
    { "Id": "19", "Function": "Operation", "Phase": "17", "Color": "#35b482" },
    { "Id": "20", "Function": "Support", "Phase": "17", "Color": "#35b482" },
    { "Id": "21", "Function": "Quality Assurance", "Phase": "17", "Color": "#35b482" },
    { "Id": "23", "Function": "Customer Interaction", "Phase": "17", "Color": "#35b482" },
    { "Id": "24", "Function": "Support and Maintanence", "Phase": "17", "Color": "#35b482" },
    { "Id": "25", "Function": "Task Coordination", "Phase": "17", "Color": "#35b482" },
];

//creating the node template
function nodeTemplate(diagram, node) {
    node.labels[0].text = node.Function;
    node.fillColor = node.Color;
}

function diagramcreate() {
    diagram = $("#diagram").ejDiagram("instance");
    $("#export_as_img").ejSplitButton({
        size: "mini",
        showRoundedCorner: true,
        targetID: "imgformatDiv",
        click: click_export_as_img,
        itemSelected: itemSelectedspltbtnitmSelected,
        width: "120px"
    });
    $("#export_svg").ejButton({
        height: "28px",
        click: export_svgclick
    });
    $("#print").ejButton({
        height: "28px",
        click: printclick
    });
}

function printclick(args) {
    diagram = $("#diagram").ejDiagram("instance");
    diagram.print({ pageOrientation: "landscape" });
}

function export_svgclick(args) {
    diagram = $("#diagram").ejDiagram("instance");
    diagram.exportDiagram({
        fileName: "diagram",
        mode: "download",
        format: "svg"
    });
}
function click_export_as_img(args) {
    diagram = $("#diagram").ejDiagram("instance");
    diagram.exportDiagram({ format: args.model.text });
};
function itemSelectedspltbtnitmSelected(args) {
    $("#export_as_img").ejSplitButton({ text: args.ID });
    diagram = $("#diagram").ejDiagram("instance");
    diagram.exportDiagram({ format: args.ID });
};
syncApp.controller('diagramCtrl', function ($scope) {
    $scope.pageSettings = { scrollLimit: "diagram" };
    $scope.tool = ej.datavisualization.Diagram.Tool.ZoomPan;
    $scope.enableContextMenu = false;
    $scope.snapSettings = { snapConstraints: ej.datavisualization.Diagram.SnapConstraints.None };
    $scope.defaultSettings = {
        node: {
            width: 130, height: 40, shape: "rectangle", borderColor: "transparent",
            labels: [
                {
                    name: "label1", fontColor: "#ffffff"
                }
            ]
        },
        connector: { segments: [{ "type": "orthogonal" }], targetDecorator: { shape: "none" }, lineColor: "#003D3D" }
    };
    $scope.layout = {
        type: "organizationalchart",
        orientation: "toptobottom",
        marginX: 50,
        marginY: 50,
        horizontalSpacing: 30,
        verticalSpacing: 30,
        fixedNode: ""
    }
    $scope.nodeTemplate = nodeTemplate;
    $scope.dataSourceSettings = {
        id: "Id", parent: "Phase",
        //specifies the dataSource
        dataSource: data,
        root: "parent"
    },
    $.root = "1";
    $scope.layoutOrientations = [
        { text: "Top-Bottom", value: "toptobottom" }, { text: "Left-Right", value: "lefttoright" },
        { text: "Right-Left", value: "righttoleft" }, { text: "Bottom-Top", value: "bottomtotop" }
    ];
    $scope.rootList = [
        { text: "Project Management", value: "parent" }, { text: "R&D Team", value: "1" },
        { text: "HR Team", value: "156" }, { text: "Production & Sales Team", value: "17" }
    ];
});

