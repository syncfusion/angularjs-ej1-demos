var scope;
var columns = ["Vegie-spread", "Tofuaa", "Alice Mutton", "Konbu", "Fløtemysost"];
var itemSource = [];

for (var i = 0; i < columns.length; i++) {
    for (var j = 0; j < 6; j++) {
        var value = Math.floor((Math.random() * 100) + 1);
        itemSource.push({ ProductName: columns[i], Year: "Y" + (2011 + j), Value: value })
    }
}

syncApp.controller('heatmapCtrl', function ($scope) {
    $scope.itemsSource = itemSource;
    $scope.itemsMapping = {
        column: { "propertyName": "ProductName", "displayName": "Product Name" },
        row: { "propertyName": "Year", "displayName": "Year", },
        value: { "propertyName": "Value" },
        columnMapping: [
            { "propertyName": columns[0], "displayName": columns[0], columnStyle: { "textAlign": "center", headerTemplateID: "#template1" } },
            { "propertyName": columns[1], "displayName": columns[1], columnStyle: { "textAlign": "center", headerTemplateID: "#template2" } },
            { "propertyName": columns[2], "displayName": columns[2], columnStyle: { "textAlign": "center", headerTemplateID: "#template3" } },
            { "propertyName": columns[3], "displayName": columns[3], columnStyle: { "textAlign": "center", headerTemplateID: "#template4" } },
            { "propertyName": columns[4], "displayName": columns[4], columnStyle: { "textAlign": "center", headerTemplateID: "#template5" } },
            { "propertyName": columns[5], "displayName": columns[5], columnStyle: { "textAlign": "center", headerTemplateID: "#template6" } },
        ],
        headerMapping: { "propertyName": "Year", "displayName": "Year" },
    };
    $scope.modeList = [
            { text: "List", value: "list" },
            { text: "Gradient", value: "gradient" }
    ];
    $scope.showContentList = [
                { text: "Visible", value: "visible" },
                { text: "Hidden", value: "hidden" }
    ];
    $scope.showContentValue = "visible";
    $scope.modeListValue = "list";
    $scope.width = "100%";
    $scope.cellColor = "true";
});