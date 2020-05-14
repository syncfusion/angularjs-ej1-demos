
syncApp.controller('ListBoxDefaultCtrl', function ($scope) {
    $scope.dataList = [
                         { empid: "cr1", text: "Dodge Avenger" },
                         { empid: "cr2", text: "Chrysler 200" },
                         { empid: "cr3", text: "Ford Focus" },
                         { empid: "cr4", text: "Ford Taurus", },
                         { empid: "cr5", text: "Dazzler", },
                         { empid: "cr6", text: "Chevy Spark", },
                         { empid: "cr7", text: "Chevy Volt", },
                         { empid: "cr8", text: "Honda Fit", },
                         { empid: "cr9", text: "Honda Crosstour", },
                         { empid: "cr10", text: "Acura RL", },
                         { empid: "cr11", text: "Hyundai Elantra", },
                         { empid: "cr12", text: "Mazda3", }
    ];
    $scope.value = "Ford Taurus";
});
