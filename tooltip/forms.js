
          syncApp.controller('TooltipCtrl', function ($scope) { 
			$scope.formsposition = {
        stem: {
                horizontal: "left",
                vertical: "center"
              },
        target:
            {
            horizontal : "right",
            vertical : "center",
            },
    };
    $scope.formsinputmode = ej.InputMode.Text;
           });