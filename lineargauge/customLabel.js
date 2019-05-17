syncApp.controller('LinearGauge', function ($scope) {
                
             });
        
function onLoad(sender){
	for(var i=0;i<sender.model.scales[0].customLabels.length;i++)
		if(i!=0) sender.model.scales[0].customLabels[i].positionType = "outer";
}

