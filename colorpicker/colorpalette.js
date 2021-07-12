syncApp.controller('ColorPickerCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
    $scope.colorValue = "#9999ff";
    $timeout(function () {
        $scope.$apply();
    });
}]);