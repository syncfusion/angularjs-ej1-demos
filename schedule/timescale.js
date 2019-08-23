var dManager = ej.DataManager(window.Default).executeLocal(ej.Query().take(10));
syncApp.controller('ScheduleTimescaleCtrl', function ($scope) {
    $scope.appointments = angular.copy(dManager);
    $scope.setDate = new Date(2017, 5, 5);
    $scope.minorslotlist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    $scope.majorslotlist = [60, 30, 20, 12, 10, 120, 180, 240];
});
function changeTime(args) {
    $("#TimescaleSchedule").ejSchedule({
        timeScale: {
            minorSlotCount: parseInt($("#minorslot").ejDropDownList("model.value")),
            majorSlot: parseInt($("#majorslot").ejDropDownList("model.value"))
        }
    });
}