var list = [
  { text: "snowfall", url: "content/images/rotator/snowfall.jpg" },
  { text: "tablet", url: "content/images/rotator/tablet.jpg" },
  { text: "nature", url: "content/images/rotator/nature.jpg" },
  { text: "card", url: "content/images/rotator/card.jpg" },
  { text: "bird", url: "content/images/rotator/bird.jpg" },
  { text: "wheat", url: "content/images/rotator/wheat.jpg" },
  { text: "night", url: "content/images/rotator/night.jpg" }];

syncApp.controller('RotatCtrl', function ($scope) {
    $scope.dataList = list;
});