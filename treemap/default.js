syncApp.controller('TreeMapcontroller', function ($scope) {
    $scope.legend = {
        leftLabel: "20000000",
        width: 150,
        height: 20,
        rightLabel: "300000000",
        title: "Population",
        mode: "interactive",
        dockPosition: "top",
        alignment: "center"
    };
           $scope.ndatasource = population_data;
           $scope.ncolorValuePath = "Growth";
           $scope.nweightValuePath = "Growth";
           $scope.nborderthickness = 2;
           $scope.nshowLabels = true;
           $scope.nlabelPath = "Country";

           $scope.ngroupPath = "Continent";
           $scope.ngroupGap = 5;
           $scope.ngroupPadding = 5;
           $scope.nheaderHeight = 25;
           $scope.nshowHeader = true;

           $scope.ngroupid1 = "Asia";
           $scope.ncolor1 = "#2380BB";
           $scope.ngroupid2 = "North America";
           $scope.ncolor2 = "#209E86";
           $scope.ngroupid3 = "South America";
           $scope.ncolor3 = "#8D43B2";
           $scope.ngroupid4 = "Africa";
           $scope.ncolor4 = "#E78009";
           $scope.ngroupid5 = "Europe";
           $scope.ncolor5 = "#E74F38";
       });