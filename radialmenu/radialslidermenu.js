syncApp.controller('RadialMenuSliderCtrl', function ($scope, $compile) {

    var rteObj, rteEle = $("#rteSample1"), radialEle = $('#defaultradialmenu'), action = 0, forRedo = 0;
	$("#radialtarget1").parent().css("position", "relative");
    $scope.success = function (args) {
        $compile(args.content)($scope);
    };
    $scope.ticksValue = [0, 2, 4, 6, 8, 10, 12, 14]


    $scope.radialShow = function (e) {
        var target = $("#radialtarget1"), radialRadius = 150, radialDiameter = 2 * radialRadius,
            // To get Iframe positions
            iframeY = e.event.clientY, iframeX = e.event.clientX,
            // To set Radial Menu position within target
            x = iframeX > target.width() - radialRadius ? target.width() - radialDiameter : (iframeX > radialRadius ? iframeX - radialRadius : 0),
            y = iframeY > target.height() - radialRadius ? target.height() - radialDiameter : (iframeY > radialRadius ? iframeY - radialRadius : 0);
            radialEle.ejRadialMenu("setPosition",x,y); 
		    radialEle.focus();   
            rteObj = rteEle.data("ejRTE");
    }
    $scope.font=function(e) {
        if (!ej.isNullOrUndefined(e.value))
            var val = e.value.toString();
        else {
            var size = e.text.split('Font');
            var val = size[1];
        }
        rteObj.executeCommand("fontSize", val);
    }
    $scope.rteChange = function (e) {
        radialEle.ejRadialMenu("enableItem", "Undo");
    }

    $scope.bold = function (e) {
        rteObj.executeCommand("copy");
    }
    $scope.paste = function (e) {
        if (ej.browserInfo().name == 'msie')
            rteObj.executeCommand("paste");
        else
            rteObj._openAlert("Your browser doesn't support direct access to the clipboard. Please use the Ctrl+V keyboard shortcut instead of paste opertion.");
    }
    $scope.italic = function (e) {
        rteObj.executeCommand("italic");
    }
    $scope.bold = function (e) {
        rteObj.executeCommand("bold");
    }
    $scope.center = function center(e) {
        rteObj.executeCommand("justifyCenter");
    }
    $scope.left = function left(e) {
        rteObj.executeCommand("justifyLeft");
    }
    $scope.right = function right(e) {
        rteObj.executeCommand("justifyRight");
    }
    $scope.undo = function undo(e) {
        rteObj.executeCommand("undo");
        radialEle.ejRadialMenu("disableItem", "Undo");
        radialEle.ejRadialMenu("enableItem", "Redo");
    }
    $scope.redo = function redo(e) {
        rteObj.executeCommand("redo");
        radialEle.ejRadialMenu("disableItem", "Redo");
        radialEle.ejRadialMenu("enableItem", "Undo");
    }
    $scope.unorderedList = function unorderedList(e) {
        rteObj.executeCommand("insertunorderedList");
    }
    $scope.orderedList = function orderedList(e) {
        rteObj.executeCommand("insertorderedList");
    }
})