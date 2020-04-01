var appModule = angular.module('personExpenseApp', ['ejangular'])
appModule.controller('designerCrtl', function ($scope) {
    $scope.serviceUrl = window.baseurl + 'api/ReportDesigner';
    $scope.toolbarSettings = {
        items: ej.ReportDesigner.ToolbarItems.All & ~ej.ReportDesigner.ToolbarItems.Preview & ~ej.ReportDesigner.ToolbarItems.EditDesign
    };
    $scope.toolbarClick="toolbarClick";
    $scope.reportOpened="reportOpened";
    $scope.reportSaved= "reportSaved";
    $scope.reportModified = "reportModified";
	$scope.openReport = function() {
    var designer = $('#' + controlId).data('ejReportDesigner');
     designer.openReport('/Catagory2/Personal Expense Analysis');	
	};
});

var controlId = 'container';

$(document).ready(function () {
        $(window).bind("resize", windowResize);
        $('#preview_btn').bind("click", previewClick);
        $('#design_btn').bind("click", designClick);
        refreshWindow();
});

function windowResize(args) {
    refreshWindow();
}

function previewClick(agrs) {
    var designer = $('#' + controlId).data('ejReportDesigner');
    $('#design_btn').show();
    $('.rptdesigner-sample-designBtn').css('display', 'block');
    $('#preview_btn').hide();
    $('.rptdesigner-sample-previewBtn').css('display', "none");
    designer.showPreview();
}

function designClick(agrs) {
    var designer = $('#' + controlId).data('ejReportDesigner');
    $("#preview_btn").show();
    $(".rptdesigner-sample-previewBtn").css('display', 'block');
    $("#design_btn").hide();
    $(".rptdesigner-sample-designBtn").css('display', 'none');
    designer.showDesign();
}

function refreshWindow() {
    $('#' + controlId).width($(window).width());
    var windowHeight = $(window).innerHeight();
    var headerHeight = $("#sample_header_div").outerHeight();
    var containerHeight = windowHeight - headerHeight;
    $('#' + controlId).height(containerHeight);
}

function reportModified(args) {
    if (args.isModified) {
        $('.rptdesigner-sample-reportstatus').html('(Edited)');
    }
}

function reportOpened(args) {
    $('#report_name_header').html(args.reportName);
    $('.rptdesigner-sample-reportstatus').html('(Edited)');
}

function reportSaved(args) {
    $('.rptdesigner-sample-reportstatus').html('(Saved)');
}

function toolbarClick(args) {
    var designer = $('#' + controlId).data('ejReportDesigner');
    switch (args.click) {
        case 'New':
            args.cancel = true;
            if (designer.hasReportChanges()) {
                if (confirm("Do you want to discard the modifed changes?") == true) {
                    designer.newReport('Untitled');
                    $('#report_name_header').html('Untitled');
                }
            }
            else {
                designer.newReport('Untitled');
                $('#report_name_header').html('Untitled');
            }
            break;
    }
}

