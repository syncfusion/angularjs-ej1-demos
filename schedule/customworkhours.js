var dManager = ej.DataManager(window.ResourcesData).executeLocal(ej.Query().take(10));
syncApp.controller('ScheduleResourceWorkHoursCtrl', function ($scope) {
    $scope.appointments = angular.copy(dManager);
    $scope.setDate = new Date(2017, 5, 5);
    $scope.group = {
        resources: ["Rooms", "Owners"]
    };
    $scope.workWeeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    $scope.nancyDays = [1, 3, 5];
    $scope.michaelDays = [0, 2, 4, 6];
    $scope.stevenDays = [2, 4];
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
           { text: "Nancy", id: 1, groupId: 1, color: "#ffaa00", on: 10, off: 18, customDays: ["monday", "wednesday", "friday"] },
           { text: "Steven", id: 3, groupId: 2, color: "#f8a398", on: 6, off: 10, customDays: ["tuesday", "thursday"] },
           { text: "Michael", id: 5, groupId: 1, color: "#7499e1", on: 11, off: 15, customDays: ["sunday", "tuesday", "thursday", "saturday"] }
        ],
        text: "text", id: "id", groupId: "groupId", color: "color", start: "on", end: "off", workWeek: "customDays"
    };
    $scope.onWorkHoursChange = function () {
        var weekDays = ej.cultureObject.calendar.days.names;
        var nancydays = $("#nancyworkdays").data("ejDropDownList");
        var michaeldays = $("#michaelworkdays").data("ejDropDownList");
        var stevendays = $("#stevenworkdays").data("ejDropDownList");

        var nancy = nancydays.model.selectedItems.sort();
        var michael = michaeldays.model.selectedItems.sort();
        var steven = stevendays.model.selectedItems.sort();

        var nancyWorkweek = [], michaelWorkweek = [], stevenWorkweek = [];
        for (i = 0; i < nancy.length; i++) { nancyWorkweek.push(weekDays[nancy[i]].toLowerCase()); }
        for (i = 0; i < michael.length; i++) { michaelWorkweek.push(weekDays[michael[i]].toLowerCase()); }
        for (i = 0; i < steven.length; i++) { stevenWorkweek.push(weekDays[steven[i]].toLowerCase()); }

        var schObj = $("#WorkHoursSchedule").data("ejSchedule");
        if (nancyWorkweek.length == 0) nancyWorkweek = schObj.model.workWeek;
        if (michaelWorkweek.length == 0) michaelWorkweek = schObj.model.workWeek;
        if (stevenWorkweek.length == 0) stevenWorkweek = schObj.model.workWeek;

        var nancyStart = parseInt($("#nancyhourstart").val());
        var nancyEnd = parseInt($("#nancyhourend").val());
        var michaelStart = parseInt($("#michaelhourstart").val());
        var michaelEnd = parseInt($("#michaelhourend").val());
        var stevenStart = parseInt($("#stevenhourstart").val());
        var stevenEnd = parseInt($("#stevenhourend").val());

        $("#WorkHoursSchedule").ejSchedule({
            resources: [{
                field: "roomId",
                title: "Room",
                name: "Rooms", allowMultiple: false,
                resourceSettings: {
                    dataSource: [
                        { text: "ROOM 1", id: 1, groupId: 1, color: "#cb6bb2" },
                        { text: "ROOM 2", id: 2, groupId: 1, color: "#56ca85" }
                    ],
                    text: "text", id: "id", groupId: "groupId", color: "color"
                }
            }, {
                field: "ownerId",
                title: "Owner",
                name: "Owners", allowMultiple: true,
                resourceSettings: {
                    dataSource: [
                        { text: "Nancy", id: 1, groupId: 1, color: "#ffaa00", on: nancyStart, off: nancyEnd, customDays: nancyWorkweek },
                        { text: "Steven", id: 3, groupId: 2, color: "#f8a398", on: stevenStart, off: stevenEnd, customDays: stevenWorkweek },
                        { text: "Michael", id: 5, groupId: 1, color: "#7499e1", on: michaelStart, off: michaelEnd, customDays: michaelWorkweek }
                    ],
                    text: "text", id: "id", groupId: "groupId", color: "color", start: "on", end: "off", workWeek: "customDays"
                }
            }]
        });
    }
});