syncApp.controller('ColorPickerCtrl', function ($scope) {
    $scope.value = '#356734';
    $("#color-value").change(function () {
        var ColorObj = $("#picker").data('ejColorPicker');
        if ($("#color-value").val() !== "") {
            if ($("#color-value").val().length == 4 || $("#color-value").val().length == 7)
                ColorObj.option('value', $("#color-value").val());
        }
    });
    $scope.onpreview = function (args) {

        var ColorObj = $("#picker").data('ejColorPicker');
        if (args.isChecked) ColorObj.option('showPreview', false);
        else ColorObj.option('showPreview', true);
    },
$scope.onEnabled = function (args) {
        var ColorObj = $("#picker").data('ejColorPicker');
        if (args.isChecked) {
            ColorObj.option('enabled', false);
            $(".fadetext").addClass("e-disable");
        }
        else {
            ColorObj.option('enabled', true);
            $(".fadetext").removeClass("e-disable");
        }
    },
$scope.onRecentColor = function (args) {
    var ColorObj = $("#picker").data('ejColorPicker');
    if (args.isChecked) ColorObj.option('showRecentColors', true);
    else ColorObj.option('showRecentColors', false);
},
$scope.onSwitcher = function (args) {
    var ColorObj = $("#picker").data('ejColorPicker');
    if (args.isChecked) ColorObj.option('showSwitcher', false);
    else ColorObj.option('showSwitcher', true);
},
$scope.onShowButton = function (args) {
    var ColorObj = $("#picker").data('ejColorPicker');
    if (args.isChecked) ColorObj.option('showApplyCancel', false);
    else ColorObj.option('showApplyCancel', true);
},
$scope.getHexCode = function () {
    var ColorObj = $("#picker").data('ejColorPicker');
    setTimeout(function () { alert("The Colorpicker value : " + ColorObj.getValue()); }, 250);
}

});
