var columns = [
                    { field: "FreightID", headerText: "Freight ID", editType: "stringedit", width:"85" },
                    { field: "FreightName", headerText: "Freight Name", editType: "stringedit", width:"125" },
                    { field: "TotalUnits", headerText: "Total Units", editType: "numericedit", width: "125" },
                    { field: "TotalCosts", headerText: "Total Costs", editType: "numericedit", width: "150" },
                    { field: "UnitWeight", headerText: "Unit Weight", editType: "numericedit", width: "125" }
];

var summaryRow = [
                     {
                         title: "Maximum",
                         summaryColumns: [
                             { summaryType: ej.TreeGrid.SummaryType.Maximum, dataMember: "TotalUnits", displayColumn: "TotalUnits", prefix: "Individual maximum unit = " },
                             { summaryType: ej.TreeGrid.SummaryType.Maximum, dataMember: "TotalCosts", displayColumn: "TotalCosts", prefix: "Individual maximum Cost = ", format: "{0:C}" }
                         ]
                     },
                     {
                         title: "Total",
                         summaryColumns: [
                             { summaryType: ej.TreeGrid.SummaryType.Sum, dataMember: "TotalCosts", displayColumn: "TotalCosts", prefix: "Total costs = ", format: "{0:C}" },
                             { summaryType: ej.TreeGrid.SummaryType.Sum, dataMember: "UnitWeight", displayColumn: "UnitWeight", prefix: "Total weight = ", suffix: " Pounds" }]
                     }
];

var summaryRowData = [{
    "FreightID": "CX2389NK",
    "FreightName": "Maersk Edibles Co.",
    "TotalUnits": 598,
    "TotalCosts": 27838,
    "UnitWeight": 241,
    "children": [{

        "FreightID": "QW4567OP",
        "FreightName": "Chang",
        "TotalUnits": 123,
        "TotalCosts": 3400,
        "UnitWeight": 50,
    }, {
        "FreightID": "QW3458BH",
        "FreightName": "Aniseed Syrup",
        "TotalUnits": 89,
        "TotalCosts": 5900,
        "UnitWeight": 87,
    }, {
        "FreightID": "QW8967OH",
        "FreightName": "Chef Anton's Cajun Seasoning",
        "TotalUnits": 46,
        "TotalCosts": 9578,
        "UnitWeight": 54,
    }, {

        "FreightID": "QW6549NJ",
        "FreightName": "Chef Anton's Gumbo Mix",
        "TotalUnits": 340,
        "TotalCosts": 8960,
        "UnitWeight": 50,
    }]
},
                     {
                         "FreightID": "DW8954IO",
                         "FreightName": "Aeon fitness inc.",
                         "TotalUnits": 1720,
                         "TotalCosts": 24367,
                         "UnitWeight": 296,
                         "children": [
                             {
                                 "FreightID": "UF5647YH",
                                 "FreightName": "Reebox CrossFit Back Bay",
                                 "TotalUnits": 600,
                                 "TotalCosts": 8700,
                                 "UnitWeight": 73,
                             },
                           {
                               "FreightID": "UF1290LK",
                               "FreightName": "The Green Microgym",
                               "TotalUnits": 569,
                               "TotalCosts": 8765,
                               "UnitWeight": 90,
                           },
                         {
                             "FreightID": "UF8956KU",
                             "FreightName": "DeFranco's",
                             "TotalUnits": 456,
                             "TotalCosts": 4589,
                             "UnitWeight": 68,
                         },
                         {
                             "FreightID": "UF7464JK",
                             "FreightName": "Westside Barbell",
                             "TotalUnits": 95,
                             "TotalCosts": 2313,
                             "UnitWeight": 65,
                         }],
                     },
                     {
                         "FreightID": "EJ9456KN",
                         "FreightName": "Sun technologies inc",
                         "TotalUnits": 331,
                         "TotalCosts": 22933,
                         "UnitWeight": 192,
                         "children": [
                             {
                                 "FreightID": "GH2367OP",
                                 "FreightName": "Haier Group",
                                 "TotalUnits": 78,
                                 "TotalCosts": 6789,
                                 "UnitWeight": 23,
                             },
                           {
                               "FreightID": "GH4309TH",
                               "FreightName": "Panda Electronics",
                               "TotalUnits": 90,
                               "TotalCosts": 8999,
                               "UnitWeight": 48,
                           },
                         {
                             "FreightID": "GH3494SD",
                             "FreightName": "Jiangsu Etern",
                             "TotalUnits": 36,
                             "TotalCosts": 4356,
                             "UnitWeight": 56,
                         },
                         {
                             "FreightID": "GH3213FR",
                             "FreightName": "Zhejiang Fuchunjiang",
                             "TotalUnits": 127,
                             "TotalCosts": 2789,
                             "UnitWeight": 65,
                         }],

                     }];


syncApp.controller('TreeGridCtrl', function ($scope) {
    $scope.data = summaryRowData;
    $scope.columns = columns;
    $scope.Children = "children";
    $scope.summaryRow = summaryRow;
    $scope.treeColumnIndex = 1;
});