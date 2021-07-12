syncApp.controller('PivotTreeMapColorCtrl', function ($scope) {
              $scope.isResponsive = true;
              $scope.dataSource = {
                  data: "//bi.syncfusion.com/olap/msmdpump.dll;Locale identifier=1033;", //data
                  catalog: "Adventure Works DW 2008 SE",
                  cube: "Adventure Works",
                  rows: [
                      {
                          fieldName: "[Customer].[Customer Geography]"
                      }
                  ],
                  columns: [
                      {
                          fieldName: "[Date].[Fiscal]"
                      }
                  ],
                  values: [
                      {
                          measures: [
                              {
                                  fieldName: "[Measures].[Customer Count]",
                              }
                          ],
                          axis: "columns"
                      }
                  ]
              };
			  $scope.onTypeChange = function(args){
				treemapTarget = $('#PivotTreeMapTreeMapContainer').data("ejTreeMap");
				treemapTarget.model.colorValuePath = "";
				treemapTarget.model.enableGradient = false;
				treemapTarget.model.showLegend = false;
				treemapTarget.model.legendSettings.leftLabel = "";
				treemapTarget.model.legendSettings.rightLabel = "";
				treemapTarget.model.rangeColorMapping = [];
				treemapTarget.model.colorValuePath = "Value";
				treemapTarget.model.rangeColorMapping.push(
				{ color: "#a2e2fe", from: "0", to: "10" },
				{ color: "#9de24f", from: "11", to: "250" },
				{ color: "#ffff66", from: "251", to: "1000" },
				{ color: "#C4C24A", from: "1001", to: "3000" },
				{ color: "#f6b53f", from: "3001", to: "5000" },
				{ color: "#6FAAB0", from: "5001", to: "10000" },
				{ color: "#FF0040", from: "10001", to: "20000" }
				)
				treemapTarget.refresh();
			  }
          });