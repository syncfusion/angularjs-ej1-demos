var treeData = [
               { id: 1, name: "UK", cls: "uk-style", hasChild: true, expanded: true },
               { id: 2, pid: 1, imgId: "1", name: "Steven John", city: "London", phone: "555-5665-2323" },
               { id: 3, name: "USA", cls: "usa-style", hasChild: true, expanded: true },
               { id: 5, pid: 3, imgId: "2", name: "Andrew", city: "Capital way", phone: "934-8374-2455" },
               { id: 4, pid: 3, imgId: "3", name: "Angelica", city: "Dayton", phone: "988-4243-0806" }
];

syncApp.controller('TreeCtrl', function ($scope) {
    $scope.dataList = treeData;
});



