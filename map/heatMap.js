
syncApp.controller('Map', function ($scope) {
    $scope.State_PopulationData = USA_State_PopulationData;
	$scope.UsMap = usMap;
		 $.views.helpers({
            parseDouble: function (amount) {

                var delimiter = ",";
                var i = parseInt(amount);
                if (isNaN(i)) { return ''; }
                var origi = i;  // store original to check sign
                i = Math.abs(i);
                var minus = '';
                if (origi < 0) { minus = '-'; } // sign based on original
                var n = new String(i);
                var a = [];
                while (n.length > 3) {
                    var nn = n.substr(n.length - 3);
                    a.unshift(nn);
                    n = n.substr(0, n.length - 3);
                }
                if (n.length > 0) { a.unshift(n); }
                n = a.join(delimiter);
                amount = minus + n;
                return amount;
            }
        });

    
});

function enableRTL(args) {
    var maps = $("#maps").ejMap("instance");
    if (args.checked)
        maps.model.enableRTL = true;
    else
        maps.model.enableRTL = false;
    maps.refresh();
}