"use strict";
var contact = [
"Nancy@syncfusion.com",
"Andrew@syncfusion.com",
"Janet@syncfusion.com",
"Margaret@syncfusion.com",
"Steven@syncfusion.com", "Robert@syncfusion.com", "Michael@syncfusion.com", "Laura@syncfusion.com"
];
angular.module('outlookApp', ['ejangular'])
.controller('outlookCtrl', function ($scope) {
    $scope.list = $scope.list1 = $scope.data = "";
    $scope.listsource = $scope.dataList = $scope.listsource1 = $scope.menusource = [];

	$.validator.setDefaults({
                ignore: [],
				errorClass:'e-validation-error',
				errorPlacement: function (error, element) {
                    $(error).insertAfter(element.closest(".e-widget"));
                }
                // any other default options and/or rules
            });
			
    $scope.dataManger1 = ej.DataManager({
        url: window.baseurl + "api/WebMail/LoadData", crossDomain: true
    });
    $scope.autosource = contact;
    $scope.toolList = ["formatStyle", "font", "style", "effects", "alignment", "lists", "indenting", "clipboard", "doAction", "clear", "casing", "print"];

    $scope.contactsource = contact;
    $scope.selectMode = ej.MultiSelectMode.VisualMode;

    //treenode click
    $scope.nodeClick = function (args) {
        switch (args.currentElement.textContent) {
            case "Inbox":
                $("#templatelist").ejListView({ "dataSource": $scope.list });
                $("#templatelist1").ejListView({ "dataSource": $scope.list1 });
                $("#ItemTitle").text("Inbox");
                args.currentElement.nextSibling.textContent = "3";
                $scope.setCount(args);
                break;
            case "Clutter":
                $("#templatelist").ejListView({ "dataSource": $scope.list });
                $("#templatelist1").attr("style", "display:none");
                $("#ItemTitle").text("Clutter");
                args.currentElement.nextSibling.textContent = "3";
                $scope.setCount(args);
                break;
            case "Sent Items":
                $("#templatelist1").ejListView({ "dataSource": $scope.list1 });
                $("#templatelist").attr("style", "display:none");
                $("#ItemTitle").text("Sent Items");
                break;
            case "Drafts":
                $("#templatelist").ejListView({ "dataSource": $scope.list });
                $("#templatelist1").attr("style", "display:none");
                $("#ItemTitle").text("Drafts");
                args.currentElement.nextSibling.textContent = "3";
                $scope.setCount(args);
                break;
        }
        $("#iconAccordion").css("display", "none");
        $("#mailarea").addClass("hidden");
        $("#menujson li:nth-child(n+2)").css("display", "none");
        $(".paneltxt").attr("style", "display:block");
    };

    $scope.setCount = function (args) {
        $scope.value = $(args.currentElement).closest("li").parent().parent().next().length !== 0 ? $(args.currentElement).closest("li").parent().parent().next().find("ul") : $(args.currentElement).closest("li").parent().parent().prev().find("ul");
        for (var i = 0; i < $scope.value.children().length; i++) {
            if (args.currentElement.textContent == $($scope.value.children()[i]).find(".treeitem").text()) {
                $($scope.value.children()[i]).find("#count").text("3");
            }
        }
    };

    //compose item
    $scope.mode = ej.InputMode.Text;

    //compose menu item click
    $scope.menuClick = function (args) {
        if (args.text == "New") {
            $("#autoTo").data("ejAutocomplete").clearText();
			$("#autoTo").data("ejAutocomplete").clearText();
			$("#mailsubject").ejMaskEdit("option", "value","");
			$("#rteSample").ejRTE("option", "value","");
            $("#mailarea").removeClass("hidden");
            $(".paneltxt").attr("style", "display:none");
            $("#iconAccordion").attr("style", "display:none");
			$("#menujson li:nth-child(n+2)").css("display", "none");
        }
    };
	
	$scope.searchAutoOpen = function (args) {
	    var obj=$("#searchAuto").data("ejAutocomplete");
	    obj.suggestionList.attr("style","top:85px;width:216px");
    };

    //send button click
    $scope.btnClick = function btnclick() {
        var val=$("#autoTo").ejAutocomplete("option", "value");
		var name =val.substr(0,val.indexOf('@'));
		var title = $("#mailsubject").ejMaskEdit("option", "value") == null ? "(No Subject)" : $("#mailsubject").ejMaskEdit("option", "value");
		var msg = $("#rteSample").ejRTE("option", "value") == "" ? "No preview is available" : $("#rteSample").ejRTE("option", "value");
		if(val == "")
			return false;
		else {
			var obj = $("#templatelist1").ejListView('instance');
        obj.addItem({ "ContactName": name, "ContactTitle": title, "Time":"9.00AM", "Message": msg ,"To" : "Krish Kael" },0);
	    list1=obj.model.dataSource;		
		$("#mailarea").addClass("hidden");
		$(".paneltxt").attr("style", "display:block");
		}
    };

    $scope.focusIn = "maskFocus";
    $scope.treeTemplate = "#treeTemplate";

    //list item click
    $scope.onMouseDown = function (args) {
        $scope.selectnode = $("#treeView").data("ejTreeView").model.selectedNode;
        $scope.countnode = $(".e-treeview").find(".e-active").find("#count");
        $scope.initialNode = $($(".e-treeview").find("ul:not(ul:first)")[0]).find("li:first").find("#count");
        $scope.initialNode1 = $($(".e-treeview").find("ul:not(ul:first)")[1]).find("li:first").find("#count");
        $scope.data = $($(".e-treeview").find(".e-active").closest("ul").parent()).next().length !== 0 ? $($(".e-treeview").find(".e-active").closest("ul").parent()).next() : $($(".e-treeview").find(".e-active").closest("ul").parent()).prev();
        if (args.item.closest("#templatelist") && args.item.find(".subjectstyle").attr("style") != "undefined") {
            if ($scope.selectnode == -1 && args.item.find(".subjectstyle").css("font-weight") == "bold") {
                $scope.initialNode.text($scope.initialNode.text() - 1);
                $scope.initialNode1.text($scope.initialNode1.text() - 1);
                if ($scope.initialNode.text() == "0")
                    $scope.initialNode.text("");
                if ($scope.initialNode1.text() == "0")
                    $scope.initialNode1.text("");

            }
            if ($scope.countnode.length !== 0 && args.item.find(".subjectstyle").css("font-weight") == "bold") {
                for (var j = 0; j < $scope.data.find("li").length; j++) {

                    if ($(".e-treeview").find(".e-active").find(".treeitem").text() == $($scope.data.find("li")[j]).find(".treeitem").text()) {
                        $($scope.data.find("li")[j]).find("#count").text($($scope.data.find("li")[j]).find("#count").text() - 1);
                        $scope.countnode.text($scope.countnode.text() - 1);
                        if ($($scope.data.find("li")[j]).find("#count").text() == "0")
                            $($scope.data.find("li")[j]).find("#count").text("");
                        if ($scope.countnode.text() == "0")
                            $scope.countnode.text("");
                    }
                }
            }
        }
        $(".e-acrdn").css("display", "block");
        $(".paneltxt").css("display", "none");
		if($(args.item).find(".descriptionstyle").text() == " No preview is available ")
			$("#accContent").attr("style","display:none");
		else
		{
			$("#accCont").text($(args.item).find(".descriptionstyle").text());
			$("#accFrom").text($(args.item).find(".templatetext").text().trim().concat("."));
			$("#accTo").text($(args.item).find(".receiver").text().trim().concat(","));
		}
        $("#sub").text($(args.item).find(".subjectstyle").text());
        $("#date").text($(args.item).find(".designationstyle").text());
        $("#to").text($(args.item).find(".receiver").text());
        $(args.item).find(".designationstyle").css({ "font-weight": "normal", "font-family": "Segoe UI", color: "#333" });
        $(args.item).find(".subjectstyle").css({ "font-weight": "normal", "font-family": "Segoe UI", color: "#333" });
        $("#mailarea").addClass("hidden");
        $("#menujson li:nth-child(n+2)").css("display", "inline-block");
    };

    $scope.dataManger1.executeQuery(ej.Query()).done(function (e) {
        $scope.$evalAsync(function () {
            $scope.listsource = e.result.OutlookItem;
            $scope.list = $scope.listsource;
            $scope.listsource1 = e.result.OutlookItem1;
            $scope.list1 = $scope.listsource1;
            $scope.dataList = e.result.TreeviewDB.TreeData;
            $scope.menusource = e.result.MenuDB.MenuData;
            $scope.menuType = "contextmenu";
            $scope.target = "#treeView";
        });
    });
	
	$("#textform").submit(function(e) {
       e.preventDefault();
    });
});




