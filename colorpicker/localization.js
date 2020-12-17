var list = [{ text: 'en-US', value: 'en-US' }, { text: 'es-ES', value: 'es-ES' }, { text: 'zh-CN', value: 'zh-CN' }];
syncApp.controller('ColorPickerCtrl', function ($scope) {
    $scope.value1 = "#201033";
    $scope.dataList = list;

    var ddobject = $("#culture").data("ejDropDownList");

    $scope.onChange = function (args) {
        var colorObject = $("#colorpick").ejColorPicker('instance');
        colorObject.setModel({ locale: args.value });
       
    }

    ej.ColorPicker.Locale["es-ES"] = {
        buttonText: {
            apply: "Aplicar",
            cancel: "Cancelar",
            swatches: "Muestras"
        },
        tooltipText: {
            switcher: "conmutador",
            addbutton: "Añadir color",
            basic: "BASIC",
            monochrome: "Monocromo",
            flatcolors: "Colores planos",
            seawolf: "Lobo marino",
            webcolors: "Colores Web",
            sandy: "Arenoso",
            pinkshades: "tonos rosas",
            misty: "brumoso",
            citrus: "Agrios",
            vintage: "Vendimia",
            moonlight: "luz de la luna",
            candycrush: "Candy Crush",
            currentcolor: "Color actual",
            selectedcolor: "Color seleccionado"
        }
    };
    ej.ColorPicker.Locale["zh-CN"] = {
        buttonText: {
            apply: "应用",
            cancel: "取消",
            swatches: "色板"
        },
        tooltipText: {
            switcher: "切换器",
            addbutton: "添加颜色",
            basic: "基本",
            monochrome: "单色铬",
            flatcolors: "平的颜色",
            seawolf: "海狼",
            webcolors: "网颜色",
            sandy: "沙",
            pinkshades: "桃红色树荫",
            misty: "蒙蒙",
            citrus: "柑橘",
            vintage: "葡萄酒",
            moonlight: "月光",
            candycrush: "糖果粉碎",
            currentcolor: "当前颜色",
            selectedcolor: "所选颜色"
        }
    }
});
