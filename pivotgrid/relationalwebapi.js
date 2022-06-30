syncApp.controller('PivotGridWebAPICtrl', function ($scope) {
    $scope.isResponsive = true;
    $scope.url = window.baseurl + "api/PivotGrid/Relational";
	$scope.serviceMethodSettings = { initialize: "Initialize", drillDown: "Drill", nodeStateModified: "ModifyNodeState", nodeDropped: "DropNode", memberExpand: "ExpandMember" };
});