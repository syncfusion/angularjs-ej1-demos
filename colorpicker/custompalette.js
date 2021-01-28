var customValues = ["ffffff", "ffccff", "ff99ff", "ff66ff", "ff33ff", "ff00ff", "ccffff", "ccccff",
                         "cc99ff", "cc66ff", "cc33ff", "cc00ff", "99ffff", "99ccff", "9999ff", "9966ff",
                         "9933ff", "9900ff", "ffffcc", "ffcccc"
];
syncApp.controller('ColorPickerCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
    $scope.colorValue = "#9999ff";
    $scope.customColors = customValues;
    $timeout(function () {
        $scope.$apply();
    });
}]);