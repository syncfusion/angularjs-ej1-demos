var dManager = ej.DataManager(window.HorizontalResourcesData).executeLocal(ej.Query().take(10));
syncApp.controller('ScheduleResourceGroupCtrl', function ($scope) {
    $scope.appointments = angular.copy(dManager);
    $scope.setDate = new Date(2017, 5, 5);
    $scope.group = {
        resources: ["Rooms", "Owners"]
    };
    $scope.resourcedata1 = {
        dataSource: [
           { text: "ROOM 1", id: 1, groupId: 1, color: "#cb6bb2" },
           { text: "ROOM 2", id: 2, groupId: 1, color: "#56ca85" },
           { text: "ROOM 3", id: 3, groupId: 1, color: "#f8a398" }
        ],
        text: "text", id: "id", groupId: "groupId", color: "color"
    };
    $scope.resourcedata2 = {
        dataSource: [
           { text: "Nancy", id: 1, groupId: 1, color: "#ffaa00" },
           { text: "Steven", id: 3, groupId: 2, color: "#f8a398" },
           { text: "Michael", id: 5, groupId: 1, color: "#51a0ed" },
           { text: "Laura", id: 7, groupId: 2, color: "#ffaa00" },
           { text: "Robert", id: 8, groupId: 1, color: "#f8a398" },
           { text: "Janet", id: 4, groupId: 2, color: "#51a0ed" },
           { text: "Milan", id: 13, groupId: 3, color: "#99ff99" },
           { text: "Paul", id: 15, groupId: 3, color: "#cc99ff" }
        ],
        text: "text", id: "id", groupId: "groupId", color: "color"
    };
});