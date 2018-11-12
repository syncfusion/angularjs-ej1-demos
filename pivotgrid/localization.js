var pivot_dataset = [
         { Amount: 100, Country: "Canada", Date: "FY 2005", Product: "Bike", Quantity: 2, State: "Alberta" },
         { Amount: 200, Country: "Canada", Date: "FY 2006", Product: "Van", Quantity: 3, State: "British Columbia" },
         { Amount: 300, Country: "Canada", Date: "FY 2007", Product: "Car", Quantity: 4, State: "Brunswick" },
         { Amount: 150, Country: "Canada", Date: "FY 2008", Product: "Bike", Quantity: 3, State: "Manitoba" },
         { Amount: 200, Country: "Canada", Date: "FY 2006", Product: "Car", Quantity: 4, State: "Ontario" },
         { Amount: 100, Country: "Canada", Date: "FY 2007", Product: "Van", Quantity: 1, State: "Quebec" },
         { Amount: 200, Country: "France", Date: "FY 2005", Product: "Bike", Quantity: 2, State: "Charente-Maritime" },
         { Amount: 250, Country: "France", Date: "FY 2006", Product: "Van", Quantity: 4, State: "Essonne" },
         { Amount: 300, Country: "France", Date: "FY 2007", Product: "Car", Quantity: 3, State: "Garonne (Haute)" },
         { Amount: 150, Country: "France", Date: "FY 2008", Product: "Van", Quantity: 2, State: "Gers" },
         { Amount: 200, Country: "Germany", Date: "FY 2006", Product: "Van", Quantity: 3, State: "Bayern" },
         { Amount: 250, Country: "Germany", Date: "FY 2007", Product: "Car", Quantity: 3, State: "Brandenburg" },
         { Amount: 150, Country: "Germany", Date: "FY 2008", Product: "Car", Quantity: 4, State: "Hamburg" },
         { Amount: 200, Country: "Germany", Date: "FY 2008", Product: "Bike", Quantity: 4, State: "Hessen" },
         { Amount: 150, Country: "Germany", Date: "FY 2007", Product: "Van", Quantity: 3, State: "Nordrhein-Westfalen" },
         { Amount: 100, Country: "Germany", Date: "FY 2005", Product: "Bike", Quantity: 2, State: "Saarland" },
         { Amount: 150, Country: "United Kingdom", Date: "FY 2008", Product: "Bike", Quantity: 5, State: "England" },
         { Amount: 250, Country: "United States", Date: "FY 2007", Product: "Car", Quantity: 4, State: "Alabama" },
         { Amount: 200, Country: "United States", Date: "FY 2005", Product: "Van", Quantity: 4, State: "California" },
         { Amount: 100, Country: "United States", Date: "FY 2006", Product: "Bike", Quantity: 2, State: "Colorado" },
         { Amount: 150, Country: "United States", Date: "FY 2008", Product: "Car", Quantity: 3, State: "New Mexico" },
         { Amount: 200, Country: "United States", Date: "FY 2005", Product: "Bike", Quantity: 4, State: "New York" },
         { Amount: 250, Country: "United States", Date: "FY 2008", Product: "Car", Quantity: 3, State: "North Carolina" },
         { Amount: 300, Country: "United States", Date: "FY 2007", Product: "Van", Quantity: 4, State: "South Carolina" }
];
var dataSource = {
    data: pivot_dataset,
    rows: [
         {
             fieldName: "Country",
             fieldCaption: "Country"
         },
        {
            fieldName: "State",
            fieldCaption: "State"
        }
    ],
    columns: [
        {
            fieldName: "Product",
            fieldCaption: "Product"
        }
    ],
    values: [
        {
            fieldName: "Amount",
            fieldCaption: "Amount"
        },
        {
            fieldName: "Quantity",
            fieldCaption: "Quantity"
        }
    ]
};

syncApp.controller('PivotGridLocalCtrl', function ($scope) {
    $scope.dataSource = dataSource;
    $scope.isResponsive = true;
    $scope.datasource = $scope.dataSource;
    $scope.locale = "en-US";
    $scope.localeText = ["en-US", "fr-FR", "es-ES"];
    $scope.pivotTableFieldListID = "PivotSchemaDesigner";

    $scope.ApplyChanges = function (args) {
        var btnTarget, relationalRadioBtnObj, olapRadioBtnObj, rdbClient, rdbServer, languageListDropdown;
        relationalRadioBtnObj = $('#rdbRelational').data("ejRadioButton"); olapRadioBtnObj = $('#rdbOlap').data("ejRadioButton"); rdbClient = $('#rdbClient').data("ejRadioButton"); rdbServer = $('#rdbServer').data("ejRadioButton");
        languageListDropdown = $('#languageList').data("ejDropDownList");
        var pivotGrid = $('.e-pivotgrid').data("ejPivotGrid"), pivotSchemaDesigner = $('.e-pivotschemadesigner').data("ejPivotSchemaDesigner"), languageID;
        languageID = languageListDropdown._currentText == "fr-FR" ? "1036" : languageListDropdown._currentText == "es-ES" ? "1034" : "1033"
        pivotSchemaDesigner._destroy();
        pivotGrid.locale(languageListDropdown._currentText);
        var Date, Country, State, Product, Amount, Quantity = "";
        //Locale for Relation DataSource
        if (languageListDropdown._currentText == "fr-FR") {
            Country = "Pays";
            State = "Etat";
            Product = "Produit";
            Amount = "Montant";
            Quantity = "Quantité";
            Date = "date";
        }
        else if (languageListDropdown._currentText == "es-ES") {
            Country = "País";
            State = "Estado";
            Product = "Producto";
            Amount = "Cantidad";
            Quantity = "Cantidad";
            Date = "Fecha";
        }
        else {
            Country = "Country";
            State = "State";
            Product = "Product";
            Amount = "Amount";
            Quantity = "Quantity";
            Date = "Date";
        }

        var pivotdataSource = {
            data: pivot_dataset, cube: "",
            rows: [{ fieldName: "Country", fieldCaption: Country }, { fieldName: "State", fieldCaption: State }],
            columns: [{ fieldName: "Product", fieldCaption: Product }],
            values: [{ fieldName: "Amount", fieldCaption: Amount }, { fieldName: "Quantity", fieldCaption: Quantity }],
            filters: []
        };
        var olapDataSource = {
            data: "//bi.syncfusion.com/olap/msmdpump.dll;Locale Identifier= " + languageID + ";",
            catalog: "Adventure Works DW 2008 SE",
            cube: "Adventure Works",
            rows: [{ fieldName: "[Date].[Fiscal]" }],
            columns: [{ fieldName: "[Customer].[Customer Geography]" }],
            values: [{ measures: [{ fieldName: "[Measures].[Internet Sales Amount]" }], axis: "columns" }],
            filters: []
        };

        $(".e-pivotgrid").remove();
        $("#PivotSchemaDesigner").remove();
        var gridPanel = ej.buildTag("div#PivotGrid", "", { "display": "block" })[0].outerHTML;
        var gridSchemaPanel = ej.buildTag("div#PivotSchemaDesigner", "", { height: "650px", "display": "block" })[0].outerHTML;
        $(gridPanel).appendTo(".cols-sample-area");
        $(gridSchemaPanel).appendTo(".cols-sample-area");
        if (rdbClient.model.checked) {
            $("#PivotGrid").ejPivotGrid({
                dataSource: relationalRadioBtnObj.model.checked ? pivotdataSource : olapRadioBtnObj.model.checked ? olapDataSource : pivotdataSource, pivotTableFieldListID: "PivotSchemaDesigner",
                enableGroupingBar: true, locale: languageListDropdown._currentText
            });
        }
        else {
            pivotGrid.model.dataSource = { data: null, cube: "" };
            pivotGrid.model.operationalMode = "servermode";
            $("#PivotGrid").ejPivotGrid({
                url: window.baseurl + (relationalRadioBtnObj.model.checked ? "api/PivotGrid/Relational" : "api/PivotGrid/Olap"), serviceMethodSettings: { initialize: "Initialize", drillDown: "Drill", nodeStateModified: "ModifyNodeState", nodeDropped: "DropNode", memberExpand: "ExpandMember" },
                enableGroupingBar: true, customObject: { Language: languageListDropdown._currentText }, locale: languageListDropdown._currentText, pivotTableFieldListID: "PivotSchemaDesigner",
            });
        }
        if (olapRadioBtnObj.model.checked && rdbClient.model.checked)
            $("#PivotSchemaDesigner").ejPivotSchemaDesigner({ olap: { showKPI: false, showNamedSets: true }, locale: languageListDropdown._currentText });
        else
            $("#PivotSchemaDesigner").ejPivotSchemaDesigner({ locale: languageListDropdown._currentText, serviceMethods: { initialize: "Initialize", drillDown: "Drill", nodeStateModified: "ModifyNodeState", nodeDropped: "DropNode", memberExpand: "ExpandMember" } });
    }
});

ej.PivotGrid.Locale['fr-FR'] = {
    ToolTipRow: 'Rangée',
    ToolTipColumn: 'Colonne',
    ToolTipValue: 'Valeur',
    DragFieldHere: "champ de glisser ici",
    ColumnArea: "Déposez la colonne ici",
    RowArea: "Déposez ligne ici",
    ValueArea: "Les valeurs Drop ici",
    Measures: "Les mesures",
    NoValue: "Aucune valeur",
    Expand: "Développer",
    OK: "D'accord",
    Cancel: "Annuler",
    Collapse: "Effondrement",
    AddToFilter: "Ajouter au filtre",
    AddToRow: "Ajouter à la rangée",
    AddToColumn: "Ajouter à la colonne",
    AddToValues: "Ajouter à la valeur",
    CalculatedField: "Champ Calculé",
    NoRecordsToDisplay: "Aucun enregistrement à afficher.",
    MultipleItems: "Plusieurs éléments",
    All: "Tous les",
    Search: "Recherchez"
};
ej.PivotGrid.Locale['es-ES'] = {
    ToolTipRow: 'Herramienta Sugerencia Fila',
    ToolTipColumn: 'Columna sobre herramientas',
    ToolTipValue: 'Herramienta Sugerencia Valor',
    DragFieldHere: "campo de arrastre aquí",
    ColumnArea: "Caída de la columna aquí",
    RowArea: "Caída de fila aquí",
    ValueArea: "valores de caída de aquí",
    Measures: "medidas",
    NoValue: "Aucune valeur",
    Expand: "Développer",
    OK: "Deacuerdo",
    Cancel: "Cancelar",
    Collapse: "Effondrement",
    AddToFilter: "Agregar al filtro",
    AddToRow: "Añadir a la fila",
    AddToColumn: "Añadir a la columna",
    AddToValues: "Añadir a los valores",
    CalculatedField: "Campo Calculado",
    NoRecordsToDisplay: "No hay registros que mostrar.",
    MultipleItems: "Varios elementos",
    All: "Todos",
    Search: "Buscar"
};

//Locale for PivotSchemadesigner
ej.PivotSchemaDesigner.Locale["fr-FR"] = {
    ClearFilter: "Effacer le filtre",
    SelectField: "Select Field",
    Measures: "Les mesures",
    Warning: "Attention",
    AlertMsg: "Le champ que vous déplacez ne peut être placé dans cette zone du rapport",
    Measures: "Les mesures",
    Goal: "Objectif",
    Status: "statut",
    Trend: "Tendance",
    Value: "valeur",
    AddToFilter: "Ajouter au filtre",
    AddToRow: "Ajouter à la rangée",
    AddToColumn: "Ajouter à la colonne",
    AddToValues: "Ajouter à la valeur",
    PivotTableFieldList: "Liste des champs PivotTable",
    ChooseFieldsToAddToReport: "Choisissez les champs à ajouter à signaler :",
    DragFieldBetweenAreasBelow: "champs de glisser entre les zones ci-dessous:",
    ReportFilter: "Rapport Filtre",
    ColumnLabel: "Colonne Étiquette",
    RowLabel: "Label Row",
    Values: "Valeurs",
    DeferLayoutUpdate: "Différer la mise en page de mise à jour",
    Update: "Mettre à jour",
    OK: "D'accord",
    Cancel: "Annuler",
    Close: "Fermer"
};

ej.PivotSchemaDesigner.Locale["es-ES"] = {
    ClearFilter: "ClearFilter",
    SelectField: "SelectField",
    Measures: "medidas",
    Warning: "Advertencia",
    AlertMsg: "Le champ que vous ne peut être déplacez placé dans cette zona du relación",
    Measures: "medidas",
    Goal: "Gol",
    Status: "Estado",
    Trend: "Tendencia",
    Value: "Valor",
    AddToFilter: "Agregar al filtro",
    AddToRow: "Añadir a la fila",
    AddToColumn: "Añadir a la columna",
    AddToValues: "Añadir a los valores",
    PivotTableFieldList: "Liste des champs PivotTable",
    ChooseFieldsToAddToReport: "Elija los campos para añadir a reportar :",
    DragFieldBetweenAreasBelow: "Arrastre los campos entre las áreas a continuación:",
    ReportFilter: "Filtro de informe",
    ColumnLabel: "columna Etiqueta",
    RowLabel: "fila Label",
    Values: "Valores",
    DeferLayoutUpdate: "Defer Disposición de actualización",
    Update: "Actualizar",
    OK: "Deacuerdo",
    Cancel: "Cancelar",
    Close: "Cerca"
};