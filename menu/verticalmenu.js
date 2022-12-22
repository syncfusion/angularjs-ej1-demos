var data = [
           { id: 1, txt: "Mail", parentId: null },
           { id: 2, txt: "Calender", parentId: null },
           { id: 3, txt: "Notes", parentId: null },
           { id: 4, txt: "Contacts", parentId: null },
           //first level child
           { id: 11, parentId: 1, txt: "Inbox", sprite: "mailicon sprite-inbox" },
           { id: 12, parentId: 1, txt: "Drafts", sprite: "mailicon sprite-drafts" },
           { id: 13, parentId: 1, txt: "Sent items", sprite: "mailicon sprite-sentitems" },
           { id: 14, parentId: 1, txt: "Deleted", sprite: "mailicon sprite-deleted" },
           { id: 15, parentId: 1, txt: "Junk mails", sprite: "mailicon sprite-junk" },
           { id: 16, parentId: 1, txt: "Personal", sprite: "mailicon sprite-folders" },
           { id: 17, parentId: 2, txt: "My Calender", sprite: "mailicon sprite-calendar" },
           { id: 18, parentId: 2, txt: "Team", sprite: "mailicon sprite-calendar" },
           { id: 19, parentId: 2, txt: "Others", sprite: "mailicon sprite-calendar" },
           { id: 20, parentId: 3, txt: "My Reference", sprite: "mailicon sprite-folder" },
           { id: 21, parentId: 3, txt: "Team Meeting", sprite: "mailicon sprite-folder" },
           { id: 22, parentId: 3, txt: "Others", sprite: "mailicon sprite-folder" },
           { id: 23, parentId: 4, txt: "Suggested", sprite: "mailicon sprite-contacts" },
           { id: 24, parentId: 4, txt: "My Team", sprite: "mailicon sprite-contacts" },
           { id: 25, parentId: 4, txt: "Others", sprite: "mailicon sprite-contacts" },
           //second level child
           { id: 111, parentId: 11, txt: "Development", sprite: "mailicon sprite-folders" },
           { id: 111, parentId: 11, txt: "Supports", sprite: "mailicon sprite-folders" },
           { id: 111, parentId: 11, txt: "HR Team", sprite: "mailicon sprite-folders" },
           { id: 112, parentId: 12, txt: "Support Template", sprite: "mailicon sprite-folders" },
           { id: 112, parentId: 12, txt: "Personal", sprite: "mailicon sprite-folders" }
];
syncApp.controller('MenuCtrl', function ($scope) {
    $scope.dataList = data;
	$scope.verticalmenutype = ej.MenuType.NormalMenu; 
    $scope.verticalmenuorientation = ej.Orientation.Vertical;
});