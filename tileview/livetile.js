 

syncApp.controller('TileCtrl', function ($scope, $window, $timeout) {
	   $scope.liveImage1 = ['content/images/tile/windows/alerts.png', 'content/images/tile/windows/bing.png', 'content/images/tile/windows/camera.png'];
       $scope.liveImage2 = ['content/images/tile/windows/alerts.png', 'content/images/tile/windows/bing.png', 'content/images/tile/windows/camera.png'];
       $scope.liveImage3 = ['content/images/tile/windows/people_1.png', 'content/images/tile/windows/people_2.png', 'content/images/tile/windows/people_3.png'];
       $scope.liveImage4 = ['content/images/tile/windows/pictures.png', 'content/images/tile/windows/photo_1.png', 'content/images/tile/windows/photo_2.png', 'content/images/tile/windows/pictures.png', 'content/images/tile/windows/photo_1.png'];
       $scope.liveImage5 = ['content/images/tile/windows/weather.png', 'content/images/tile/windows/weather_1.png', 'content/images/tile/windows/weather_2.png'];
       $scope.success = function (args) {
           $compile(args.content)($scope);
           $scope.positionCenter();
       };
       $scope.tabActiveItem = function () {
           $scope.positionCenter();
       }
       $scope.positionCenter = function () {
           if ($("#scrollTarget").parent(".e-content").css("display") != "none") {
               var x = ($("#tileTabContent").outerWidth() - $("#groupTile").outerWidth()) / 2;
               $("#groupTile").css("left", x);
           }
           if ($("#liveTilescrollTarget").parent(".e-content").css("display") != "none") {
               var liveX = ($("#liveTileTabContent").outerWidth() - $("#groupLiveTile").outerWidth()) / 2;
               $("#groupLiveTile").css("left", liveX);
           }
       };
});