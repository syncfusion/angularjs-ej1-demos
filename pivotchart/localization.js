syncApp.controller('PivotChartLlocalCtrl', function ($scope) {
    $scope.dataSource = {
        data: "//bi.syncfusion.com/olap/msmdpump.dll", //data
        catalog: "Adventure Works DW 2008 SE",
        cube: "Adventure Works",
        rows: [
            {
                fieldName: "[Date].[Fiscal]"
            }
        ],
        columns: [
            {
                fieldName: "[Customer].[Customer Geography]"
            }
        ],
        values: [
            {
                measures: [
                    {
                        fieldName: "[Measures].[Internet Sales Amount]"
                    }
                ],
                axis: "columns"
            }
        ]
    };

    $scope.dataSource = $scope.dataSource;
    $scope.title = "PivotChart in Essential JS";
    $scope.locale = "en-US";
    $scope.isResponsive = true;
	$scope.zooming = { enableScrollbar : true};
    $scope.ctype = ej.PivotChart.ChartTypes.Column;
    $scope.showTooltip = true;
    $scope.size = { height: "480px", width: "95%" };
    $scope.primaryXAxis = { labelRotation: 0 };
    $scope.primaryYAxis = { title: { text: "Amount" } };
    $scope.legend = { visible: true, rowCount: 2 };
    $scope.localeText = ["en-US", "fr-FR", "es-ES"];
});

function onLocalChange(args) {
    var chartTarget = $("#PivotChart").data("ejPivotChart");
    var languageID = args.value == "fr-FR" ? "1036" : args.value == "es-ES" ? "1034" : "1033";
    var xAxisTitle, yAxisTitle;
    switch (args.value) {
        case "fr-FR":
            xAxisTitle = "Fecha - Fiscal";
            yAxisTitle = "Cantidad de Ventas por Internet";
            break;
        case "es-ES":
            xAxisTitle = "Date - Fiscal";
            yAxisTitle = "Montant des Ventes (Internet)";
            break;
        case "en-US":
            xAxisTitle = "Date - Fiscal";
            yAxisTitle = "Internet Sales Amount";
            break;
    }
    chartTarget.model.dataSource.data = "//bi.syncfusion.com/olap/msmdpump.dll;Locale Identifier= " + languageID + ";";
    chartTarget.model.primaryXAxis.title.text = xAxisTitle;
    chartTarget.model.primaryYAxis.title.text = yAxisTitle;
}
ej.PivotChart.Locale["fr-FR"] = {
    Measure: "Mesure",
    Row: "Rangée",
    Column: "Colonne",
    Value: "Valeur",
    Expand: "Développer",
    Collapse: "Effondrement",
    Exit: "Quitter"
};
ej.PivotChart.Locale["es-ES"] = {
    Measure: "medida",
    Row: "hilera",
    Column: "columna",
    Value: "Valor",
    Expand: "expandir",
    Collapse: "colapso",
    Exit: "Salida"
};