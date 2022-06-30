var dManager = ej.DataManager(window.ResourcesData).executeLocal(ej.Query().take(10));
syncApp.controller('ScheduleMultipleResourceCtrl', function ($scope) {
    $scope.appointments = angular.copy(dManager);
    $scope.setDate = new Date(2017, 5, 5);
    $scope.group = {
        resources: ["Owners"]
    };
    $scope.resourcedata = {
        dataSource: [
           { text: "Nancy", id: 1, groupId: 1, color: "#f8a398" },
           { text: "Steven", id: 3, groupId: 2, color: "#56ca85" },
           { text: "Michael", id: 5, groupId: 1, color: "#51a0ed" }
        ],
        text: "text", id: "id", groupId: "groupId", color: "color"
    };
});