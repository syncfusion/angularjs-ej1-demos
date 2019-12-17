function GetData() {
    var series1 = [];
    var value = 100;
    var value1 = 120;
    for (var i = 0; i < 351; i++) {

        if (Math.random() > .5) {
            value += Math.random();
            value1 += Math.random();
        } else {
            value -= Math.random();
            value1 -= Math.random();
        }
        var point1 = { XValue: i, YValue: value, YValue1: value1 };
        series1.push(point1);
    }

    data = { Open: series1 };
    return data;
}
var data = GetData();


syncApp.controller('RangeNavigator', function ($scope) {
    $scope.dataSource = data.Open;
    $scope.startRange = 100;
    $scope.endRange = 150;
    $scope.minDate = 1;
    $scope.maxDate = 729;
    $scope.enable = true;
});