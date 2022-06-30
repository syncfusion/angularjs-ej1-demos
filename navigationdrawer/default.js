syncApp.controller('NavigationDrawerCtrl', function ($scope, $compile) {
    $scope.headChange = function (e) {
        $("#butdrawer").parent().children("h4").text(e.text);
    }
})