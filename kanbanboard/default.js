﻿syncApp.controller('KanbanCtrl', function ($scope,  $rootScope) {
    $scope.data = new ej.DataManager(window.kanbanData).executeLocal(ej.Query().take(30));
});