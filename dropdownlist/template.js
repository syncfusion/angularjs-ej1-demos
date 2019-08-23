 var empList = [
               { text: "Erik Linden", eimg: "3", desig: "Representative", country: "England" }, { text: "John Linden", eimg: "6", desig: "Representative", country: "Norway" },
               { text: "Louis", eimg: "7", desig: "Representative", country: "Australia" }, { text: "Lawrence", eimg: "8", desig: "Representative", country: "India" }
        ];
   
    syncApp.controller('DropDownCtrl', function ($scope) {
		$scope.dataList= empList;
		$scope.width= "100%",
        $scope.watermarkText= "Select an employee",
        $scope.template='<div><img class="eimg" src="content/images/Employee/${eimg}.png" alt="employee"/>' +
                         '<div class="ename"> ${text} </div><div class="desig"> ${desig} </div><div class="cont"> ${country} </div></div>'


  });