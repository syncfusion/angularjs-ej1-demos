syncApp.controller('PhoneListCtrl', function ($scope,$rootScope) {
   
   $scope.data = window.gridData;
   $scope.editSetting = { allowEditing: true, allowAdding: true, allowDeleting: true };
   $scope.toolbarSetting= { showToolbar: true, toolbarItems: [ej.Grid.ToolBarItems.Add, ej.Grid.ToolBarItems.Edit, ej.Grid.ToolBarItems.Delete, ej.Grid.ToolBarItems.Update, ej.Grid.ToolBarItems.Cancel] };
    
});