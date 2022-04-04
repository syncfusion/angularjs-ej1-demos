var dManager = ej.DataManager(window.Default).executeLocal(ej.Query().take(10));
syncApp.controller('ScheduleViewsCtrl', function ($scope) {
    $scope.appointments = angular.copy(dManager);
    $scope.setDate = new Date(2017, 5, 5);
    $scope.renderdate = { start: new Date(2017, 5, 5), end: new Date(2017, 5, 8) };
    $scope.view = ["customview"];
    $scope.views = ["Agenda", "Month", "Day", "Week", "WorkWeek", "CustomView"];
});