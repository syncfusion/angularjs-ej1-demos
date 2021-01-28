var list = [
              { text: "Google", url: "//www.google.co.in", frequency: 12 },
              { text: "a2zwebhelp", url: "//www.a2zwebhelp.com", frequency: 3 },
              { text: "Arts Technica", url: "//arstechnica.com/", frequency: 8 },
              { text: "Bxslider", url: "//bxslider.com/examples", frequency: 2 },
              { text: "Yahoo", url: "//in.yahoo.com/", frequency: 12 },
              { text: "Facebook", url: "https://www.facebook.com/", frequency: 5 },
              { text: "Blogspot", url: "//www.blogspot.com/", frequency: 8 },
              { text: "Microsoft", url: "//www.microsoft.com/", frequency: 20 },
              { text: "Amazon.com", url: "//www.amazon.com/", frequency: 1 },
              { text: "MSN", url: "//www.msn.com/", frequency: 3 },
              { text: "Engadget", url: "//www.engadget.com/", frequency: 5 },
              { text: "LinkedIn", url: "//www.linkedIn.com/", frequency: 9 },
              { text: "Twitter", url: "//www.Twitter.com/", frequency: 0 },
              { text: "Menucool", url: "//www.menucool.com", frequency: 3 },
              { text: "BBC", url: "//www.bbc.co.uk/", frequency: 11 },
              { text: "Valleywag", url: "//valleywag.gawker.com/", frequency: 6 },
              { text: "WOWslider", url: "//wowslider.com", frequency: 9 },
              { text: "W3schools", url: "//www.w3schools.com/", frequency: 2 }

];

syncApp.controller('TagCtrl', function ($scope) {
    $scope.dataList = list;
});