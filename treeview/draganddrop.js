var LocalData = [
                { id: 1, name: " ASP.NET MVC Team", hasChild: true, expanded: true },
                   { id: 2, pid: 1, name: "Smith" },
                   { id: 3, pid: 1, name: "Johnson" },
                   { id: 4, pid: 1, name: "Anderson" },
                   { id: 7, name: "Windows Team", hasChild: true, expanded: true },
                   { id: 8, pid: 7, name: "Clark" },
                   { id: 9, pid: 7, name: "Wright" },
                   { id: 10, pid: 7, name: "Lopez" },
                   { id: 11, name: "Web Team", hasChild: true },
                   { id: 12, pid: 11, name: "Joshua" },
                   { id: 13, pid: 11, name: "Matthew" },
                   { id: 14, pid: 11, name: "David" },
                   { id: 16, name: "Build Team", hasChild: true },
                   { id: 17, pid: 16, name: "Justin" },
                   { id: 18, pid: 16, name: "Ryan" },
                   { id: 19, pid: 16, name: "Robert" },
                   { id: 21, name: " WPF Team", hasChild: true },
                   { id: 22, pid: 21, name: "Brown" },
                   { id: 23, pid: 21, name: "Redeem a Gift Card" },
                   { id: 24, pid: 21, name: "Johnson" },
                   { id: 25, pid: 21, name: "Miller" }];
var LocalData1 = [
                { id: 101, name: "WinRT Team", hasChild: true, expanded: true },
                   { id: 102, pid: 101, name: "Valentina" },
                   { id: 103, pid: 101, name: "Williams" },
                   { id: 104, pid: 101, name: "Jones" },
                   { id: 107, name: "Website Team", hasChild: true, expanded: true },
                   { id: 108, pid: 107, name: "Thomas" },
                   { id: 109, pid: 107, name: "Rodriguez" },
                   { id: 110, pid: 107, name: "Michael" },
                   { id: 111, name: "Support Team", hasChild: true },
                   { id: 112, pid: 111, name: "Christopher" },
                   { id: 113, pid: 111, name: "Williams Smith" },
                   { id: 114, pid: 111, name: "Jack" }];

syncApp.controller('TreeCtrl', function ($scope) {
    $scope.dataList = LocalData;
    $scope.dataList1=LocalData1
});