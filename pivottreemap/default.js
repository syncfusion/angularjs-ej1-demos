syncApp.controller('PivotTreeMapCtrl', function ($scope) {
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
          });