
syncApp.controller('ListBoxTemplateCtrl', function ($scope) {
    $scope.dataList = [
           { text: "Erik Linden", eimg: "3", desig: "Representative", country: "England" }, { text: "John Linden", eimg: "6", desig: "Representative", country: "Norway" },
           { text: "Louis", eimg: "7", desig: "Representative", country: "Australia" }, { text: "Lawrence", eimg: "5", desig: "Representative", country: "India" }
    ];
    $scope.template = '<div><img class="eimg" src="content/images/Employees/${eimg}.png" alt="employee"/>' +
                      '<div class="ename"> ${text} </div><div class="desig"> ${desig} </div><div class="cont"> ${country} </div></div>';
});
