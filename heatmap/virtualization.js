var heatmapData = [];
for (var i = 0; i < 900; i++) {
    heatmapData.push({
        "Year": 2016 - i,
        "Jan": getValue(), "Feb": getValue(), "Mar": getValue(), "Apr": getValue(), "May": getValue(), "Jun": getValue(),
        "Jul": getValue(), "Aug": getValue(), "Sep": getValue(), "Oct": getValue(), "Nov": getValue(), "Dec": getValue(),
    });
}

syncApp.controller('heatmapCtrl', function ($scope) {
    $scope.itemsSource = heatmapData;
    $scope.itemsMapping = {
        headerMapping: { "propertyName": "Year", "displayName": "Year", columnStyle: { textAlign: "right" } },
        columnMapping: [
            { "propertyName": "Jan", "displayName": "January" },
            { "propertyName": "Feb", "displayName": "February" },
            { "propertyName": "Mar", "displayName": "March" },
            { "propertyName": "Apr", "displayName": "April" },
            { "propertyName": "May", "displayName": "May" },
            { "propertyName": "Jun", "displayName": "June" },
            { "propertyName": "Jul", "displayName": "July" },
            { "propertyName": "Aug", "displayName": "August" },
            { "propertyName": "Sep", "displayName": "September" },
            { "propertyName": "Oct", "displayName": "October" },
            { "propertyName": "Nov", "displayName": "November" },
            { "propertyName": "Dec", "displayName": "December" }
        ],
    };
});

function getValue() {
    return Math.floor((Math.random() * 100) + 1);
}