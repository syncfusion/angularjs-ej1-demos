syncApp.controller('MethodsCtrl', function ($scope) {
    var rte;
    $(function () {
        rte = $("#rteSample").data("ejRTE");
    });
    $scope.ongetHtmlString = function () {
        if (rte)
            alert(rte.getHtml());
    }
    $scope.ongetText = function () {
        if (rte)
            alert(rte.getText());
    }
    $scope.onexec = function () {
        if (rte)
            rte.executeCommand("bold", true);
    }
    $scope.oncmdStatus = function () {
        if (rte) {
            var status = rte.getCommandStatus("bold");
            alert(status);
        }
    }
    $scope.onDestoryRestore = function (args) {
        if (args.isChecked) {
            rte.destroy();
            rte = null;
        }
        else {
            $("#rteSample").ejRTE({ width: "100%", minWidth: "150px", isResponsive: true });
            rte = $("#rteSample").data("ejRTE");
        }
    }
    $scope.onSelectAll = function () {
        if (!ej.isNullOrUndefined(rte))
            rte.selectAll();
    }
    $scope.onSeletcRange = function () {
        if (!ej.isNullOrUndefined(rte)) {
            var range = rte.createRange();
            var liTag = rte.getDocument().getElementsByTagName("li");
            if (!rte._isIE8()) {
                range.setStart(liTag[2], 1);
                range.setEnd(liTag[4], 0);
            }
            else {
                range = rte.getDocument().body.createTextRange()
                range.moveToElementText(liTag[3]);
            }
            rte.selectRange(range);
        }
    }
    $scope.onPasteContent = function () {
        if (!ej.isNullOrUndefined(rte)) {
            select = rte.getSelectedHtml();
            rte.pasteContent("<p style='background-color:yellow;color:skyblue'> " + select + " </p>");
        }
    }
});



