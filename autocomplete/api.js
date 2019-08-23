
syncApp.controller('AutocompleteApiCtrl', function ($scope, $rootScope) {   
    $scope.countries = [
                 { text: "Algeria", key: "flag-dz" }, { text: "Argentina", key: "flag-ar" },
                { text: "Armenia", key: "flag-am" }, { text: "Brazil", key: "flag-br" },
                { text: "Bangladesh", key: "flag-bd" }, { text: "Canada", key: "flag-ca" },
                { text: "Cuba", key: "flag-cu" }, { text: "China", key: "flag-cn" },
                { text: "Denmark", key: "flag-dk" }, { text: "Estonia", key: "flag-ee" },
                { text: "Egypt", key: "flag-eg" }, { text: "France", key: "flag-fr" },
                { text: "Finland", key: "flag-fi" }, { text: "Greenland", key: "flag-gl" },
                { text: "India", key: "flag-in" }, { text: "Indonesia", key: "flag-id" },
                { text: "Malaysia", key: "flag-my" }, { text: "Mexico", key: "flag-mx" },
                { text: "New Zealand", key: "flag-nz" }, { text: "Netherlands", key: "flag-nl" },
                { text: "Norway", key: "flag-no" }, { text: "Portugal", key: "flag-pt" },
                { text: "Poland", key: "flag-pl" }, { text: "Qatar", key: "flag-qa" },
                { text: "Romania", key: "flag-ro" }, { text: "Spain", key: "flag-es" },
                { text: "Singapore", key: "flag-sg" }, { text: "Saudi Arabia", key: "flag-sa" },
                { text: "Thailand", key: "flag-th" }, { text: "Turkey", key: "flag-tr" },
                { text: "Ukraine", key: "flag-ua" }, { text: "United States", key: "flag-us" },
                { text: "Uruguay", key: "flag-uy" }, { text: "Viet Nam", key: "flag-vn" }
    ];
    $scope.changeState = function (args) {
        var autocomplete = $('#selectCountry').data("ejAutocomplete");
        if (args.isChecked) autocomplete.disable();
        else autocomplete.enable();
    }
    $scope.currentValue = function (args) {
        var autocomplete = $('#selectCountry').data("ejAutocomplete");
        alert("Current value is : " + autocomplete.getValue());
    }
});