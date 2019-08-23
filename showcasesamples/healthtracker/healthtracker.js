"use strict";
var obj = [
    { x: "Carbohydrate", y: 10, fill: "#D3C1D4" },
    { x: 'Fat', y: 90, fill: "#B26CAB" },
];
var obj1 = [
    { x: "Carbohydrate", y: 6, fill: "#7D70B3" },
    { x: 'Fat', y: 4, fill: "#BFBED9" },
];
angular.module('healthTrackerApp', ['ejangular'])
.controller('healthTrackerCtrl', function ($scope, $compile) {
    $scope.data1 = obj;
    $scope.data2 = obj1;
    $scope.addmeal = function() {
	   $("#Grid").ejGrid("addRecord");
    }; 
	$scope.griddata=$scope.caldatasource=$scope.burntdatasource=$scope.mealdatasource1 =$scope.mealdatasource2=$scope.mealdatasource3=$scope.sumColl= [];
    //grid is loaded with food information
    $scope.dataManger1 = ej.DataManager({
        url: window.baseurl + "api/healthtracker/load", crossDomain:true
    });
   //update chart with summary values of grid
   $scope.updateChartSeries=function(){
	  $("#Chart").ejChart("option", {
        "model": {
            series: [{
            marker: { dataLabel: { visible: true, font: { color: '#707070', size: '15px', fontWeight: 'lighter' } } },
            name: 'Newyork',labelPosition: 'outside', doughnutSize: 0.9, opacity: 0.8,
            border: { width: 1 },
		    "points": [{ x: 'Carb', y: $scope.sumColl[1], fill: "#B44A4A", text:$scope.sumColl[1] + "g" + " Carb" },
                    { x: 'Protein', y: $scope.sumColl[2], fill: "#53B2C1", text:$scope.sumColl[2] + "g" + " Protein" },
                    { x: 'Fat', y: $scope.sumColl[0], fill: "#F9AF3C", text:$scope.sumColl[0] + "g" + " Fat" }
                ]
			  }]
            }
		}); 
   }
   $scope.getSummaryDetails=function(){
    $scope.gridobj = $("#Grid").data("ejGrid");
    $scope.sumValue =  $scope.gridobj.model.summaryRows[0].summaryColumns;
    $scope.sumColl = [];
    $.each($scope.sumValue, function (index, item) {
         $scope.sumColl.push(Math.round($scope.gridobj.getSummaryValues(item)));
    });
    return  $scope.sumColl;
   }
     $scope.dataManger1.executeQuery(ej.Query()).done(function (e) {
	    $scope.$apply(function(){
	    $scope.griddata = e.result.FoodInfo;
	    $scope.calChart = $("#ChartCal").data("ejChart");
        $scope.burntChart = $("#ChartBurnt").data("ejChart");
        $scope.mealChart = $("#MealDetails").data("ejChart");
        //render the series for calories chart
		$scope.caldatasource = e.result.ChartDB.CalData;
        //generate the series for steps moved chart
		$scope.burntdatasource =  e.result.ChartDB.BurntData;
        //generate the series for meals intake chart
		$scope.mealdatasource1 =  e.result.ChartDB.MealData.Open;
		$scope.mealdatasource2 =  e.result.ChartDB.MealData.Close;
		$scope.mealdatasource3 =  e.result.ChartDB.MealData.OpenClose;
        $scope.calChart.model.series[0].xName = $scope.burntChart.model.series[0].xName = $scope.mealChart.model.series[0].xName = $scope.mealChart.model.series[1].yName = $scope.mealChart.model.series[2].yName = "XValue";
        $scope.calChart.model.series[0].yName = $scope.burntChart.model.series[0].yName = $scope.mealChart.model.series[0].yName = $scope.mealChart.model.series[1].yName = $scope.mealChart.model.series[2].yName = "YValue";
		});
        $scope.sumColl = $scope.getSummaryDetails();
        $scope.updateChartSeries();
    });
//update calories burnt gauge
   $scope.updateGauge=function(caloriesValue) {
    $scope.gaugeObj = $("#GaugeRDI").data("ejCircularGauge");
    $scope.gaugeObj.setPointerValue(0, 0, caloriesValue);
    $scope.gaugeObj.setRangeStartValue(0, 0, 0);
    $scope.gaugeObj.setRangeEndValue(0, 0, caloriesValue);
    $scope.gaugeObj.setRangeStartValue(0, 1, caloriesValue);
    $scope.gaugeObj.setRangeEndValue(0, 1, 2200);
    $(".rdilabel").text("Calories Intake - " + caloriesValue + "/2200");
    $(".rdipenlabel").text(2200 - caloriesValue + " calories pending");
  }
//generate random numbers
  $scope.getRandomNum=function(ubound, lbound) {
    return (Math.floor(Math.random() * (ubound - lbound)) + lbound);
  }
  $scope.compileEle =  function(ele){
   $compile(ele)($scope);
  }
  $scope.actionComplete=function(args) {
    if (args.requestType == "beginedit" || args.requestType == "add") {	
        $("#Fat,#Carbohydrate,#Protein,#Calorie").ejNumericTextbox({ width: "120px", minValue: 1, maximum: 1000 });
        $("#EditDialog_Grid_Save").val("Done");
        $("#Fat, #Carbohydrate, #Protein, #Calorie,#Time, #FoodName").css("text-align", "left");
        $("#EditDialog_Grid_Cancel").remove();
        $('#Time').ejTimePicker();
        if (args.requestType == "beginedit")
            $("#MealSummary span.e-title").text("Edit");
        else {
            $("#Time").data("ejTimePicker").setCurrentTime();
            $("#MealSummary span.e-title").text("Add Food");
        }
	}
    if (args.requestType != "refresh" && args.requestType == "save") {
        args.data.FoodId =  $scope.getRandomNum(6, 50);
		$scope.sumColl =[];
        $scope.sumColl = $scope.getSummaryDetails();
        //refresh the chart if the new food item is added.
        $scope.updateChartSeries();
        //calories sum to refresh Gauge
        $scope.updateGauge($scope.sumColl[3]);
    }
  }
  $scope.summaryRows = [{
      title: "Sum", summaryColumns: [{ summaryType: ej.Grid.SummaryType.Sum, displayColumn: "Fat", dataMember: "Fat", format: "{0:N0}g" },
          { summaryType: ej.Grid.SummaryType.Sum, displayColumn: "Carbohydrate", dataMember: "Carbohydrate", format: "{0:N0}g" },
          { summaryType: ej.Grid.SummaryType.Sum, displayColumn: "Protein", dataMember: "Protein", format: "{0:N0}g" },
          { summaryType: ej.Grid.SummaryType.Sum, displayColumn: "Calorie", dataMember: "Calorie", format: "{0:N0}g" }
      ],
      showTotalSummary: true
  }];
//render the series for the steps moved and calories burnt chart
   $scope.renderBurntCal=function(){
       $scope.chartCalObj = $("#ChartCal").data("ejChart");
       $scope.chartBurntObj = $("#ChartBurnt").data("ejChart");
	   $scope.chartCalObj.model.series[0].tooltip.template='CalTooltip';
       $scope.chartCalObj.seriesRender();
       $scope.chartBurntObj.model.series[0].tooltip.template='BurntTooltip';
       $scope.chartBurntObj.seriesRender();
   }
//render the series for the meal intake chart
  $scope.renderMealIntake=function(){
    $scope.chartMealObj = $("#MealDetails").data("ejChart");
	$scope.chartMealObj.model.series[0].tooltip.template='HydrateTooltip';
	$scope.chartMealObj.model.series[1].tooltip.template='ProteinTooltip';
	$scope.chartMealObj.model.series[2].tooltip.template='FatTooltip';
    $scope.chartMealObj.seriesRender();
  } 
//load the monthly reported charts when we scroll down
  $scope.renderControl=function(args){
    if (args.element.hasClass("titlecss"))
        $scope.renderBurntCal();
    else
        $scope.renderMealIntake();
 }
});
