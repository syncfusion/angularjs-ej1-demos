syncApp.controller('scrollcontroller', function ($scope) {
    var scrollobj = $("#scrollcontent").data("ejScroller");
    $scope.destroy = function (args) {
        $(window).unbind('resize', $scope.onResizeEvent);
    }
    $scope.onResizeEvent = function () {
        var scrollobj = $("#scrollcontent").data("ejScroller");
        scrollobj && scrollobj.refresh();
    }
    $(window).bind('resize', $scope.onResizeEvent);

    angular.element(document).ready(function () {
        $scope.onResizeEvent();
    });
    $scope.targetpane = '#sampleContent3',
    $scope.destroy = function (args) {
        $(window).unbind('resize', $scope.onResizeEvent);
    }
});
