 var skillset = [
            { skill: "Cabbage", category: "Leafy and Salad" }, { skill: "Pea", category: "Leafy and Salad" }, { skill: "Spinach", category: "Leafy and Salad" },
            { skill: "Wheatgrass", category: "Leafy and Salad" }, { skill: "Yarrow", category: "Leafy and Salad" }, { skill: "Chickpea", category: "Beans" }, { skill: "Green bean", category: "Beans" },
            { skill: "Horse gram", category: "Beans" }, { skill: "Peanut", category: "Beans" }, { skill: "Pigeon pea", category: "Beans" }, { skill: "Garlic", category: "Bulb and Stem" },
            { skill: "Garlic Chives", category: "Bulb and Stem" }, { skill: "Lotus root", category: "Bulb and Stem" }, { skill: "Nopal", category: "Bulb and Stem" }, { skill: "Onion", category: "Bulb and Stem" },
            { skill: "Shallot", category: "Bulb and Stem" }, { skill: "Beetroot", category: "Root and Tuberous" }, { skill: "Carrot", category: "Root and Tuberous" }, { skill: "Ginger", category: "Root and Tuberous" },
            { skill: "Potato", category: "Root and Tuberous" }, { skill: "Radish", category: "Root and Tuberous" }, { skill: "Turmeric", category: "Root and Tuberous" }
            ];

syncApp.controller('DropDownCtrl', function ($scope) {
        $scope.dataList = skillset;
        $scope.fields = { "text": "skill", "category": "category" };
        $scope.width = "100%";
		$scope.watermarkText= "Select a vegetable"; 
    });
