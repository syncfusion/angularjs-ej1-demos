syncApp.controller('TreeMapcontroller', function ($scope) {
	createPropertiesWindow();
    $scope.ndatasource = population_data;
});

function createPropertiesWindow()
{
	$('#layouttype').ejDropDownList({
                dataSource: ["Squarified", "Horizontal","Vertical","Auto"],
                select: "onchange",value :"Squarified", width: "120px", selectedItem: 0, height: "28px"
        });
}

	function onchange(args) {
        	var treemapObj = $("#treemap").data("ejTreeMap");
			if(treemapObj!=null)
			{            
            if (args.selectedText == "Squarified") {            
               treemapObj.option("itemsLayoutMode", ej.datavisualization.TreeMap.ItemsLayoutMode.Squarified); 
            }
            else if (args.selectedText == "Horizontal") {
			    treemapObj.option("itemsLayoutMode", ej.datavisualization.TreeMap.ItemsLayoutMode.SliceAndDiceHorizontal); 
            }
			else if (args.selectedText == "Vertical") {
                treemapObj.option("itemsLayoutMode",  ej.datavisualization.TreeMap.ItemsLayoutMode.SliceAndDiceVertical); 
            }
			else if (args.selectedText == "Auto") {
                treemapObj.option("itemsLayoutMode", ej.datavisualization.TreeMap.ItemsLayoutMode.SliceAndDiceAuto);
            }
			}
			}