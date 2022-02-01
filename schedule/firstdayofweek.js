var dManager = ej.DataManager(window.Default).executeLocal(ej.Query().take(10));
syncApp.controller('ScheduleDayofweekCtrl', function ($scope) {
    $scope.appointments = angular.copy(dManager);
    $scope.setDate = new Date(2017, 5, 5);
    $scope.workWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    $scope.selectedworkweek = [1, 2, 3, 4, 5];
});

function dayofweekChange(args) {
    $("#DayofweekSchedule").ejSchedule({ firstDayOfWeek: args.selectedValue });
}

function workweekChange(args) {
    var workweek = [];
    var array = args.model.selectedItems.sort();
    for (i = 0; i < args.model.selectedItems.length; i++) {
        workweek.push(args.model.dataSource[array[i]]);
    }
    $("#DayofweekSchedule").ejSchedule({ workWeek: workweek });
}