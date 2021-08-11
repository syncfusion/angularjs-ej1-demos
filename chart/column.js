var obj = [
              { "XValue": "USA", "YValue1": 50, "YValue2": 70, "YValue3": 45 },
              { "XValue": "China", "YValue1": 40, "YValue2": 60, "YValue3": 55 },
              { "XValue": "Japan", "YValue1": 70, "YValue2": 60, "YValue3": 50 },
              { "XValue": "Australia", "YValue1": 60, "YValue2": 56, "YValue3": 40 },
              { "XValue": "France", "YValue1": 50, "YValue2": 45, "YValue3": 35 },
              { "XValue": "Germany", "YValue1": 40, "YValue2": 30, "YValue3": 22 },
              { "XValue": "Italy", "YValue1": 40, "YValue2": 35, "YValue3": 37 },
              { "XValue": "Sweden", "YValue1": 30, "YValue2": 35, "YValue3": 27 }
];
syncApp.controller('ChartCtrl', function ($scope) {
    $scope.dataSource = obj;
});