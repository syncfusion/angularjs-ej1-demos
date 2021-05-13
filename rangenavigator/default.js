function GetData() {
    var series1 = [];
    var value = 100;
    var value1 = 120;
    for (var i = 1; i < 730; i++) {

        if (Math.random() > .5) {
            value += Math.random();
            value1 += Math.random();
        } else {
            value -= Math.random();
            value1 -= Math.random();
        }
        var point1 = { XValue: new Date(2010, 0, i), YValue: value, YValue1: value1 };
        series1.push(point1);
    }

    data = { Open: series1 };
    return data;
}
var data = GetData();


syncApp.controller('RangeNavigator', function ($scope) {
        $scope.dataSource = data.Open;
        $scope.startRange = new Date('1/5/2010');
        $scope.endRange = new Date('1/10/2011');
        $scope.minDate = new Date('1/1/2010');
        $scope.maxDate = new Date('12/10/2011');
        $scope.enable = true;
    });