syncApp.controller('PivotGridWebAPIOLAPCtrl', function ($scope) {
    $scope.isResponsive = true;
    $scope.url = window.baseurl + "api/PivotGrid/Olap";
	$scope.serviceMethodSettings = { initialize: "Initialize", drillDown: "Drill", nodeStateModified: "ModifyNodeState", nodeDropped: "DropNode", memberExpand: "ExpandMember" };
});