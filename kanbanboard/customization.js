syncApp.controller('customizationCtrl', function ($scope,  $rootScope) {
    $scope.data = new ej.DataManager(window.kanbanData).executeLocal(ej.Query().take(30));
    $scope.colors = {
        "#cb2027": "Bug,Story",
        "#67ab47": "Improvement",
        "#fbae19": "Epic",
        "#6a5da8": "Others",
    };
	
	$scope.queryCellInfo = function (args) {
        $($(args.card).find(".e-primarykey")).html("<a href='#'>Card " + args.data.Id + "</a>");
    };
});