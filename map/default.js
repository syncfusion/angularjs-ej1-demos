var randomcountriesData1 = [
{ country: "Iran", "continent": "Asia", "CategoryName": "Books", "Sales": 550 },
{ country: "Benin", "continent": "Africa", "CategoryName": "Books", "Sales": 1000 },
{ country: "China", "continent": "Asia", "CategoryName": "Books", "Sales": 420 },
{ country: "Chile", "continent": "South America", "CategoryName": "Books", "Sales": 1100 },
{ country: "Cuba", "continent": "North America", "CategoryName": "Books", "Sales": 450 },
{ country: "Spain", "continent": "Europe", "CategoryName": "Books", "Sales": 1200 },
{ country: "Fiji", "continent": "Oceania", "CategoryName": "Books", "Sales": 618.0 },
];

                   syncApp.controller('Map', function ($scope) {
                       $scope.nenableanimation = true,
                       $scope.nenablepan = true;
                       $scope.nenablezoom = true,
                       $scope.nlevel = 1,
                       $scope.nfactor = 1,

                       $scope.nenablenavigation = false;
                       $scope.nshapedata = world_map;
                       $scope.ndatasource1 = randomcountriesData1;
                       $scope.nshowlegend = true;
                       $scope.nfill = "#4E7EC4";
                       $scope.nstrokethickness = "0.5";
                       $scope.nstroke = "white";
                       $scope.nshapeDataPath = "country";
                       $scope.nshapePropertyPath = "name";
                       $scope.nshowmapitems = true;
                       $scope.nmapItemsTemplate = "labeltemplate";
                       $scope.nenableselection=true;
                       $scope.nselectioncolor = "#207BB2";
                       $scope.nenablemousehover = true;
                       $scope.nhighlightcolor = "#F4CD0C";
                                           
                       $scope.nshowbubble = true;
                       $scope.nvaluepath = "Sales";
                       $scope.nminvalue = 15;
                       $scope.nmaxvalue = 30;

                       $scope.nfrom1 = "400";
                       $scope.nto1 = "600";
                       $scope.ncolor1 = "#C6C35C";
                       $scope.nfrom2 = "601";
                       $scope.nto2 = "900";
                       $scope.ncolor2 = "#F94165";
                       $scope.nfrom3 = "901";
                       $scope.nto3 = "1500";
                       $scope.ncolor3 = "#F47F31";
                   });

