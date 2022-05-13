syncApp.controller('SplitterCtrl', function($scope) {
    $scope.properties = [{ panesize: "35%", minsize: 30 }, { minsize: 30 }, { panesize: "35%", minsize: 30 }];
    $scope.sizeValue = 20;
    $scope.minValue = 20;
    $scope.maxValue = 100;
    var i = 0;
    $scope.expandpane = function () {
        var splitterObj = $("#outterSplitter").data("ejSplitter");
        splitterObj.expand(parseInt($('#paneindex').val()));
    }
    $scope.collapsepane = function () {
        var splitterObj = $("#outterSplitter").data("ejSplitter");
        splitterObj.collapse(parseInt($('#paneindex').val()));
    }
    $scope.add = function () {
        var splitterObj = $("#outterSplitter").data("ejSplitter");
        var property = {};
        property["paneSize"] = parseInt($('#size').val()) || 0;
        property["minSize"] = parseInt($('#min').val()) || 0;
        property["maxSize"] = parseInt($('#max').val()) || null;
        splitterObj.addItem("<div class = 'content'> New Pane " + (i++) + " </div> ", property, parseInt($('#index').val()));
        $("#index, #removepaneidx, #paneindex").ejNumericTextbox({ maxValue: splitterObj.panes.length - 1 });
    }
    $scope.removepane = function () {
        var splitterObj = $("#outterSplitter").data("ejSplitter");
        if ($("#" + splitterObj._id + ">.e-pane").length > 1)
            splitterObj.removeItem(parseInt($('#removepaneidx').val()));
        $("#index, #removepaneidx, #paneindex").ejNumericTextbox({ maxValue: splitterObj.panes.length - 1 });
    }
    $scope.validate = function () {
        var panesize = $("#size").ejNumericTextbox("model.value");
        var minsize = $("#min").ejNumericTextbox("model.value");
        var maxsize = $("#max").ejNumericTextbox("model.value");
        if (isNaN(panesize) || panesize < minsize || panesize > maxsize) {
            $("#error").html("Please enter the Pane size based on min and max size");
            $("#add").ejButton("disable");
        }
        else {
            $("#error").html("");
            $("#add").ejButton("enable");
        }
    }
})