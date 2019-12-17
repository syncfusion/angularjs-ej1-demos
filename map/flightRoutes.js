syncApp.controller('Map', function ($scope) {
   $scope.MapData = world_map;
   $scope.FlightData = flightRoutes;
   $scope.FlightRoutes_data = flightRoutes_data;
   $scope.Airports_data = airports_data;
   $scope.Airports = airports;
   $scope.Intermediatestops1 = intermediatestops1;
   $scope.Intermediatestops1_data = intermediatestops1_data;
   $scope.Intermediatestops2 = intermediatestops2;
   $scope.Intermediatestops2_data = intermediatestops2_data;
});
