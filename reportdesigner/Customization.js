var rptName = "/Catagory1/Website Visitor Analysis";

syncApp.controller('reportdesignerCrtl', function ($scope, $interval) {
    $scope.serviceUrl = window.baseurl + 'api/ReportDesigner';
    $scope.create = "controlInitialized";
    $scope.toolbarSettings = {
        items: ej.ReportDesigner.ToolbarItems.All & ~ej.ReportDesigner.ToolbarItems.Preview & ~ej.ReportDesigner.ToolbarItems.EditDesign & ~ej.ReportDesigner.ToolbarItems.New & ~ej.ReportDesigner.ToolbarItems.Open & ~ej.ReportDesigner.ToolbarItems.Save
    };
    $scope.designerToolbarRendering = "renderDesignerToolbar";
    $scope.reportServiceUrl = window.baseurl + 'api/ReportDesigner';
    $scope.remoteMode= ej.ReportViewer.ProcessingMode.Remote;
    $scope.viewerToolbarRendering = "renderViewerToolbar";
    $scope.reportServerUrl = "/";
    $scope.reportPath = rptName;
});

function designerInitialization(args) {
    var designer = $('#rptDesigner').data('ejReportDesigner');
    designer.openReport(rptName);
}

function showViewer() {
    $("#rptViewer").css('display', 'block');
    $("#rptDesigner").css('display', 'none');
    var viewer = $('#rptViewer').data('ejReportViewer');
    viewer.reload();
}

function showDesigner() {
    $('#rptViewer_loadingIndicator').data('ejWaitingPopup').hide();
    $("#rptViewer").css('display', 'none');
    $("#rptDesigner").css('display', 'block');
    var designer = $('#rptDesigner').data('ejReportDesigner');
    if (designer) {
        designer.openReport(rptName);
        var waitingPopup = $('#rptDesigner_designAreaContainer').data('ejWaitingPopup');
        waitingPopup.hide();
    } else {
        renderDesigner();

    }
}

function saveReport() {
    var designer = $('#rptDesigner').data('ejReportDesigner');
    designer.saveReport();
}

function updateViewerHiddenList() {
    if ($('#rptViewer_toolbarContainer_target').length > 0 && $('#rptViewer_toolbarContainer_hiddenlist').is(':visible')) {
        $('#rptViewer_toolbarContainer_target').mousedown();
    }
}

function updateDesignerHiddenList() {
    if ($('#rptDesigner_toolBar_target').length > 0 && $('#rptDesigner_toolBar_hiddenlist').is(':visible')) {
        $('#rptDesigner_toolBar_target').mousedown();
    }
}

function cancelReport() {
    var designer = $('#rptDesigner').data('ejReportDesigner');
    updateDesignerHiddenList();
    if (designer.hasReportChanges()) {
        if (confirm("Changes you made may not be saved. Do you want back to Preview?")) {
            showViewer();
        } else {
            return;
        }
    } else {
        showViewer();
    }
}

function renderViewerToolbar(args) {
    var ulTag = $("<ul class='e-reportviewer-sample-toolbarul'/>");
    ulTag.attr('id', 'reportviewer-toolbarul');
    var divElement = $("<div/>");
    divElement.attr('id', 'reportviewer-edit-div');
    var editbutton = $("<button></button>");
    editbutton.attr('id', 'reportviewer-editbutton');
    divElement.append(editbutton);
    ulTag.append(divElement);
    args.target.append(ulTag);
    editbutton.bind('click', $.proxy(editClick, this));
    editbutton.ejButton({
        size: "medium",
        showRoundedCorner: true,
        cssClass: 'e-primary',
        contentType: "textandimage",
        prefixIcon: "e-icon e-edit",
        text: "Edit"

    });
    if (window.theme === 'office-365') {
        $('#reportviewer-edit-div').css('padding-top', '8px');
    }
}

function renderDesignerToolbar(args) {
    var ulTag = $("<ul class='e-rptdesigner-sample-toolbarul'/>");
    ulTag.attr('id', 'reportdesigner-toolbarul');
    var divElement = $("<div/>");
    divElement.attr('id', 'reportdesigner-btn-div');
    var saveButton = $("<button></button>");
    saveButton.attr('id', 'reportdesigner-savebutton');
    var backButton = $("<button></button>");
    backButton.attr('id', 'reportdesigner-backbutton');
    divElement.append(saveButton);
    divElement.append(backButton);
    ulTag.append(divElement);
    args.target.append(ulTag);
    saveButton.bind('click', $.proxy(saveClick, this));
    backButton.bind('click', $.proxy(cancelClick, this));
    saveButton.ejButton({
        size: "medium",
        showRoundedCorner: true,
        cssClass: 'e-primary',
        contentType: "textandimage",
        prefixIcon: "e-icon e-save",
        text: 'Save'
    });
    backButton.ejButton({
        size: "medium",
        showRoundedCorner: true,
        contentType: "textandimage",
        prefixIcon: "e-icon e-undo",
        text: 'Back'
    });
}

function editClick(args) {
    updateViewerHiddenList();
    showDesigner();
}

function saveClick(args) {
    updateDesignerHiddenList();
    saveReport();
}

function cancelClick(args) {
    cancelReport();
}