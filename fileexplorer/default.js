syncApp.controller('FileExplorerDefault', function ($scope, $window, $timeout) {
	$scope.ajaxaction = window.baseurl + "api/FileExplorer/FileOperations"; 
	$scope.path = window.baseurl + "Content/FileBrowser/";
})