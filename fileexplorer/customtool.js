
syncApp.controller('FileExplorerCustomTool', function ($scope) {
    $scope.toolsList = ["layout", "creation", "navigation", "addressBar", "editing", "copyPaste", "getProperties", "customTool", "searchBar"];
    //$scope.tools = {
    //    creation: ["NewFolder", "Open"],
    //    navigation: ["Back", "Forward", "Upward"],
    //    addressBar: ["Addressbar"],
    //    editing: ["Refresh", "Upload", "Delete", "Rename", "Download"],
    //    copyPaste: ["Cut", "Copy", "Paste"],
    //    getProperties: ["Details"],
    //    searchBar: ["Searchbar"]
    //}
    $scope.tools = ej.FileExplorer.prototype.defaults.tools;
	$scope.ajaxaction = window.baseurl + "api/FileExplorer/FileOperations"; 
	$scope.path = window.baseurl + "Content/FileBrowser/";
   $scope.tools.customTool = [{
        name: "Help",
        tooltip: "Help ",
        css: "e-fileExplorer-toolbar-icon Help",
        action: function () {
            $("#helpDialog").ejDialog("open");
        }
    }];

})