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
    $scope.legendCollection = ["heatmap_legend"];
    $scope.itemsMapping = {
        column: { "propertyName": "ProductName", "displayName": "Product Name" },
        row: { "propertyName": "Year", "displayName": "Year", },
        value: { "propertyName": "Value" },
        columnMapping: [
            { "propertyName": columns[0], "displayName": columns[0] },
            { "propertyName": columns[1], "displayName": columns[1] },
            { "propertyName": columns[2], "displayName": columns[2] },
            { "propertyName": columns[3], "displayName": columns[3] },
            { "propertyName": columns[4], "displayName": columns[4] },
        ],
        headerMapping: { "propertyName": "Year", "displayName": "Year" }
    };
});