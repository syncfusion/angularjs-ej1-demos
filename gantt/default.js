var data = [
            {
                "TaskID": 1,
                "TaskName": "Parent Task 1",
                "StartDate": "02/27/2017",
                "EndDate": "03/03/2017",
                "Progress": "40",
                "Children": [
                     { "TaskID": 2, "TaskName": "Child Task 1", "StartDate": "02/27/2017", "EndDate": "03/03/2017", "Progress": "40" },
                     { "TaskID": 3, "TaskName": "Child Task 2", "StartDate": "02/27/2017", "EndDate": "03/03/2017", "Progress": "40", },
                     { "TaskID": 4, "TaskName": "Child Task 3", "StartDate": "02/27/2017", "EndDate": "03/03/2017", "Duration": 5, "Progress": "40", }
                ]
            },
            {
                "TaskID": 5,
                "TaskName": "Parent Task 2",
                "StartDate": "03/18/2017",
                "EndDate": "03/22/2017",
                "Progress": "40",
                "Children": [
                     { "TaskID": 6, "TaskName": "Child Task 1", "StartDate": "03/06/2017", "EndDate": "03/10/2017", "Progress": "40" },
                     { "TaskID": 7, "TaskName": "Child Task 2", "StartDate": "03/06/2017", "EndDate": "03/10/2017", "Progress": "40", },
                     { "TaskID": 8, "TaskName": "Child Task 3", "StartDate": "03/06/2017", "EndDate": "03/10/2017", "Progress": "40", },
                     { "TaskID": 9, "TaskName": "Child Task 4", "StartDate": "03/06/2017", "EndDate": "03/10/2017", "Progress": "40" }
                ]
            },
            {
                "TaskID": 10,
                "TaskName": "Parent Task 3",
                "StartDate": "03/13/2017",
                "EndDate": "03/17/2017",
                "Progress": "40",
                "Children": [
                     { "TaskID": 11, "TaskName": "Child Task 1", "StartDate": "03/13/2017", "EndDate": "03/17/2017", "Progress": "40" },
                     { "TaskID": 12, "TaskName": "Child Task 2", "StartDate": "03/13/2017", "EndDate": "03/17/2017", "Progress": "40", },
                     { "TaskID": 13, "TaskName": "Child Task 3", "StartDate": "03/13/2017", "EndDate": "03/17/2017", "Progress": "40", },
                     { "TaskID": 14, "TaskName": "Child Task 4", "StartDate": "03/13/2017", "EndDate": "03/17/2017", "Progress": "40", },
                     { "TaskID": 15, "TaskName": "Child Task 5", "StartDate": "03/13/2017", "EndDate": "03/17/2017", "Progress": "40", }
                ]
            }

];

function rowSelected() {
    var ganttObject = this,
      treeGridObj = ganttObject._$treegridHelper.ejTreeGrid("instance"),
      rowIndex;
    if (treeGridObj.model.selectedItem == null)
        rowIndex = 2;
    ganttObject._$treegridHelper.ejTreeGrid("updateScrollBar", rowIndex);
}
syncApp.controller('GanttCtrl', function ($scope) {
    $scope.selectedrow = 2;
    $scope.data = ej.DataManager(data);
    $scope.splitterposition = "50%";
    $scope.rowSelected = rowSelected;
});
$("#target").on('input', function () {
    var value = $(this).val();
    if (value < -1)
        document.getElementById("target").value = -1;
    if (value > 14)
        document.getElementById("target").value = 14;
})