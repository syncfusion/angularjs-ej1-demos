
syncApp.controller('ComboBoxTemplateCtrl', function ($scope, $rootScope) {   
    $scope.templatedataList = [
        { text: 'John Linden', eimg: '7', status: 'Available', country: 'USA' },
        { text: 'Erik Linden', eimg: '3', status: 'Available', country: 'England' },
        { text: 'Leverling', eimg: '6', status: 'Available', country: 'England' },
        { text: "Suyama", eimg: "5", status: "Available", country: 'USA' }
    ];
	$scope.headerTemplate='<div class="head">  Photo  <span style="padding-left:42px"> Contact Info </span></div>';
    $scope.itemTemplate= '<div><img class="eimg" src="content/images/combobox/${eimg}.png" alt="employee"/><div class="ename"> ${text} </div><div class="temp"> ${country} </div></div>';
    $scope.footerTemplate= '<div class="Foot"> Total Items Count: 4 </div>';
});