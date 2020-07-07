﻿var columns = [
                    { field: "taskID", headerText: "Task Id", editType: "numericedit", width: "45" },
                    { field: "taskName", headerText: "Task Name", editType: "stringedit" },
                    { field: "startDate", headerText: "Start Date", editType: "datepicker" },
                    { field: "endDate", headerText: "End Date", editType: "datepicker" },
                    { field: "duration", headerText: "Duration", editType: "numericedit" },
                    { field: "progress", headerText: "Progress", editType: "numericedit" }
];


var treeGridData = [
     {
         taskID: 1,
         taskName: "Planning",
         startDate: "02/03/2017",
         endDate: "02/07/2017",
         progress: 100,
         duration: 5,
         priority: "Normal",
         approved: false,
         subtasks: [
             { taskID: 2, taskName: "Plan timeline", startDate: "02/03/2017", endDate: "02/07/2017", duration: 5, progress: 100, priority: "Normal", approved: false },
             { taskID: 3, taskName: "Plan budget", startDate: "02/03/2017", endDate: "02/07/2017", duration: 5, progress: 100, approved: true },
             { taskID: 4, taskName: "Allocate resources", startDate: "02/03/2017", endDate: "02/07/2017", duration: 5, progress: 100, priority: "Critical", approved: false },
             { taskID: 5, taskName: "Planning complete", startDate: "02/07/2017", endDate: "02/07/2017", duration: 0, progress: 0, priority: "Low", approved: true }
         ]
     },
     {
         taskID: 6,
         taskName: "Design",
         startDate: "02/10/2017",
         endDate: "02/14/2017",
         duration: 3,
         progress: 86,
         priority: "High",
         approved: false,
         subtasks: [
             { taskID: 7, taskName: "Software Specification", startDate: "02/10/2017", endDate: "02/12/2017", duration: 3, progress: 60, priority: "Normal", approved: false },
             { taskID: 8, taskName: "Develop prototype", startDate: "02/10/2017", endDate: "02/12/2017", duration: 3, progress: 100, priority: "Critical", approved: false },
             { taskID: 9, taskName: "Get approval from customer", startDate: "02/13/2017", endDate: "02/14/2017", duration: 2, progress: 100, approved: true },
             { taskID: 10, taskName: "Design Documentation", startDate: "02/13/2017", endDate: "02/14/2017", duration: 2, progress: 100, approved: true },
             { taskID: 11, taskName: "Design complete", startDate: "02/14/2017", endDate: "02/14/2017", duration: 0, progress: 0, priority: "Normal", approved: true }
         ]
     },
	 {
	     taskID: 12,
	     taskName: "Implementation Phase",
	     startDate: "02/17/2017",
	     endDate: "02/27/2017",
	     priority: "Normal",
	     approved: false,
	     duration: 11,
	     subtasks: [
             {
                 taskID: 13,
                 taskName: "Phase 1",
                 startDate: "02/17/2017",
                 endDate: "02/27/2017",
                 priority: "High",
                 approved: false,
                 duration: 11,
                 subtasks: [{
                     taskID: 14,
                     taskName: "Implementation Module 1",
                     startDate: "02/17/2017",
                     endDate: "02/27/2017",
                     priority: "Normal",
                     duration: 11,
                     approved: false,
                     subtasks: [
                         { taskID: 15, taskName: "Development Task 1", startDate: "02/17/2017", endDate: "02/19/2017", duration: 3, progress: "50", priority: "High", approved: false },
                         { taskID: 16, taskName: "Development Task 2", startDate: "02/17/2017", endDate: "02/19/2017", duration: 3, progress: "50", priority: "Low", approved: true },
                         { taskID: 17, taskName: "Testing", startDate: "02/20/2017", endDate: "02/21/2017", duration: 2, progress: "0", priority: "Normal", approved: true },
                         { taskID: 18, taskName: "Bug fix", startDate: "02/24/2017", endDate: "02/25/2017", duration: 2, progress: "0", priority: "Critical", approved: false },
                         { taskID: 19, taskName: "Customer review meeting", startDate: "02/26/2017", endDate: "02/27/2017", duration: 2, progress: "0", priority: "High", approved: false },
                         { taskID: 20, taskName: "Phase 1 complete", startDate: "02/27/2017", endDate: "02/27/2017", duration: 0, priority: "Low", approved: true }

                     ]
                 }]
             },

             {
                 taskID: 21,
                 taskName: "Phase 2",
                 startDate: "02/17/2017",
                 endDate: "02/28/2017",
                 priority: "High",
                 approved: false,
                 duration: 12,
                 subtasks: [{
                     taskID: 22,
                     taskName: "Implementation Module 2",
                     startDate: "02/17/2017",
                     endDate: "02/28/2017",
                     priority: "Critical",
                     approved: false,
                     duration: 12,
                     subtasks: [
                         { taskID: 23, taskName: "Development Task 1", startDate: "02/17/2017", endDate: "02/20/2017", duration: 4, progress: "50", priority: "Normal", approved: true },
                         { taskID: 24, taskName: "Development Task 2", startDate: "02/17/2017", endDate: "02/20/2017", duration: 4, progress: "50", priority: "Critical", approved: true },
                         { taskID: 25, taskName: "Testing", startDate: "02/21/2017", endDate: "02/24/2017", duration: 2, progress: "0", priority: "High", approved: false },
                         { taskID: 26, taskName: "Bug fix", startDate: "02/25/2017", endDate: "02/26/2017", duration: 2, progress: "0", priority: "Low", approved: false },
                         { taskID: 27, taskName: "Customer review meeting", startDate: "02/27/2017", endDate: "02/28/2017", duration: 2, progress: "0", priority: "Critical", approved: true },
                         { taskID: 28, taskName: "Phase 2 complete", startDate: "02/28/2017", endDate: "02/28/2017", duration: 0, priority: "Normal", approved: false }

                     ]
                 }]
             },

             {
                 taskID: 29,
                 taskName: "Phase 3",
                 startDate: "02/17/2017",
                 endDate: "02/27/2017",
                 priority: "Normal",
                 approved: false,
                 duration: 11,
                 subtasks: [{
                     taskID: 30,
                     taskName: "Implementation Module 3",
                     startDate: "02/17/2017",
                     endDate: "02/27/2017",
                     priority: "High",
                     approved: false,
                     duration: 11,
                     subtasks: [
                         { taskID: 31, taskName: "Development Task 1", startDate: "02/17/2017", endDate: "02/19/2017", duration: 3, progress: "50", priority: "Low", approved: true },
                         { taskID: 32, taskName: "Development Task 2", startDate: "02/17/2017", endDate: "02/19/2017", duration: 3, progress: "50", priority: "Normal", approved: false },
                         { taskID: 33, taskName: "Testing", startDate: "02/20/2017", endDate: "02/21/2017", duration: 2, progress: "0", priority: "Critical", approved: true },
                         { taskID: 34, taskName: "Bug fix", startDate: "02/24/2017", endDate: "02/25/2017", duration: 2, progress: "0", priority: "High", approved: false },
                         { taskID: 35, taskName: "Customer review meeting", startDate: "02/26/2017", endDate: "02/27/2017", duration: 2, progress: "0", priority: "Normal", approved: true },
                         { taskID: 36, taskName: "Phase 3 complete", startDate: "02/27/2017", endDate: "02/27/2017", duration: 0, priority: "Critical", approved: false },

                     ]
                 }]
             }
	     ]
	 }
];
var toolbarItems = [ej.TreeGrid.ToolbarItems.Add,
                    ej.TreeGrid.ToolbarItems.Edit,
                    ej.TreeGrid.ToolbarItems.Delete,
                    ej.TreeGrid.ToolbarItems.Update,
                    ej.TreeGrid.ToolbarItems.Cancel,
                    ej.TreeGrid.ToolbarItems.ExpandAll,
                    ej.TreeGrid.ToolbarItems.CollapseAll
];

syncApp.controller('TreeGridCtrl', function ($scope) {
    $scope.data = treeGridData;
    $scope.columns = columns;
    $scope.Children = "subtasks";
    $scope.editSettings = { allowAdding: true, allowEditing: true, allowDeleting: true, editMode: "cellEditing" };
    $scope.toolbarSettings = { showToolbar: true, toolbarItems: toolbarItems };
    $scope.treeColumnIndex = 1;
});