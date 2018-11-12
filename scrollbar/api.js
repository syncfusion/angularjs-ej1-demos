syncApp.controller('ScrollbarCtrl', function ($scope, $window, $timeout) {
    angular.element($window).on('resize', function () {
        var scrollobj = $("#scrollcontent").data("ejScroller");
        $timeout(function () {
            scrollobj && scrollobj.refresh();
            $(window).bind('resize', $scope.onResizeEvent);
        }, 500);
    });

    var scrollobj = $("#scrollcontent").data("ejScroller");


    $scope.destroy = function (args) {
        $(window).unbind('resize', $scope.onResizeEvent);
    },
    $scope.onResizeEvent = function (args) {
        var scrollobj = $("#scrollcontent").data("ejScroller");
        if ($("#scrollcontent").data("ejScroller"))
            scrollobj.refresh();
    },
    ($scope).setScrollX = function (args) {
        var scrollobj = $("#scrollcontent").data("ejScroller");
        scrollobj.scrollX(args.value);
    },
($scope).setScrollY = function (args) {
    var scrollobj = $("#scrollcontent").data("ejScroller");
    scrollobj.scrollY(args.value);
},
($scope).onEnabled = function (args) {
    var scrollobj = $("#scrollcontent").data("ejScroller");
    if (args.isChecked) {
        scrollobj.disable();
    }
    else {
        scrollobj.enable();
    }
},
($scope).onDestroyRestore = function (args) {
    var scrollobj = $("#scrollcontent").data("ejScroller");
    if (args.isChecked) {
        scrollobj.destroy();
    }
    else {
        $("#scrollcontent").ejScroller({ height: "300px", width: "100%" });
       var scrollobj = $("#scrollcontent").data("ejScroller");
    }
},
($scope).enableOrDisableButtons = function (argsVal) {
    if (argsVal) {
        $(".cols-prop-area input.e-togglebutton[id!='destroy']").ejToggleButton("enable");
        $(".cols-prop-area input.e-numerictextbox").ejNumericTextbox("enable");
    }
    else {
        $(".cols-prop-area input.e-togglebutton[id!='destroy']").ejToggleButton("disable");
        $(".cols-prop-area input.e-numerictextbox").ejNumericTextbox("disable");
    }
},
($scope).onAutoHide = function (args) {
   var scrollobj = $("#scrollcontent").data("ejScroller");
    if (args.isChecked) {
        scrollobj.option("autoHide", true);
    }
    else {
        scrollobj.option("autoHide", false);
    }
}

});
