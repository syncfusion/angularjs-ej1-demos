
syncApp.controller('ChartCtrl', function ($scope) {
	
  $scope.load= "onchartLoading";
  $scope.Points1 =  [{ x: 1971, y: 50 }, { x: 1972, y: 20 }, { x: 1973, y: 63 },{ x: 1974, y: 81 },{ x: 1975, y: 64 },
                                { x: 1976, y: 36 }, { x: 1977, y: 22 }, { x: 1978, y: 78 }, { x: 1979, y: 60 },{ x: 1980, y: 41 },
                                { x: 1981, y: 62 }, { x: 1982, y: 56 }, { x: 1983, y: 96 }, { x: 1984, y: 48 },{ x: 1985, y: 23 },
                                { x: 1986, y: 54 }, { x: 1987, y: 73 }, { x: 1988, y: 56 }, { x: 1989, y: 67 }, { x: 1990, y: 79 },
                                { x: 1991, y: 18 }, { x: 1992, y: 78 }, { x: 1993, y: 92 }, { x: 1994, y: 43 }, { x: 1995, y: 29 },
                                { x: 1996, y: 14 }, { x: 1997, y: 85 }, { x: 1998, y: 24 }, { x: 1999, y: 61 }, { x: 2000, y: 80 },
                                { x: 2001, y: 14 }, { x: 2002, y: 34 }, { x: 2003, y: 81 }, { x: 2004, y: 70 }, { x: 2005, y: 21 },
                                { x: 2006, y: 70 }, { x: 2007, y: 32 }, { x: 2008, y: 43 }, { x: 2009, y: 21 }, { x: 2010, y: 63 },
                                { x: 2011, y: 9 }, { x: 2012, y: 51 }, { x: 2013, y: 25 }, { x: 2014, y: 96 }, { x: 2015, y: 32 }
                       ];
	
	$scope.Points2 = [{ x: 1971, y: 23 }, { x: 1972, y: 67 }, { x: 1973, y: 83 }, { x: 1974, y: 43 }, { x: 1975, y: 8 },
                                { x: 1976, y: 41 }, { x: 1977, y: 56 }, { x: 1978, y: 31 }, { x: 1979, y: 29 }, { x: 1980, y: 87 },
                                { x: 1981, y: 43 }, { x: 1982, y: 12 }, { x: 1983, y: 38 }, { x: 1984, y: 67 }, { x: 1985, y: 49 },
                                { x: 1986, y: 67 }, { x: 1987, y: 83 }, { x: 1988, y: 16 }, { x: 1989, y: 89 }, { x: 1990, y: 18 },
                                { x: 1991, y: 46 }, { x: 1992, y: 39 }, { x: 1993, y: 68 }, { x: 1994, y: 87 }, { x: 1995, y: 45 },
                                { x: 1996, y: 42 }, { x: 1997, y: 28 }, { x: 1998, y: 82 }, { x: 1999, y: 13 }, { x: 2000, y: 83 },
                                { x: 2001, y: 26 }, { x: 2002, y: 57 }, { x: 2003, y: 48 }, { x: 2004, y: 84 }, { x: 2005, y: 64 },
                                { x: 2006, y: 24 }, { x: 2007, y: 82 }, { x: 2008, y: 37 }, { x: 2009, y: 68 }, { x: 2010, y: 37 },
                                { x: 2011, y: 35 }, { x: 2012, y: 81 }, { x: 2013, y: 38 }, { x: 2014, y: 51 }, { x: 2015, y: 58 }
                       ];
});

 function onchartLoading(sender) {
		         loadTheme(sender);
	             var gData = [], newData = [];
	             gData.push({ Year: 'No Data', Sales: 'No Data' });
	             newData.push({ Year: 'No Data', Sales: 'No Data' });
	             $("#ProductA").ejGrid({ "dataSource": gData });
	             $("#ProductA").ejGrid({ "allowScrolling": true, "scrollSettings": { width: "auto" } });
	             $("#ProductB").ejGrid({ "dataSource": newData });
	             $("#ProductB").ejGrid({ "allowScrolling": true, "scrollSettings": { width: "auto" } });
	         }
	         function selectiontypechanged(sender) {
                 var val = $("#selection")[0].value;
                 var chart = $("#container").ejChart('instance');
                 for (var i = 0; i < chart.model.series.length; i++) {
                     chart.model.series[i].selectionSettings.rangeType = val;
                     chart.redraw();
                 }
             }
             function selectedRegion(sender) {
                 var gData = [],newData=[], collectiondata = [];
                 for (var i = 0; i < sender.data.selectedDataCollection.length; i++) {
                     for (var j = 0; j < sender.data.selectedDataCollection[i].length; j++) {
                         collectiondata[j] = sender.data.selectedDataCollection[i][j];
                        if (collectiondata[j].seriesIndex === 0) {
                             gData.push({ Year: collectiondata[j].x.toString(), Sales: collectiondata[j].y.toString() });
                            }
                        else if (collectiondata[j].seriesIndex === 1) {
                            newData.push({ Year: collectiondata[j].x.toString(), Sales: collectiondata[j].y.toString() });
                           }
                        }
                 }
				  if(gData){
				     $("#ProductA").ejGrid({ "dataSource": gData });
                     $("#ProductA").ejGrid({ "allowScrolling": true, "scrollSettings": { width: 120 } });
					}
				  if(newData){
				     $("#ProductB").ejGrid({ "dataSource": newData });
				     $("#ProductB").ejGrid({ "allowScrolling": true, "scrollSettings": { width: 120 } });
					}
                }

	

