//creating the node template
function nodeTemplate(diagram, node) {
    node.labels[0].text = node.FirstName;
}
function getLayoutInfo(diagram, node, options) {
    if (options.level === 3) { node.fillColor = "#3c418d"; }
    if (options.level === 2) {
        node.fillColor = "#108d8d";
        options.type = "center";
        options.orientation = "horizontal";
    }
    if (options.level === 1) { node.fillColor = "#822b86" }

}


//Initializes diagram control
syncApp.controller('diagramCtrl', function ($scope) {
    $scope.tool = ej.datavisualization.Diagram.Tool.ZoomPan;
    $scope.width = "100%";
    $scope.height = "490px";
    //To customize node before rendering 
    $scope.nodeTemplate = "nodeTemplate";
    //Initialize automatic layout 
    $scope.layout = { type: "organizationalchart", marginY: 20, horizontalSpacing: 30, verticalSpacing: 70, getLayoutInfo: getLayoutInfo };
    $scope.defaultSettings = {
        //set the default properties of the nodes
        node: { width: 100, height: 40, labels: [{ name: "label1", fontColor: "#ffffff" }], borderColor: "none" }
    };
    $scope.connector = { segments: [{ "type": "straight" }], targetDecorator: { shape: "none" } };
    $scope.snapSettings = { snapConstraints: ej.datavisualization.Diagram.SnapConstraints.None };
    $scope.tool = ej.datavisualization.Diagram.Tool.ZoomPan;
    $scope.pageSettings = { scrollLimit: "diagram" }
    //Configure data source
    $scope.dataSourceSettings = {
        dataSource: ej.DataManager({ url: "//mvc.syncfusion.com/Services/Northwnd.svc/" }),
        query: ej.Query().from("Employees").select("EmployeeID,ReportsTo,FirstName"),
        tableName: "Employees", id: "EmployeeID", parent: "ReportsTo"

    };
});

