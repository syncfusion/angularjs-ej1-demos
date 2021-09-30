syncApp.controller('PivotGridWCFCtrl', function ($scope) {
        $scope.isResponsive = true;
        $scope.url = window.baseurl + "wcf/PivotGrid/Relational.svc";
		$scope.serviceMethodSettings = { initialize: "Initialize", drillDown: "Drill", nodeStateModified: "ModifyNodeState", nodeDropped: "DropNode", memberExpand: "ExpandMember" };
    });