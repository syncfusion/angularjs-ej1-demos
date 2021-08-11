var dManager = ej.DataManager(window.Default).executeLocal(ej.Query().take(10));
syncApp.controller('ScheduleCategorizeCtrl', function ($scope) {
    $scope.appointments = angular.copy(dManager);
    $scope.setDate = new Date(2017, 5, 5);
    $scope.categorizedata = [
        { texts: "Blue Category", id: 1, color: "#43b496", fontColor: "#ffffff" },
        { texts: "Green Category", id: 2, color: "#7f993e", fontColor: "#ffffff" },
        { texts: "Orange Category", id: 3, color: "#cc8638", fontColor: "#ffffff" },
        { texts: "Purple Category", id: 4, color: "#ab54a0", fontColor: "#ffffff" },
        { texts: "Red Category", id: 5, color: "#dd654e", fontColor: "#ffffff" },
        { texts: "Yellow Category", id: 6, color: "#d0af2b", fontColor: "#ffffff" }
    ];
});