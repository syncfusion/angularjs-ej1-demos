syncApp.controller('UploadboxCtrl', function ($scope) {
	$scope.saveurl = window.baseurl + "api/uploadbox/Save";
	$scope.removeurl = window.baseurl + "api/uploadbox/Remove";
	$scope.error= function (args)
			    {
					alert(args.error);
			    }
       });