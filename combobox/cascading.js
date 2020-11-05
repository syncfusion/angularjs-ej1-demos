var groups = [
          { parentId: 'a', text: "Group A" },
          { parentId: 'b', text: "Group B" },
          { parentId: 'c', text: "Group C" },
          { parentId: 'd', text: "Group D" },
          { parentId: 'e', text: "Group E" }]
            //first level child
            var countries = [{ value: 11, parentId: 'a', text: "Algeria", sprite: "flag-dz" },
           { value: 12, parentId: 'a', text: "Armenia", sprite: "flag-am" },
           { value: 13, parentId: 'a', text: "Bangladesh", sprite: "flag-bd" },
           { value: 14, parentId: 'a', text: "Cuba", sprite: "flag-cu" },
           { value: 15, parentId: 'b', text: "Denmark", sprite: "flag-dk" },
           { value: 16, parentId: 'b', text: "Egypt", sprite: "flag-eg" },
           { value: 17, parentId: 'c', text: "Finland", sprite: "flag-fi" },
           { value: 18, parentId: 'c', text: "India", sprite: "flag-in" },
           { value: 19, parentId: 'c', text: "Malaysia", sprite: "flag-my" },
           { value: 20, parentId: 'd', text: "New Zealand", sprite: "flag-nz" },
           { value: 21, parentId: 'd', text: "Norway", sprite: "flag-no" },
           { value: 22, parentId: 'd', text: "Poland", sprite: "flag-pl" },
           { value: 23, parentId: 'e', text: "Romania", sprite: "flag-ro" },
           { value: 24, parentId: 'e', text: "Singapore", sprite: "flag-sg" },
           { value: 25, parentId: 'e', text: "Thailand", sprite: "flag-th" },
           { value: 26, parentId: 'e', text: "Ukraine", sprite: "flag-ua" }] 
		   
    syncApp.controller('ComboBoxCtrl', function ($scope) {
        $scope.data = groups;
        $scope.fields = { "value": "parentId","text":"text" };
		$scope.cascadding= "countryList";  
		$scope.width = "100%";
		$scope.change=function(e)
		{
			var ctry = $('#countryList').data("ejComboBox");
            ctry.option({ enabled: true, query: new ej.Query().where('parentId', 'equal', e.model.value), value: null });
	    }  
		$scope.countrydata= countries;
        });