var default_DataSource = [

    { Category : "Employees", Country : "USA", JobDescription : "Sales",         JobGroup:"Executive",                         EmployeesCount : 50 },
	{ Category : "Employees", Country : "USA", JobDescription : "Sales",         JobGroup : "Analyst",                         EmployeesCount : 40 },
	{ Category : "Employees", Country : "USA", JobDescription : "Marketing",                                                   EmployeesCount : 40 },
	{ Category : "Employees", Country : "USA", JobDescription : "Technical",     JobGroup : "Testers",                         EmployeesCount : 55 },
	{ Category : "Employees", Country : "USA", JobDescription : "Technical",     JobGroup : "Developers", JobRole : "Windows", EmployeesCount : 175},
	{ Category : "Employees", Country : "USA", JobDescription : "Technical",     JobGroup : "Developers", JobRole : "Web",     EmployeesCount : 70 },
	{ Category : "Employees", Country : "USA", JobDescription : "Management",                                                  EmployeesCount : 40 },
	{ Category : "Employees", Country : "USA", JobDescription : "Accounts",                                                    EmployeesCount : 60 },
	
	{ Category : "Employees", Country : "India",   JobDescription : "Technical",     JobGroup : "Testers",                         EmployeesCount : 43 },
	{ Category : "Employees", Country : "India",   JobDescription : "Technical",     JobGroup : "Developers", JobRole : "Windows", EmployeesCount : 125},
	{ Category : "Employees", Country : "India",   JobDescription : "Technical",     JobGroup : "Developers", JobRole : "Web",     EmployeesCount : 60 },
	{ Category : "Employees", Country : "India",   JobDescription : "HR Executives",                                               EmployeesCount : 70 },
	{ Category : "Employees", Country : "India",   JobDescription : "Accounts",                                                    EmployeesCount : 45 },
	
	{ Category : "Employees", Country : "Germany", JobDescription : "Sales",         JobGroup : "Executive",                       EmployeesCount : 30 },
	{ Category : "Employees", Country : "Germany", JobDescription : "Sales",         JobGroup : "Analyst",                         EmployeesCount : 40 },
	{ Category : "Employees", Country : "Germany", JobDescription : "Marketing",                                                   EmployeesCount : 50 },
	{ Category : "Employees", Country : "Germany", JobDescription : "Technical",     JobGroup : "Testers",                         EmployeesCount : 40 },
	{ Category : "Employees", Country : "Germany", JobDescription : "Technical",     JobGroup : "Developers", JobRole : "Windows", EmployeesCount : 65 },
	{ Category : "Employees", Country : "Germany", JobDescription : "Technical",     JobGroup : "Developers", JobRole : "Web",     EmployeesCount : 27 },
	{ Category : "Employees", Country : "Germany", JobDescription : "Management",                                                  EmployeesCount : 33 },
	{ Category : "Employees", Country : "Germany", JobDescription : "Accounts",                                                    EmployeesCount : 55 },
	
	{ Category : "Employees", Country : "UK",      JobDescription : "Technical",     JobGroup : "Testers",                         EmployeesCount : 45 },
	{ Category : "Employees", Country : "UK",      JobDescription : "Technical",     JobGroup : "Developers", JobRole : "Windows", EmployeesCount : 96 },
	{ Category : "Employees", Country : "UK",      JobDescription : "Technical",     JobGroup : "Developers", JobRole : "Web",     EmployeesCount : 55 },
	{ Category : "Employees", Country : "UK",      JobDescription : "HR Executives",                                               EmployeesCount : 60 },
	{ Category : "Employees", Country : "UK",      JobDescription: "Accounts",                                                     EmployeesCount: 30  },
	
	{ Category : "Employees", Country : "France", JobDescription : "Technical",     JobGroup : "Testers",                         EmployeesCount : 40 },
	{ Category : "Employees", Country : "France", JobDescription : "Technical",     JobGroup : "Developers", JobRole : "Windows", EmployeesCount : 65 },
	{ Category : "Employees", Country : "France", JobDescription : "Technical",     JobGroup : "Developers", JobRole : "Web",     EmployeesCount : 27 },
	{ Category : "Employees", Country : "France", JobDescription: "Marketing",                                                     EmployeesCount: 50  }

];
syncApp.controller('SunburstCtrl3', function ($scope) {
    $scope.ndatasource = default_DataSource; 
	$scope.npalette = ["#002e4d", "#005c99", "#008ae6", "#33adff", "#80ccff"];
	$scope.levels = [
						{groupMemberPath:"Country"},
						{groupMemberPath:"JobDescription"},
						{groupMemberPath:"JobGroup"},
						{groupMemberPath:"JobRole"}
	];	
});

	function zooming()
		{
			var sunburst = $("#container3").ejSunburstChart("instance");
			if ($("#zooming").is(":checked"))
				sunburst.model.zoomSettings.enable = true;
			else {
				sunburst.model.zoomSettings.enable = false;
			}	 
			sunburst.redraw();
		}	
		
		
   