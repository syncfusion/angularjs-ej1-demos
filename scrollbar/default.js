syncApp.controller('ScrollbarCtrl', function ($scope, $window, $timeout) {
    angular.element($window).on('resize', function () {
        var scrollobj = $("#scrollcontent").data("ejScroller");
        $timeout(function () {
            scrollobj && scrollobj.refresh();
        }, 500);
    });
})