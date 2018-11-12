
 $(document).on("keydown", function (e) {
                if (e.altKey && e.keyCode === 74) { // j- key code.
                    $("#outterSpliter .e-splitbar")[0].focus();
                }
            });

syncApp.controller('SplitterCtrl', function ($scope) {
    $scope.properties1 = [{}, { paneSize: 80, collapsible: true }];	
})

