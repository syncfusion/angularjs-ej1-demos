 
syncApp.controller('ChartCtrl', function ($scope) {

	$scope.Points1 = [{ x: "Income", y: 4711, border: { color: "#5D843A" } }, { x: "Marketing and sales", y: -427 },
                                  { x: "Research", y: -588 }, { x: "Development", y: -688 },
                                  { x: "Other revenue", y: 1030, border: { color: "#5D843A" } }, { x: "Intermediate sum", showIntermediateSum: true, border: { color: "#2B557F" }, fill: "#4E81BC" },
                                 { x: "Administrative", y: -780 }, { x: "Other expense", y: -361 },
                                 { x: "Income tax", y: -695 }, { x: "Net profit", showTotalSum: true, border: { color: "#2B557F" }, fill: "#4E81BC" }];
		
});

   