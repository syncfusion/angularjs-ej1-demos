
			
syncApp.controller('AutocompleteMultiColumnCtrl', function ($scope, $rootScope) {    
    $scope.multicolumndataList = [{ "EmployeeID": 1, "FirstName": "Nancy", "City": "Seattle" },
            { "EmployeeID": 2, "FirstName": "Andrew", "City": "Tacoma" },
            { "EmployeeID": 3, "FirstName": "Janet", "City": "Kirkland" },
            { "EmployeeID": 4, "FirstName": "Margaret", "City": "Redmond" },
            { "EmployeeID": 5, "FirstName": "Steven", "City": "London" },
            { "EmployeeID": 6, "FirstName": "Michael", "City": "London" },
            { "EmployeeID": 7, "FirstName": "Robert", "City": "London" },
            { "EmployeeID": 8, "FirstName": "Laura", "City": "Seattle" },
            { "EmployeeID": 9, "FirstName": "Anne", "City": "London" },
            { "EmployeeID": 10, "FirstName": "Laura", "City": "Seattle" },
            { "EmployeeID": 11, "FirstName": "Janet", "City": "Kirkland" },
            { "EmployeeID": 12, "FirstName": "Michael", "City": "London" },
            { "EmployeeID": 13, "FirstName": "Steven", "City": "London" },
            { "EmployeeID": 14, "FirstName": "Andrew", "City": "Tacoma" },
            { "EmployeeID": 15, "FirstName": "Robert", "City": "London" },
            { "EmployeeID": 16, "FirstName": "Margaret", "City": "Redmond" },
            { "EmployeeID": 17, "FirstName": "Steven", "City": "London" },
            { "EmployeeID": 18, "FirstName": "Michael", "City": "London" },
            { "EmployeeID": 19, "FirstName": "Robert", "City": "London" },
            { "EmployeeID": 20, "FirstName": "Laura", "City": "Seattle" },
            { "EmployeeID": 21, "FirstName": "Anne", "City": "London" },
            { "EmployeeID": 22, "FirstName": "Margaret", "City": "London" },
            { "EmployeeID": 23, "FirstName": "Andrew", "City": "Tacoma" },
            { "EmployeeID": 24, "FirstName": "Janet", "City": "Kirkland" },
            { "EmployeeID": 25, "FirstName": "Margaret", "City": "Redmond" },
            { "EmployeeID": 26, "FirstName": "Steven", "City": "London" },
            { "EmployeeID": 27, "FirstName": "Michael", "City": "London" },
            { "EmployeeID": 28, "FirstName": "Robert", "City": "London" },
            { "EmployeeID": 29, "FirstName": "Laura", "City": "Seattle" },
            { "EmployeeID": 30, "FirstName": "Anne", "City": "London" },
            { "EmployeeID": 31, "FirstName": "Margaret", "City": "Redmond" },
            { "EmployeeID": 32, "FirstName": "Steven", "City": "London" }];
	$scope.multicolumnkey="EmployeeID";
	$scope.multicolumntext="City";
	$scope.multicolumncolset = {
        stringFormat: "{0}  ({2}) ({1})",
				enable:true,
				showHeader: true,				
				columns: [
				{
                    field: "FirstName",
                    headerText: "FirstName"
                },
                {
                    field: "EmployeeID",
                    headerText: "EmployeeID"
                },
                {
                    field: "City",
                    headerText: "City"
                }
	]}           
});