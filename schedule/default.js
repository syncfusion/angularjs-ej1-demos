var list = [
    { empid: "day", text: "Day", value: "day" },
    { empid: "week", text: "Week", value: "week" },
    { empid: "workweek", text: "Work Week", value: "workweek" },
    { empid: "month", text: "Month", value: "month" },
    { empid: "agenda", text: "Agenda", value: "agenda" }
];
var dManager = ej.DataManager(window.Default).executeLocal(ej.Query().take(10));
syncApp.controller('ScheduleCtrl', function ($scope) {
    $scope.appointments = angular.copy(dManager);
    $scope.dataList = list;
    $scope.setDate = new Date(2017, 5, 5);
    $scope.drpvalue = "week";
});