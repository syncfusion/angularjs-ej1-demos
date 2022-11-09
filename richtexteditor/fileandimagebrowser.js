syncApp.controller('RTECtrl', function ($scope) {
	$scope.toolList=["images"];
	$scope.tools={ images: ["image"] };
	$scope.imageBrowser={ filePath: window.baseurl + "Content/FileBrowser/", ajaxAction: fileService, extensionAllow: "*.png, *.gif, *.jpg, *.jpeg, *.docx", ajaxSettings: ajaxSettings };
	$scope.fileBrowser= { filePath: window.baseurl + "Content/FileBrowser/", ajaxAction: fileService, extensionAllow: "*.txt, *.png, *.pdf,*.jpeg", ajaxSettings: ajaxSettings1 };
           
});