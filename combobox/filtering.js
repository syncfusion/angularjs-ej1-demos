
syncApp.controller('ComboBoxFilteringCtrl', function ($scope, $rootScope) {  
    $scope.datasource = [
			{ id: 'level1', country: 'American Football' }, { id: 'level2', country: 'Badminton' },
			{ id: 'level3', country: 'Basketball' }, { id: 'level4', country: 'Cricket' },
			{ id: 'level5', country: 'Football' }, { id: 'level6', country: 'Golf' },
			{ id: 'level7', country: 'Hockey' }, { id: 'level8', country: 'Rugby' },
			{ id: 'level9', country: 'Snooker' }, { id: 'level10', country: 'Tennis' }
			];
	 $scope.query = new ej.Query().select(['country', 'id']).take(6);
	 $scope.filtering = function(e){
            var query = new ej.Query().select(['country', 'id']);
			query = (e.text !== '') ? query.where('country', 'startswith', e.text, true) : query;
			e.updateData(e.model.dataSource, query);
        }
});