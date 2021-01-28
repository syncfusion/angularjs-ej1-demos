var phones = [
               { id: 1, name: "Fiction Book Lists", hasChild: true, expanded: true },
               { id: 2, pid: 1, name: "To Kill a Mockingbird " },
               { id: 3, pid: 1, name: "Pride and Prejudice " },
               { id: 4, pid: 1, name: "Harry Potter" },
               { id: 5, pid: 1, name: "The Hobbit " },
               { id: 6, name: "Mystery Book Lists", hasChild: true, expanded: true },
               { id: 7, pid: 6, name: "And Then There Were None " },
               { id: 8, pid: 6, name: "Angels & Demons" },
               { id: 9, pid: 6, name: "In Cold Blood " },
               { id: 10, pid: 6, name: "The Name of the Rose " },
               { id: 11, name: "Horror Novels", hasChild: true },
               { id: 12, pid: 11, name: "The Shining (The Shining, #1) " },
               { id: 13, pid: 11, name: "The Haunting of Hill House " },
               { id: 14, pid: 11, name: "The Silence of the Lambs (Hannibal Lecter, #2) " },
               { id: 15, name: "Novel Lists", hasChild: true },
               { id: 16, pid: 15, name: "Shadow Hills (Shadow Hills, #1) " },
               { id: 17, pid: 15, name: "After Forever Ends " },
               { id: 18, pid: 15, name: "Angel Star" },
               { id: 19, pid: 15, name: "Raised by Wolves" },
               { id: 20, pid: 15, name: "Falling From Grace" }];

syncApp.controller('TreeCtrl', function ($scope) {
    $scope.dataList = phones;
});