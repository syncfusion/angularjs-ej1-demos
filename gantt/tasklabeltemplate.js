var columnTemplateResource = [
    { resourceId: 1, resourceName: "Robert King" },
    { resourceId: 2, resourceName: "Anne Dodsworth" },
    { resourceId: 3, resourceName: "David William" },
    { resourceId: 4, resourceName: "Nancy Davolio" },
    { resourceId: 5, resourceName: "Janet Leverling" },
    { resourceId: 6, resourceName: "Romey Wilson" }
];

var taskMappingTemplateData = [
    {
        taskID: 1,
        taskName: "Project Schedule",
        startDate: new Date( "02/06/2017"),
        endDate: new Date( "03/10/2017"),
        taskColor: "#F2A4A7",
        progressColor: "#DE605C",
        subtasks: [
            {
                taskID: 2,
                taskName: "Planning",
                startDate: new Date( "02/06/2017"),
                endDate: new Date( "02/10/2017"),
                taskColor: "#79BDC9",
                progressColor: "#59AAB4",
                subtasks: [
                    { taskID: 3, taskName: "Plan timeline", startDate: new Date( "02/06/2017"), endDate: new Date( "02/10/2017"), duration: 6, progress: "60", resourceId: [1,3] },
                    { taskID: 4, taskName: "Plan budget", startDate: new Date( "02/06/2017"), endDate: new Date( "02/10/2017"), duration: 6, progress: "90", resourceId: [5] },
                    { taskID: 5, taskName: "Allocate resources", startDate: new Date( "02/06/2017"), endDate: new Date( "02/10/2017"), duration: 6, progress: "75", resourceId: [6,2] },
                    { taskID: 6, taskName: "Planning complete", startDate: new Date( "02/06/2017"), endDate: new Date( "02/10/2017"), duration: 0, predecessor: "3FS,4FS,5FS", resourceId: [1] }
                ]
            },
            {
                taskID: 7,
                taskName: "Design",
                startDate: new Date( "02/13/2017"),
                endDate: new Date( "02/17/2017"),
                taskColor: "#93b8a6",
                progressColor: "#7AA992",
                subtasks: [
                    { taskID: 8, taskName: "Software Specification", startDate: new Date( "02/13/2017"), endDate: new Date( "02/15/2017"), duration: 3, progress: "60", predecessor: "6FS", resourceId: [2,1] },
                    { taskID: 9, taskName: "Develop prototype", startDate: new Date( "02/13/2017"), endDate: new Date( "02/15/2017"), duration: 3, progress: "100", predecessor: "6FS", resourceId: [3] },
                    { taskID: 10, taskName: "Get approval from customer", startDate: new Date( "02/16/2017"), endDate: new Date( "02/17/2017"), duration: 2, progress: "100", predecessor: "9FS", resourceId: [1,6] },
                    { taskID: 11, taskName: "Design complete", startDate: new Date( "02/17/2017"), endDate: new Date( "02/17/2017"), duration: 0, predecessor: "10FS", resourceId: [2] }
                ]
            },
            {
                taskID: 12,
                taskName: "Implementation",
                startDate: new Date( "02/17/2017"),
                endDate: new Date( "02/27/2017"),
                taskColor: "#FAC9CD",
                progressColor: "#F2928D",
                subtasks: [
                            { taskID: 13, taskName: "Development Task 1", startDate: new Date( "02/17/2017"), endDate: new Date( "02/19/2017"), duration: 3, progress: "50", predecessor: "11FS", resourceId: [3,2] },
                            { taskID: 14, taskName: "Development Task 2", startDate: new Date( "02/17/2017"), endDate: new Date( "02/19/2017"), duration: 3, progress: "50", predecessor: "11FS", resourceId: [3,6] },
                            { taskID: 15, taskName: "Testing", startDate: new Date( "02/20/2017"), endDate: new Date( "02/21/2017"), duration: 2, progress: "0", predecessor: "13FS,14FS", resourceId: [4] },
                            { taskID: 16, taskName: "Bug fix", startDate: new Date( "02/24/2017"), endDate: new Date( "02/25/2017"), duration: 2, progress: "0", predecessor: "15FS", resourceId: [3] },
                            { taskID: 17, taskName: "Customer review meeting", startDate: new Date( "02/26/2017"), endDate: new Date( "02/27/2017"), duration: 2, progress: "0", predecessor: "16FS", resourceId: [1,4] },
                            { taskID: 18, taskName: "Implemenation complete", startDate: new Date( "02/27/2017"), endDate: new Date( "02/27/2017"), duration: 0, predecessor: "17FS", resourceId: [2] }

                ]
            },
            { taskID: 19, taskName: "Integration", startDate: new Date( "03/03/2017"), endDate: new Date( "03/05/2017"), duration: 2, progress: "0", predecessor: "18FS", resourceId: [3] },
            { taskID: 20, taskName: "Final Testing", startDate: new Date( "03/06/2017"), endDate:  new Date("03/07/2017"), duration: 2, progress: "0", predecessor: "19FS", resourceId: [4,2] },
            { taskID: 21, taskName: "Final Delivery", startDate: new Date( "03/07/2017"), endDate: new Date( "03/07/2017"), duration: 0, predecessor: "20FS", resourceId: [1] }
        ]
    }
];

syncApp.controller('GanttCtrl', function ($scope) {
    $scope.data = ej.DataManager(taskMappingTemplateData);
    $scope.columnTemplateResource = columnTemplateResource;
    $scope.rowheight = 40;
    $scope.rightlabelTemplate = "#rightlabelTemplate";
    $scope.leftlabelTemplate = "#leftlabelTemplate";
});