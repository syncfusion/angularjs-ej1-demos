var dManager = ej.DataManager(window.Default).executeLocal(ej.Query().take(10));
syncApp.controller('ScheduleHorizontalCtrl', function ($scope) {
    $scope.appointments = angular.copy(dManager);
    $scope.setDate = new Date(2017, 5, 5);
});