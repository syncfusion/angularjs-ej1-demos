syncApp.controller('LinearGauge', function ($scope) {
                 $scope.nvalue = 50;
                 $scope.minvalue = 0;
                 $scope.maxvalue = 120;
             });
        function validate(e) {
            var min = $("#txtMin").data("ejNumericTextbox");
            var max = $("#txtMax").data("ejNumericTextbox");
            var val = $("#txtValue").data("ejNumericTextbox");
            if (min.option("value") > e.value)
                val.option("value", min.option("value"));
            else if (max.option("value") < e.value)
                val.option("value", max.option("value"));
        }
        function validateMin(e) {
            var max = $("#txtMax").data("ejNumericTextbox");
            if (max.option("value") == e.value)
                max.option("value", max.option("value") + 1);
        }
        function validateMax(e) {
            var min = $("#txtMin").data("ejNumericTextbox");
            var max = $("#txtMax").data("ejNumericTextbox");
            if (min.option("value") == e.value)
                max.option("value", max.option("value") + 1);
        }


