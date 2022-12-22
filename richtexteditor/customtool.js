
syncApp.controller('MethodsCtrl', function ($scope) {
    $scope.tools = {
        customTools: [{
            name: "codeInsert",
            tooltip: "Insert code snippets ",
            css: "codeInsert",
            text: "codeInsert",
            action: function () {
                $("#srcCode").val("").show();
                $("#cutomSourceCode").ejDialog("open");
                $("#srcCode").focus();
            }
        }]
    }
    $scope.toolslist = ["customTools"];
    $scope.customBtnClick = function (args) {
        if (this._id == "src_insert") {
            var htmlEditor = CodeMirror.fromTextArea($("#srcCode")[0], {
                lineNumbers: false,
                mode: $("#languageList").val()
            });
            var codeTags = $("#cutomSourceCode").find(".CodeMirror");
            codeTags.find(".CodeMirror-cursor").remove();
            rteObj.executeCommand("inserthtml", codeTags[0].outerHTML);
            codeTags.remove();
        }
        $("#cutomSourceCode").ejDialog("close");
    }
});