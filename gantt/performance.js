var data = [];
var x = 0;
for (var i = 0; i < 556; i++) {
    var parent = {};
    parent["TaskId"] = ++x;
    parent["TaskName"] = "Task " + x;
    parent["StartDate"] = new Date("01/03/2017");
    parent["EndDate"] = new Date("01/08/2017");
    parent["Duration"] = 5;
    parent["Status"] = Math.round(Math.random() * 100);
    var d = [];
    for (var j = 1; j < 3; j++) {
        child = {};
        child["TaskId"] = ++x;
        child["TaskName"] = "Task " + x;
        child["StartDate"] = new Date("01/09/2017");
        child["EndDate"] = new Date("01/13/2017");
        child["Duration"] = 5;
        child["Status"] = Math.round(Math.random() * 100);
        var y = [];
        for (var k = 1; k < 4; k++) {
            c = {};
            c["TaskId"] = ++x;
            c["TaskName"] = "Task " + x;
            c["StartDate"] = new Date("01/09/2017");
            c["EndDate"] = new Date("01/13/2017");
            c["Duration"] = 5;
            c["Status"] = Math.round(Math.random() * 100);
            y.push(c);
        }
        child["Child"] = y;
        d.push(child);
    }
    parent["Child"] = d;
    data[i] = parent;
};


syncApp.controller('GanttCtrl', function ($scope) {
    $scope.data = data;   
});