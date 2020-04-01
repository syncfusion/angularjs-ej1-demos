var obj = [
              { "XValue": 2005, "YValue1": 28, "YValue2": 31, "YValue3": 36, "YValue4": 39 },
              { "XValue": 2006, "YValue1": 25, "YValue2": 28, "YValue3": 32, "YValue4": 36 },
              { "XValue": 2007, "YValue1": 26, "YValue2": 30, "YValue3": 34, "YValue4": 40 },
              { "XValue": 2008, "YValue1": 27, "YValue2": 36, "YValue3": 41, "YValue4": 44 },
              { "XValue": 2009, "YValue1": 32, "YValue2": 36, "YValue3": 42, "YValue4": 45 },
              { "XValue": 2010, "YValue1": 35, "YValue2": 39, "YValue3": 42, "YValue4": 48 },
              { "XValue": 2011, "YValue1": 30, "YValue2": 37, "YValue3": 43, "YValue4": 46 }
];
syncApp.controller('ChartCtrl', function ($scope) {
    $scope.dataSource = obj;
});