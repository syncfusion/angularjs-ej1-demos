
syncApp.controller('Map', function ($scope) {
	$scope.Load="onLoad";
	$scope.LatLongPoints = latLongPoints;
	$scope.Palette = ['#4A3825', '#736F3D', '#F2DABD', '#BF9D7E', '#7F6039', '#7F715F', '#70845D', '#CC995C', '#736F3D', '#89541B'];
	$scope.Map_Data = world_map;
});

      function onLoad() {
            var htmlSelect = document.getElementById("countriesCombo");
            for (var i = 0; i < latLongPoints.length; i++) {
                var item = latLongPoints[i];
                var selectBoxOption = document.createElement("option");
                selectBoxOption.value = item.name;
                selectBoxOption.text = item.name;
                htmlSelect.add(selectBoxOption, null);
            }
        }


        function buttonClick() {
            var combo = $("#countriesCombo");
            var index = combo[0].selectedIndex;
            var lat = latLongPoints[index].latitude;
            var lon = latLongPoints[index].longitude;
            var level = 4;
                $("#maps").ejMap("navigateTo", lat, lon, level);
				$("#maps").ejMap("selectShape", latLongPoints[index].name);
        }


 