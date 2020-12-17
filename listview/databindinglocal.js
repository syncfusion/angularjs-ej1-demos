
syncApp.controller('ListViewDataBindingCtrl', function ($scope, $rootScope) {
    $scope.datalist = [{ "Texts": "Discover Music" },
    { "Texts": "Sales and Events" },
    { "Texts": "Categories" },
    { "Texts": "MP3 Albums" },
    { "Texts": "More in Music" }];
    $scope.settings = {
        "text": "Texts"
    };
});