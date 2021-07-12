syncApp.controller('DatePickerCtrl', function ($scope) {
    var list = [{ text: 'en-US', value: 'en-US' }, { text: 'fr-FR', value: 'fr-FR' }, { text: 'vi-VN', value: 'vi-VN' }];
    $scope.dataList = list;
    $scope.value1 = new Date();
    var ddobject = $("#culture").data("ejDropDownList");

    $scope.onChange = function (args) {
        var colorObject = $("#datepick").ejDatePicker('instance');
        colorObject.setModel({ locale: args.value });

    }
    ej.DatePicker.Locale['fr-FR'] = {
        watermarkText: "Sélectionner une date",
        buttonText: "Aujourd'hui"
    };
    ej.DatePicker.Locale['vi-VN'] = {
        watermarkText: "Chọn ngày",
        buttonText: 'Hôm nay'
    };
});

