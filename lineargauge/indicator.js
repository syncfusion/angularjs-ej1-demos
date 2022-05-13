syncApp.controller('LinearGauge', function ($scope) {
                 $scope.DrawLabel = "drawLabels";
				 $scope.DrawMarkerPointers = "drawMarkerPointers";
				 $scope.DrawIndicators = "drawIndicators";
             });
var text = "";
var XPosition;
function drawLabels(args)
{
	args.style.textValue = Math.round(args.label.value) == 25000000 ? "$ 25 Mills" : Math.round(args.label.value) == 10000 ? "$ 10,000": "";
}

function drawMarkerPointers(args)
{ 
            XPosition = args.position.startX;
            text = Math.round(args.pointerValue) == 1000000 ? "1 Mill" : Math.round(args.pointerValue) > 1000000 ? (Math.round(args.pointerValue) / 1000000).toFixed(3)==1? "1 Mill" : (Math.round(args.pointerValue) / 1000000).toFixed(3)+ " Mills" : (Math.round(args.pointerValue)/1000).toFixed(3).toString().replace(".",",");
            var label = "Loan Amount = $ " + text;
            $("#lbl").text(label);
}

function drawIndicators(args)
{
	 if (args.indicatorIndex == 0) {
                args.position.textLocation.x = XPosition;
                args.indicatorEl.stateRanges[0].text = text;
            }
}

