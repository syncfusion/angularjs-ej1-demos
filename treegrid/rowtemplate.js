var columns = [
            { field: "EmployeeID", headerText: "Employee ID", width: "180" },
                    { field: "Name", headerText: "Employee Name" },
                       { field: "Address", headerText: "Employee Details", width: "300" },
                      { field: "DOB", headerText: "DOB", editType: "datepicker" }
];



var treeData = [{
    "Name": "Robert King",
    "FullName": "Robert King",
    "Designation": "Chief Executive Officer",
    "EmployeeID": "EMP001",
    "Address": "507 - 20th Ave. E.Apt. 2A, Seattle",
    "Contact": "(206) 555-9857",
    "Country": "USA",
    "DOB": "2/15/1963",

    "Children": [{
        "Name": "David william",
        "FullName": "David william",
        "Designation": "Vice President",
        "EmployeeID": "EMP004",
        "Address": "722 Moss Bay Blvd., Kirkland",
        "Country": "USA",
        "Contact": "(206) 555-3412",
        "DOB": "5/20/1971",

        "Children": [{
            "Name": "Nancy Davolio",
            "FullName": "Nancy Davolio",
            "Designation": "Marketing Executive",
            "EmployeeID": "EMP035",
            "Address": "4110 Old Redmond Rd., Redmond",
            "Country": "USA",
            "Contact": "(206) 555-8122",
            "DOB": "3/19/1966",
            "Children": [
                {
                    "Name": "Andrew Fuller",
                    "FullName": "Andrew Fuller",
                    "Designation": "Sales Representative",
                    "EmployeeID": "EMP045",
                    "Address": "14 Garrett Hill, London",
                    "Country": "UK",
                    "Contact": "(71) 555-4848",
                    "DOB": "9/20/1980"
                },
            {
                "Name": "Anne Dodsworth",
                "FullName": "Anne Dodsworth",
                "Designation": "Sales Representative",
                "EmployeeID": "EMP091",
                "Address": "4726 - 11th Ave. N.E., Seattle",
                "Country": "USA",
                "Contact": "(206) 555-1189",
                "DOB": "10/19/1989"
            },
            {
                "Name": "Michael Suyama",
                "FullName": "Michael Suyama",
                "Designation": "Sales Representative",
                "EmployeeID": "EMP110",
                "Address": "Coventry House Miner Rd., London",
                "Country": "UK",
                "Contact": "(71) 555-3636",
                "DOB": "11/02/1987"
            },
            {
                "Name": "Janet Leverling",
                "FullName": "Janet Leverling",
                "Designation": "Sales Coordinator",
                "EmployeeID": "EMP131",
                "Address": "Edgeham Hollow Winchester Way, London",
                "Country": "UK",
                "Contact": "(71) 555-3636",
                "DOB": "11/06/1990"
            },
            ]

        },
        {
            "Name": "Romey Wilson",
            "FullName": "Romey Wilson",
            "Designation": "Sales Executive",
            "EmployeeID": "EMP039",
            "Address": "7 Houndstooth Rd., London",
            "Country": "UK",
            "Contact": "(71) 555-3690",
            "DOB": "02/02/1980",
            "Children": [
            {
                "Name": "Margaret Peacock",
                "FullName": "Margaret Peacock",
                "Designation": "Sales Representative",
                "EmployeeID": "EMP213",
                "Address": "4726 - 11th Ave. N.E., California",
                "Country": "USA",
                "Contact": "(206) 555-1989",
                "DOB": "01/21/1986"
            },
            {
                "Name": "Laura Callahan",
                "FullName": "Laura Callahan",
                "Designation": "Sales Coordinator",
                "EmployeeID": "EMP201",
                "Address": "Coventry House Miner Rd., London",
                "Country": "UK",
                "Contact": "(71) 555-2222",
                "DOB": "12/01/1990"
            },
            {
                "Name": "Steven Buchanan",
                "FullName": "Steven Buchanan",
                "Designation": "Sales Representative",
                "EmployeeID": "EMP197",
                "Address": "200 Lincoln Ave, Salinas, CA 93901",
                "Country": "USA",
                "Contact": "(831) 758-7408",
                "DOB": "03/23/1987"
            },
            {
                "Name": "Tedd Lawson",
                "FullName": "Tedd Lawson",
                "Designation": "Sales Representative",
                "EmployeeID": "EMP167",
                "Address": "200 Lincoln Ave, Salinas, CA 93901",
                "Country": "USA",
                "Contact": "(831) 758-7368 ",
                "DOB": "08/09/1989"
            },
            ]
        }]
    }]
}];


syncApp.controller('TreeGridCtrl', function ($scope) {
    $scope.data = treeData;
    $scope.columns = columns;
    $scope.child = "Children";
    $scope.rowTemplateID = "rowTemplate";
    $scope.altRowTemplateID = "altRowTemplate";
    $scope.editSettings = { allowEditing: true, editMode: "cellEditing" };
    $scope.rowHeight = 99;
});