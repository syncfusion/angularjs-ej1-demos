syncApp.controller('DigitalGaugeCtrl', function ($scope) {
       $scope.nvalue = "syncfusion";
       $scope.check = function () {
           $scope.nvalue = $scope.nvalue.toString().replace(/[^a-z0-9,.():!%]/ig, '');
       };

   });