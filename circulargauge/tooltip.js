
syncApp.controller('CircularGaugeCtrl1', function ($scope) {
     createPropertiesWindow();
      });
	  
	  function createPropertiesWindow()
	  {
		    $("#chkEnableLabelTooltip").ejCheckBox({ "change": "onLabelTooltipChange", checked: true });
            $("#chkEnableCustomLabelTooltip").ejCheckBox({ "change": "onCustomLabelTooltipChange", checked: true });
            $("#chkEnableTooltipTemplate").ejCheckBox({ "change": "onTooltipTemplateChange", checked: true });

	  }
	  
      function onLabelTooltipChange(args) {
            if (args.isChecked)
                $("#gauge").ejCircularGauge("option", "tooltip", { showLabelTooltip: true });
            else
                $("#gauge").ejCircularGauge("option", "tooltip", { showLabelTooltip: false });
        }
		
        function onCustomLabelTooltipChange(args) {
            if (args.isChecked)
                $("#gauge").ejCircularGauge("option", "tooltip", { showCustomLabelTooltip: true });
            else
                $("#gauge").ejCircularGauge("option", "tooltip", { showCustomLabelTooltip: false });
        }
		
        function onTooltipTemplateChange(args) {
            if (args.isChecked)
                $("#gauge").ejCircularGauge("option", "tooltip", { templateID: "Tooltip" });
            else
                $("#gauge").ejCircularGauge("option", "tooltip", { templateID: null });
        }
