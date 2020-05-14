syncApp.controller('PivotGridWCFOLAPCtrl', function ($scope) {
        $scope.isResponsive = true;
        $scope.url = window.baseurl + "wcf/PivotGrid/Olap.svc";
		$scope.serviceMethodSettings = { initialize: "Initialize", drillDown: "Drill", nodeStateModified: "ModifyNodeState", nodeDropped: "DropNode", memberExpand: "ExpandMember" };
    });