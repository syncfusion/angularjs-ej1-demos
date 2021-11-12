﻿var data = [
            {
                "TaskID": 1,
                "TaskName": "Parent Task 1",
                "StartDate": new Date("02/27/2017"),
                "EndDate": new Date("03/03/2017"),
                "Progress": "40",
                "isManual": true,
                "Children": [
                     { "TaskID": 2, "TaskName": "Child Task 1", "StartDate": new Date("02/27/2017"), "EndDate": new Date("03/03/2017"), "Progress": "40" },
                     { "TaskID": 3, "TaskName": "Child Task 2", "StartDate": new Date("02/26/2017"), "EndDate": new Date("03/03/2017"), "Progress": "40","isManual": true },
                     { "TaskID": 4, "TaskName": "Child Task 3", "StartDate": new Date("02/27/2017"), "EndDate": new Date("03/03/2017"), "Duration": 5, "Progress": "40", }
                ]
            },
            {
                "TaskID": 5,
                "TaskName": "Parent Task 2",
                "StartDate": new Date("03/05/2017"),
                "EndDate": new Date("03/09/2017"),
                "Progress": "40",
                "isManual": true,
                "Children": [
                     { "TaskID": 6, "TaskName": "Child Task 1", "StartDate": new Date("03/06/2017"), "EndDate": new Date("03/09/2017"), "Progress": "40" },
                     { "TaskID": 7, "TaskName": "Child Task 2", "StartDate": new Date("03/06/2017"), "EndDate": new Date("03/09/2017"), "Progress": "40", },
                     { "TaskID": 8, "TaskName": "Child Task 3", "StartDate": new Date("02/28/2017"), "EndDate": new Date("03/05/2017"), "Progress": "40","isManual":true },
                     { "TaskID": 9, "TaskName": "Child Task 4", "StartDate": new Date("03/04/2017"), "EndDate": new Date("03/09/2017"), "Progress": "40","isManual":true }
                ]
            },
            {
                "TaskID": 10,
                "TaskName": "Parent Task 3",
                "StartDate": new Date("03/13/2017"),
                "EndDate": new Date("03/17/2017"),
                "Progress": "40",
                "Children": [
                     { "TaskID": 11, "TaskName": "Child Task 1", "StartDate": new Date("03/13/2017"), "EndDate": new Date("03/17/2017"), "Progress": "40" },
                     { "TaskID": 12, "TaskName": "Child Task 2", "StartDate": new Date("03/13/2017"), "EndDate": new Date("03/17/2017"), "Progress": "40", },
                     { "TaskID": 13, "TaskName": "Child Task 3", "StartDate": new Date("03/13/2017"), "EndDate": new Date("03/17/2017"), "Progress": "40", },
                     { "TaskID": 14, "TaskName": "Child Task 4", "StartDate": new Date("03/12/2017"), "EndDate": new Date("03/17/2017"), "Progress": "40","isManual":true },
                     { "TaskID": 15, "TaskName": "Child Task 5", "StartDate": new Date("03/13/2017"), "EndDate": new Date("03/17/2017"), "Progress": "40", }
                ]
            }

];
var toolbarItems = [ej.Gantt.ToolbarItems.Add,
                    ej.Gantt.ToolbarItems.Edit,
                    ej.Gantt.ToolbarItems.Delete,
                    ej.Gantt.ToolbarItems.Update,
                    ej.Gantt.ToolbarItems.Cancel,                   
];

syncApp.controller('GanttCtrl', function ($scope) {
    $scope.data = ej.DataManager(data);
    $scope.editSettings = { allowAdding: true, allowEditing: true, allowDeleting: true, editMode: "cellEditing" };
    $scope.toolbarSettings = { showToolbar: true, toolbarItems: toolbarItems };
    $scope.taskSchedulingMode = ej.Gantt.TaskSchedulingMode.Custom;
});

function load(args) {
    var obj = $("#angulargantt").data("ejGantt");
    var columns = obj.getColumns();
    for (var i = 1; i <= 5; i++)
        columns[i].visible = false;
    columns[0].width = 80;
};