syncApp.controller('RadialMenuCtrl', function ($scope, $compile) {

    var rteObj, rteEle = $("#rteSample1"), radialEle = $('#defaultradialmenu'), action = 0, forRedo = 0;
	$("#radialtarget1").parent().css("position", "relative");
    $scope.success = function (args) {
        $compile(args.content)($scope);
    };


    $scope.radialShow = function (e) {
        var target = $("#radialtarget1"), radialRadius = 150, radialDiameter = 2 * radialRadius,
            // To get Iframe positions
            iframeY = e.event.clientY, iframeX = e.event.clientX,
            // To set Radial Menu position within target
            x = iframeX > target.width() - radialRadius ? target.width() - radialDiameter : (iframeX > radialRadius ? iframeX - radialRadius : 0),
            y = iframeY > target.height() - radialRadius ? target.height() - radialDiameter : (iframeY > radialRadius ? iframeY - radialRadius : 0);
            radialEle.ejRadialMenu("setPosition", x, y);
            radialEle.focus();
            rteObj = $("#rteSample1").data("ejRTE");
    }
    $scope.rteChange = function (e) {
        radialEle.ejRadialMenu("enableItem", "Undo");
    }
    $scope.bold = function (e) {
        rteObj.executeCommand("bold");
        data = rteObj._getSelectedHtmlString() ? true : false;
        if (data) action = 1;
        forRedo = action;
        radialEle.focus();
    }
    $scope.italic = function (e) {
        rteObj.executeCommand("italic");
        data = rteObj._getSelectedHtmlString() ? true : false;
        if (data) action = 1;
        forRedo = action;
        radialEle.focus();
    }
    $scope.undo = function (e) {
        rteObj.executeCommand("undo");
        action -= 1;
        if (action == 0)
            radialEle.ejRadialMenu("disableItem", "Undo");
        radialEle.ejRadialMenu("enableItem", "Redo");
        radialEle.focus();
    }
    $scope.redo = function (e) {
        rteObj.executeCommand("redo");
        action = 1;
        if (forRedo == action) radialEle.ejRadialMenu("disableItem", "Redo");
        radialEle.ejRadialMenu("enableItem", "Undo");
        radialEle.focus();
    }
})

