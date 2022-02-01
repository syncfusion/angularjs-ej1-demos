syncApp.controller('GroupButtonCtrl', function ($scope) {
    var groupdata = [
           { text: "Day", contentType: "textonly" },
           { text: "Week", contentType: "textonly" },
           { text: "Month", contentType: "textonly", selected: "selected" },
           { text: "Year", contentType: "textonly" }];
    $scope.dataSource = groupdata;
})