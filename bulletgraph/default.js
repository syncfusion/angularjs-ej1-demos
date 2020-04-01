syncApp.controller('angularBullet', function ($scope) {
    $scope.nvalue = 5;
    $scope.CMvalue = 7;
    $scope.nload = 'loadBulletTheme';
});
$("#txtValue").keyup(function () {
    var txtval = parseInt(document.getElementById("txtValue").value);
    if (10 < txtval) {
        document.getElementById("txtValue").value = 10;
        $("#bulletCore").ejBulletGraph({ "value": 10 })
    }
    else if (0 > txtval) {
        document.getElementById("txtValue").value = 0;
        $("#bulletCore").ejBulletGraph({ "value": 0 })
    }
});
$("#txtcmpValue").keyup(function () {
    var txtval = parseInt(document.getElementById("txtcmpValue").value);
    if (10 < txtval) {
        document.getElementById("txtcmpValue").value = 10;
        $("#bulletCore").ejBulletGraph({ "comparativeMeasureValue": 10 })
    }
    else if (0 > txtval) {
        document.getElementById("txtcmpValue").value = 0;
        $("#bulletCore").ejBulletGraph({ "comparativeMeasureValue": 0 })
    }

});