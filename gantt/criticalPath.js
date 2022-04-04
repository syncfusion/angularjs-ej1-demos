var criticalPathData = [
    {
        taskID: 1,
        taskName: "Project Schedule",
        startDate: new Date( "02/06/2017"),
        endDate: new Date( "03/10/2017"),
        subtasks: [
            {
                taskID: 2,
                taskName: "Planning",
                startDate: new Date( "02/06/2017"),
                endDate: new Date( "02/10/2017"),
                subtasks: [
                    { taskID: 3, taskName: "Plan timeline", startDate: new Date( "02/06/2017"), endDate: new Date( "02/10/2017"), duration: 5, progress: "80", resourceInfo: [1] },
                    { taskID: 4, taskName: "Plan budget", startDate: new Date( "02/06/2017"), endDate: new Date( "02/10/2017"), duration: 5, progress: "70", predecessor: "3FS", resourceInfo: [1] },
                    { taskID: 5, taskName: "Allocate resources", startDate: new Date( "02/06/2017"), endDate: new Date( "02/10/2017"), duration: 5, progress: "80", predecessor: "4SS", resourceInfo: [1] },
                    { taskID: 6, taskName: "Planning complete", startDate: new Date( "02/10/2017"), endDate: new Date( "02/10/2017"), duration: 0, predecessor: "4FS" }
                ]
            },
            {
                taskID: 7,
                taskName: "Design",
                startDate: new Date( "02/10/2017"),
                endDate: new Date( "02/14/2017"),
                subtasks: [
                    { taskID: 8, taskName: "Software Specification", startDate: new Date("02/10/2017"), endDate: new Date("02/12/2017"), duration: 3, progress: "60", predecessor: "6FS", resourceInfo: [2] },
                    { taskID: 9, taskName: "Develop prototype", startDate: new Date( "02/10/2017"), endDate: new Date( "02/12/2017"), duration: 3, progress: "40", predecessor: "6FS", resourceInfo: [3] },
                    { taskID: 10, taskName: "Get approval from customer", startDate: new Date( "02/13/2017"), endDate: new Date( "02/18/2017"), duration: 5, progress: "50", predecessor: "9FS", resourceInfo: [1] },
                    { taskID: 11, taskName: "Design complete", startDate: new Date( "02/18/2017"), endDate: new Date( "02/21/2017"), duration: 3, predecessor: "10FS" }
                ]
            }]
    }];
var toolbarItems = [ej.Gantt.ToolbarItems.CriticalPath,
];

syncApp.controller('GanttCtrl', function ($scope) {
    $scope.data = ej.DataManager(criticalPathData);
    $scope.editSettings = { allowAdding: true, allowEditing: true, allowDeleting: true, editMode: "cellEditing" };
    $scope.toolbarSettings = { showToolbar: true, toolbarItems: toolbarItems };
});

function actionComplete(args) {
	if(args.requestType == "create") {
		var obj = $("#angulargantt").data("ejGantt");
		obj.showCriticalPath(true);
	}
}

function load(args) {
    var columns = { field: "isCritical", headerText: "Critical", allowEditing: false };
    var column = this.getColumns();
    column.splice(2, 0, columns);
}