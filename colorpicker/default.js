syncApp.controller('ColorPickerCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
    $scope.colorValue = "#278787";
    $scope.opacity = "100";
    $scope.modelType = "picker";
    $timeout(function () {
        $scope.$apply();
    });
}]);