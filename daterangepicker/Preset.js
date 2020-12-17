syncApp.controller('daterangepickercontroller', function ($scope) {
    $scope.width = "100%";
    $scope.ranges = [
        { label: "Today", range: [new Date(), new Date()] },
        { label: "Last 1 Week", range: [new Date(new Date().setDate(new Date().getDate() - 7)), new Date()] },
        { label: "Last 1 Month", range: [new Date(new Date().setMonth(new Date().getMonth() - 1)), new Date()] },
        { label: "Last 2 Month", range: [new Date(new Date().setMonth(new Date().getMonth() - 2)), new Date()] },


    ];
});