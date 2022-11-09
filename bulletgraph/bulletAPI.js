syncApp.controller('angularBullet1', function ($scope) {
createPropertiesWindow();
});

function createPropertiesWindow()
{
	 $("#featureMeasuresValue").ejSlider({
            sliderType: ej.SliderType.MinRange,
            value: 8,
            height: 10,
            minValue: 1,
            maxValue: 9,
            width: 110,
            enableAnimation: true,
            slide: "onValuechange",
            change: "onValuechange"
        });

        $("#comparativeMeasureValue").ejSlider({
            sliderType: ej.SliderType.MinRange,
            value: 6.7,
            height: 10,
            minValue: 1,
            maxValue: 9,
            width: 110,
            enableAnimation: true,
            slide: "onValuechange",
            change: "onValuechange"
        });

        $("#chkStrokeToTicks").ejCheckBox({ "change": "onTickStroke" });
        $("#chkStrokeToLabels").ejCheckBox({ "change": "onLabelStroke" }); 
        $("#chkEnableAnimation").ejCheckBox({ "change": "onAnimateClick", checked: true });

        $('#range1Stroke').ejDropDownList({
            dataSource: ["--Select--", "red", "yellow", "green"],
            select: "onRangeStroke1change", width: "110px", selectedItemIndex: 0, height: "22px"
        });

        $('#range2Stroke').ejDropDownList({
            dataSource: ["--Select--", "red", "yellow", "green"],
            select: "onRangeStroke2change", width: "110px", selectedItemIndex: 0, height: "22px"
        });

        $('#range3Stroke').ejDropDownList({
            dataSource: ["--Select--", "red", "yellow", "green"],
            select: "onRangeStroke3change", width: "110px", selectedItemIndex: 0, height: "22px"
        });

        $('#orientation').ejDropDownList({
            dataSource: ["horizontal", "vertical"],
            select: "onOrientationchange", selectedItemIndex: 0, width: "110px", height: "22px"
        });

        $('#flowDirection').ejDropDownList({
            dataSource: ["forward", "backward"],
            select: "onFlowDirectionchange", selectedItemIndex: 0, width: "110px", height: "22px"
        });

        $('#majorTickStroke').ejDropDownList({
            dataSource: ["--Select--", "red", "yellow", "green"],
            select: "onMajorTickchange", width: "110px", selectedItemIndex: 0, height: "22px"
        });

        $('#minorTickStroke').ejDropDownList({
            dataSource: ["--Select--", "red", "yellow", "green"],
            select: "onMinorTickchange", width: "110px", selectedItemIndex: 0, height: "22px"
        });

        $('#featureMeasuresStroke').ejDropDownList({
            dataSource: ["--Select--", "red", "yellow", "green"],
            select: "onFeaturebarchange", width: "110px", selectedItemIndex: 0, height: "22px"
        });

        $('#comparativeSymbolStroke').ejDropDownList({
            dataSource: ["--Select--", "red", "yellow", "green"],
            select: "onComparativechange", width: "110px", selectedItemIndex: 0, height: "22px"
        });

}


function AddSuffix(sender) {
        $("#bulletCore1").ejBulletGraph("option", "quantitativeScaleSettings.labelSettings", { labelSuffix: sender.value });
    }
	function AddPrefix(sender) {
        $("#bulletCore1").ejBulletGraph("option", "quantitativeScaleSettings.labelSettings", { labelPrefix: sender.value });
    }

    function onTickStroke(args) {
        if (args.isChecked)
            $("#bulletCore1").ejBulletGraph("option", "applyRangeStrokeToTicks", true);
        else
            $("#bulletCore1").ejBulletGraph("option", "applyRangeStrokeToTicks", false);
    };

    function onLabelStroke(args) {
        if (args.isChecked)
            $("#bulletCore1").ejBulletGraph("option", "applyRangeStrokeToLabels", true);
        else
            $("#bulletCore1").ejBulletGraph("option", "applyRangeStrokeToLabels", false);
    }

    function onAnimateClick(args) {
        if (args.isChecked)
            $("#bulletCore1").ejBulletGraph("option", "enableAnimation", true);
        else
            $("#bulletCore1").ejBulletGraph("option", "enableAnimation", false);
    }

    function onValuechange(args) {
        var dat = $("#bulletCore1").data("ejBulletGraph");
        if (dat) {
            if (args.id == "featureMeasuresValue")
                dat.setFeatureMeasureBarValue(0, args.value);
            else if (args.id == "comparativeMeasureValue")
                dat.setComparativeMeasureSymbol(0, args.value);
        }
    }

    function onRangeStroke1change(args) {
        if (args.itemId != 0)
            $("#bulletCore1").ejBulletGraph("option", "qualitativeRanges", [{ rangeStroke: args.text }]);
    }

    function onRangeStroke2change(args) {
        if (args.itemId != 0)
            $("#bulletCore1").ejBulletGraph("option", "qualitativeRanges", [{},{ rangeStroke: args.text }]);
    }

    function onRangeStroke3change(args) {
        if (args.itemId != 0)
            $("#bulletCore1").ejBulletGraph("option", "qualitativeRanges", [{}, {}, { rangeStroke: args.text }]);
    } 

    function onMajorTickchange(args) {
        if (args.itemId != 0)
            $("#bulletCore1").ejBulletGraph("option", "quantitativeScaleSettings.majorTickSettings", { stroke: args.text });
    }

    function onMinorTickchange(args) {
        if (args.itemId != 0)
            $("#bulletCore1").ejBulletGraph("option", "quantitativeScaleSettings.minorTickSettings", { stroke: args.text });
    }

    function onFeaturebarchange(args) {
        if (args.itemId != 0)
            $("#bulletCore1").ejBulletGraph("option", "quantitativeScaleSettings.featuredMeasureSettings", { stroke: args.text });
    }

    function onComparativechange(args) {
        if (args.itemId != 0)
            $("#bulletCore1").ejBulletGraph("option", "quantitativeScaleSettings.comparativeMeasureSettings", { stroke: args.text });
    }

    function onOrientationchange(args) {
        var dat = $("#bulletCore1").data("ejBulletGraph");
        if (dat) {
            $("#bulletCore1").ejBulletGraph("option", "orientation", args.text);
        }
    }

    function onFlowDirectionchange(args) {
    var dat = $("#bulletCore1").data("ejBulletGraph");
    if (dat)
        $("#bulletCore1").ejBulletGraph("option", "flowDirection", args.text);
    }


	

