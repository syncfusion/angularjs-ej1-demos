
syncApp.controller('RotatCtrl', function($scope) {
    $scope.first = [{ text: "1" }];
    $scope.second = [{ text: "1" }, { text: "2" }];
    $scope.third = [{ text: "1" }, { text: "2" }, { text: "3" }];
    $scope.onPagerChange = function (args) {
        var slideObj = $("#sliderContent").data("ejRotator");
        slideObj.option({ pagerPosition: args.value });
    }
    $scope.onAnimationChange = function (args) {
        var slideObj = $("#sliderContent").data("ejRotator");
        slideObj.option({ animationType: args.value });
    }
    $scope.onDisplayChange = function (args) {
        var slideObj = $("#sliderContent").data("ejRotator");
        var dropObj = $('#itemMove').data('ejDropDownList');
        slideObj.option({ displayItemsCount: args.value });
        if (args.value == 1) {
            dropObj.setModel({ dataSource: $scope.first, value: args.value });
            slideObj.option({ navigateSteps: args.value });
        }
        else if (args.value == 2) {
            dropObj.setModel({ dataSource: $scope.second, value: args.value });
            slideObj.option({ navigateSteps: args.value });
        }
        else {
            dropObj.setModel({ dataSource: $scope.third, value: args.value });
            slideObj.option({ navigateSteps: args.value });
        }
    }
    $scope.onMoveChange = function (args) {
        var slideObj = $("#sliderContent").data("ejRotator");
        slideObj.option({ navigateSteps: args.text });
    }
    $scope.onOrientationChange = function (args) {
        var slideObj = $("#sliderContent").data("ejRotator");
        slideObj.option({ orientation: args.value });
    }
    $scope.onAutoplay = function (args) {
        var slideObj = $("#sliderContent").data("ejRotator");
        slideObj.option({ showPlayButton: args.isChecked });
    };
    $scope.onPager = function (args) {
        var slideObj = $("#sliderContent").data("ejRotator");
        slideObj.option({ showPager: args.isChecked });
    };
    $scope.EnableDisable = function (args) {
        var slideObj = $("#sliderContent").data("ejRotator");
        if (args.isChecked)
            slideObj.enable();
        else
            slideObj.disable();
    };

    $scope.previous = function (e) {
        var slideObj = $("#sliderContent").data("ejRotator");
        slideObj.slidePrevious();
    }
    $scope.next = function () {
        var slideObj = $("#sliderContent").data("ejRotator");
        slideObj.slideNext();
    }
    $scope.getValue = function () {
        var slideObj = $("#sliderContent").data("ejRotator");
        alert("Current Slide Index : " + slideObj.getIndex());
    }
});