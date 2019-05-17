syncApp.controller('Map', function ($scope) {
	$scope.MarkerData = syncfusion_locations;
   $scope.MapData = world_map; 
   $scope.Render = "change";
});


setTimeout(function(){
    var marker = $('.e-TemplateDiv')[0];
         for (var i = 0; i < marker.childElementCount; i++) {
            var child = marker.childNodes[i];
			if(child["childNodes"][0]["innerText"] == "undefined"){
            child.childNodes[0]['remove']();
            var div1 = document.createElement('div');
            div1.style.backgroundImage = 'url(//js.syncfusion.com/demos/web/Images/map/pin.png)';
            div1.style.backgroundRepeat = 'no-repeat';
            div1.style.height = '40px';
            div1.style.width = '26px';
            div1.style.marginLeft = '-13px';
            div1.style.marginTop = '-38px';
            var div2 = document.createElement('div');
            div2.style.backgroundImage = 'url(//js.syncfusion.com/demos/web/Images/map/mappath.png)';
            div2.style.backgroundRepeat = 'no-repeat';
            div2.style.height = '25px';
            div2.style.width = '90px';
            div2.style.marginLeft = '3px';
            div2.style.marginTop = '-15px';
            var label = document.createElement('label');
			var map = $("#maps").ejMap("instance");
            label.innerText = map.model.layers[0].markers[i].Name;
            label.style.marginLeft = '10px';
            label.style.marginTop = '3px';
            label.style.color = 'white';
            label.style.fontWeight = 'normal';
            div2.appendChild(label);
            document.body.appendChild(div1);
            document.body.appendChild(div2);
            child.appendChild(div1);
            child.appendChild(div2);
			}
		 }
},150);