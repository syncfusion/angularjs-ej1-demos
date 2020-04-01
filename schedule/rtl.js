var dManager = ej.DataManager(window.RTL).executeLocal(ej.Query().take(10));
syncApp.controller('ScheduleRtlCtrl', function ($scope) {
    $scope.appointments = angular.copy(dManager);
    $scope.setDate = new Date(2017, 5, 5);
});