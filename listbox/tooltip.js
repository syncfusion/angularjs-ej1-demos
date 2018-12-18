
syncApp.controller('ListBoxTooltipCtrl', function ($scope) {
    $scope.dataList = [
           { name: "Erik Linden", desig: "Representative" }, { name: "John Linden", desig: "Manager" },
           { name: "Louis", desig: "CEO" }, { name: "Lawrence", desig: "President" },
           { name: "Abraham", desig: "Vice-President" }, { name: "Philip", desig: "Director" },
           { name: "James", desig: "Founder" }, { name: "Kennedy", desig: "Co-Founder" },
    ];
    $scope.text = "name";
    $scope.tooltiptext = "desig";
});
