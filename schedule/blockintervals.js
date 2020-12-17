var dManager = ej.DataManager(window.BlockDayApps).executeLocal(ej.Query().take(10));
syncApp.controller('ScheduleBlockIntervalCtrl', function ($scope, $rootScope) {
    $scope.appointments = angular.copy(dManager);
    $scope.setDate = new Date(2017, 5, 5);
    $scope.blockEnable = true;
    $scope.blockData = window.blockTime;
    $scope.group = {
        resources: ["Owners"]
    };
    $scope.resourcedata = {
        dataSource: [
          { text: "Airline 1", id: 1, groupId: 1, color: "#f8a398" },
          { text: "Airline 2", id: 3, groupId: 2, color: "#56ca85" },
          { text: "Airline 3", id: 5, groupId: 1, color: "#51a0ed" }
        ],
        text: "text", id: "id", groupId: "groupId", color: "color"
    };
});
