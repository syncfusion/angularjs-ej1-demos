syncApp.controller('LinearGauge', function ($scope) {
          createPropertiesWindow();
		 $scope.DrawLabel = "drawLabel";
     });
	 
	 function createPropertiesWindow()
	 {
		   $("#chkEnableLabelTooltip").ejCheckBox({ "change": "onLabelTooltipChange", checked: true });
            $("#chkEnableCustomLabelTooltip").ejCheckBox({ "change": "onCustomLabelTooltipChange", checked: true });
            $("#chkEnableTooltipTemplate").ejCheckBox({ "change": "onTooltipTemplateChange", checked: true });
	 }
	 function DrawLabel(args) {
                args.style.textValue = args.label.value.toFixed(2);
       }
	 
	 function onLabelTooltipChange(args) {
            if (args.isChecked)
                $("#CoreLinearGauge").ejLinearGauge("option", "tooltip", { showLabelTooltip: true });
            else
                $("#CoreLinearGauge").ejLinearGauge("option", "tooltip", { showLabelTooltip: false });
        };
        function onCustomLabelTooltipChange(args) {
            if (args.isChecked)
                $("#CoreLinearGauge").ejLinearGauge("option", "tooltip", { showCustomLabelTooltip: true });
            else
                $("#CoreLinearGauge").ejLinearGauge("option", "tooltip", { showCustomLabelTooltip: false });
        };
        function onTooltipTemplateChange(args) {
            if (args.isChecked)
                $("#CoreLinearGauge").ejLinearGauge("option", "tooltip", { templateID: "Tooltip" });
            else
                $("#CoreLinearGauge").ejLinearGauge("option", "tooltip", { templateID: null });
        };


