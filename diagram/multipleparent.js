//Diagram Control
var data = [
{ "Name": "Customer Support", "fillColor": "#0f688d" },
        { "Name": "OEM Support", "fillColor": "#0f688d" },
        { "Name": "Customer Care", "ReportingPerson": ["Customer Support", "OEM Support"], "fillColor": "#14ad85" },
        { "Name": "Central Region", "fillColor": "#0f688d" },
        { "Name": "Eastern Region", "fillColor": "#0f688d" },
        { "Name": "ServiceCare", "ReportingPerson": ["Central Region", "Eastern Region"], "fillColor": "#14ad85" },
        { "Name": "National Channel Marketing", "fillColor": "#0f688d" },
        { "Name": "Retail Channel Marketing", "fillColor": "#0f688d" },
		{ "Name": "Channel Marketing", "ReportingPerson": ["National Channel Marketing", "Retail Channel Marketing"], "fillColor": "#14ad85" },
        { "Name": "Northern Region", "fillColor": "#0f688d" },
        { "Name": "Western Region", "fillColor": "#0f688d" },
		{ "Name": "Channel Field Sales", "ReportingPerson": ["Northern Region", "Western Region"], "fillColor": "#14ad85" },
        { "Name": "Customer", "ReportingPerson": ["Customer Care", "ServiceCare"], "fillColor": "#0aa6ce" },
        { "Name": "SalesMan", "ReportingPerson": ["Channel Marketing", "Channel Field Sales"], "fillColor": "#0aa6ce" },
        { "Name": "Adventure Work Cycle", "ReportingPerson": ["Customer", "SalesMan"], "fillColor": "#f16f62" },
];

//Binds Custom JSON with node
function nodeTemplate(diagram, node) {
    node.labels[0].text = node.Name;
}



//Initializes diagram control
syncApp.controller('diagramCtrl', function ($scope) {
    $scope.tool = ej.datavisualization.Diagram.Tool.SingleSelect;
    $scope.layout = { type: "hierarchicaltree", horizontalSpacing: 25, verticalSpacing: 35, marginX: 3, marginY: 50 };
    $scope.defaultSettings = {
        node: {
            constraints: ej.datavisualization.Diagram.NodeConstraints.Select | ej.datavisualization.Diagram.NodeConstraints.PointerEvents, fillColor: "#88C65C", width: 120,
            height: 50, borderColor: "#5e5e5e", borderWidth: 1, labels: [{ name: "label1", fontColor: "white", fontSize: 12, margin: { left: 10, right: 10 } }]
        },
        connector: {
            lineColor: "#000000", constraints: ej.datavisualization.Diagram.ConnectorConstraints.None,
            segments: [{ type: "orthogonal" }], targetDecorator: { width: 5, height: 5 },
        }
    };
    $scope.selectionChange = "selectionChanged";
    $scope.nodeTemplate = "nodeTemplate";
    $scope.dataSourceSettings = { id: "Name", parent: "ReportingPerson", dataSource: data };
    $scope.selectedItems = { constraints: ~ej.datavisualization.Diagram.SelectorConstraints.Rotator };
    $scope.pageSettings = { scrollLimit: "diagram" };
    $scope.snapSettings = { snapConstraints: ej.datavisualization.Diagram.SnapConstraints.None };

});

