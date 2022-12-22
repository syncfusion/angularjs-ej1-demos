var dManager = ej.DataManager(window.Localization).executeLocal(ej.Query().take(10));
syncApp.controller('ScheduleLocaleCtrl', function ($scope) {
    $scope.appointments = angular.copy(dManager);
    $scope.setDate = new Date(2017, 5, 5);
    $scope.dataList = ["en-US", "vi-VN", "fr-FR"];
});