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

syncApp.controller('defaultCtrl1', function ($scope) {
    $scope.ndatasource = default_DataSource; 
	$scope.levels = [
						{groupMemberPath:"Country"},
						{groupMemberPath:"JobDescription"},
						{groupMemberPath:"JobGroup"},
						{groupMemberPath:"JobRole"}
	];
	$("#startAngle").ejSlider({
		       sliderType: ej.SliderType.MinRange,
                height: 12,
				width:100,
                value: 0,
                minValue:0,
                maxValue: 360,
                change: "onchange",
                slide: "onchange"
            });
			
			$("#endAngle").ejSlider({
		       sliderType: ej.SliderType.MinRange,
                height: 12,
				width:100,
                value: 360,
                minValue:0,
                maxValue: 360,
                change: "onchange",
                slide: "onchange"
            });
			
			$("#outerRadius").ejSlider({
		       sliderType: ej.SliderType.MinRange,
                height: 12,
				width:100,
                value: 1,
                minValue:0,
                maxValue: 1,
				incrementStep: 0.1,
                change: "onchange",
                slide: "onchange"
            });
			
			$("#innerRadius").ejSlider({
		       sliderType: ej.SliderType.MinRange,
                height: 12,
				width:100,
                value: 0.2,
                minValue:0,
                maxValue: 1,
				incrementStep:0.1,
                change: "onchange",
                slide: "onchange"
            });
	$('#overflow').change(function () {
        var type = $("#overflow option:selected").text();
        var sunburst = $("#default").ejSunburstChart("instance");
        switch (type) {
            case 'Trim':
                sunburst.model.dataLabelSettings.labelOverflowMode = 'trim';
                break;
            case 'Hide':
			    sunburst.model.dataLabelSettings.labelOverflowMode = 'hide';
                break;
			case 'None':
			    sunburst.model.dataLabelSettings.labelOverflowMode = 'none';
                break;
        }		
		sunburst.redraw();		
    });	
   
    $('#rotation').change(function () {
        var type = $("#rotation option:selected").text();
        var sunburst = $("#default").ejSunburstChart("instance");
        switch (type) {
            case 'Angle':
                sunburst.model.dataLabelSettings.labelRotationMode = 'angle';
                break;
            case 'Normal':
			    sunburst.model.dataLabelSettings.labelRotationMode = 'normal';
                break;
        }	
		sunburst.redraw();		
    });	   

});
   
function onchange(args) {
          var sunburst = $("#default").ejSunburstChart("instance");
            if (args.id == "startAngle") 
                sunburst.model.startAngle = args.value;
            else if (args.id == "endAngle")
                sunburst.model.endAngle = args.value;
            else if (args.id == "outerRadius")
                sunburst.model.radius = args.value;
            else if (args.id == "innerRadius")
                sunburst.model.innerRadius = args.value;
			sunburst.redraw();
        }
