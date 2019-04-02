var nodeConstraints = ej.datavisualization.Diagram.NodeConstraints;
var connectorConstraints = ej.datavisualization.Diagram.ConnectorConstraints;

var crudOption = [
   {
       id: "insertData", tooltiptext: "insert",
       spriteCss: "sficon-add toolBarIconStyle",
   }, {
       id: "updateData", tooltiptext: "update",
       spriteCss: "sficon-edit toolBarIconStyle",
   }, {
       id: "deleteData", tooltiptext: "delete",
       spriteCss: "sficon-delete toolBarIconStyle",
   }
];

syncApp.controller('diagramCtrl', function ($scope) {
    $scope.dataSourceSettings =
    {
        id: "Name",
        customFields: [
            "Description",
            "Color"
        ],
        crudAction:
        {
            read: window.baseurl + "api/Diagram/GetNodes",
            create: window.baseurl + "api/Diagram/AddNodes",
            update: window.baseurl + "api/Diagram/UpdateNodes",
            destroy: window.baseurl + "api/Diagram/DeleteNodes"
        },
        connectionDataSource:
        {
            id: "Name",
            sourceNode: "SourceNode",
            targetNode: "TargetNode",
            crudAction: {
                read: window.baseurl + "api/Diagram/GetConnectors",
                create: window.baseurl + "api/Diagram/AddConnectors",
                update: window.baseurl + "api/Diagram/UpdateConnectors",
                destroy: window.baseurl + "api/Diagram/DeleteConnectors"
            }
        }
    };
    $scope.layout=
    {
        type: "hierarchicaltree",
        horizontalSpacing: 40,
        verticalSpacing: 40,
        margin:
        {
            top: 50
        }
    };
    $scope.defaultSettings = {
        node:
            {
                width: 100,
                height: 50,
                constraints: (nodeConstraints.Select | nodeConstraints.PointerEvents | nodeConstraints.Delete | nodeConstraints.Connect),
                borderColor: "black",
                borderWidth: 1,
                labels: [{ fontColor: "white", fontSize: 12 }]
            },
        connector:
        {
            lineColor: "#000000",
            constraints: connectorConstraints.Default & ~connectorConstraints.Drag,
            segments: [{ type: "orthogonal" }]
        },
    };
    $scope.nodeTemplate = nodeTemplate;
    $scope.connectorSourceChange = connectionChange;
    $scope.connectorTargetChange = connectionChange;
    $scope.selectionChange = selectionChange;
    $scope.crudOption = crudOption;
});


function diagramCreate() {
    $("#editDialog").ejDialog({
        width: 400,
        showOnInit: false,
        enableModal: true,
        enableResize: false
    });
}


var sourceNode, targetNode, connectorsChanged;
function nodeTemplate(diagram, node) {
    node.labels[0].text = node.Description;
    node.fillColor = node.Color;
}

function onItemClick(args) {
    var diagram = $("#diagram").ejDiagram("instance");
    var selectedItem = diagram.model.selectedItems.children[0];
    if (selectedItem && (selectedItem.type !== "connector" || args.currentTarget.id === "deleteData")) {
        switch (args.currentTarget.id) {
            case "insertData":
                openDialog("Add", "", "");
                break;
            case "updateData":
                openDialog("Update", selectedItem.Description, selectedItem.Color);
                break;
            case "deleteData":
                diagram.remove(selectedItem);
                diagram.layout();
                diagram.removeData();
                break;
        }
    }
    else if (connectorsChanged) {
        if (args.currentTarget.id === "updateData") {
            diagram.updateData();
            connectorsChanged = false;
            $("#toolbarItem").ejToolbar("disableItemByID", "updateData");
        }
    }
}

function openDialog(title, description, color) {
    document.getElementById("btnUpdate").value = title;
    document.getElementById("Description").value = description;
    document.getElementById("Color").value = color;
    $("#editDialog").ejDialog({ "title": title });
    $("#editDialog").ejDialog("open");
}

function addOrUpdate(evt) {
    var diagram = $("#diagram").ejDiagram("instance");
    var description = document.getElementById("Description").value;
    var color = document.getElementById("Color").value;
    var selectedItem = diagram.model.selectedItems.children[0];
    if (evt.value === "Add") {
        var node = {
            name: "node" + ej.datavisualization.Diagram.Util.randomId(), fillColor: color,
            labels: [{ "text": description }], Description: description, Color: color
        };
        var connector = {
            name: "node" + ej.datavisualization.Diagram.Util.randomId(),
            sourceNode: selectedItem.name, targetNode: node.name
        };
        diagram.add([node, connector]);
        diagram.layout();
        diagram.insertData();
    }
    else {
        selectedItem.Description = description;
        selectedItem.Color = color;
        diagram.updateNode(selectedItem.name, { fillColor: color });
        diagram.updateLabel(selectedItem.name, selectedItem.labels[0], { text: description });
        diagram.updateData();
    }
    $("#editDialog").ejDialog("close");
}

function connectionChange(args) {
    if (args.dragState === "completed") {
        if (!args.element.targetNode || !args.element.sourceNode)
            args.cancel = true;
        if (!args.cancel) {
            connectorsChanged = true;
            $("#toolbarItem").ejToolbar("enableItemByID", "updateData");
        }
    }
}

function selectionChange(args) {
    $("#toolbarItem").ejToolbar("disable");
    if (args.changeType === "insert") {
        if (args.element.type !== "connector")
            $("#toolbarItem").ejToolbar("enable");
        else {
            $("#toolbarItem").ejToolbar("enableItemByID", "deleteData");
        }
    }
    else if (connectorsChanged) {
        $("#toolbarItem").ejToolbar("enableItemByID", "updateData");
    }
}