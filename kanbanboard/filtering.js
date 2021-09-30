syncApp.controller('filteringCtrl', function ($scope,  $rootScope) {
    $scope.data = new ej.DataManager(window.kanbanData).executeLocal(ej.Query().take(30));
	 $scope.query1 = new ej.Query().where('Assignee', 'equal', 'Janet Leverling');
    $scope.query2 = new ej.Query().where('Status', 'equal', 'InProgress');
});