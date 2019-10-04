syncApp.controller('PDFViewerController', function ($scope, $interval) {
    $scope.serviceurl = window.baseurl+"api/PdfViewer/";
    $scope.pdfService = ej.PdfViewer.PdfService.Local;
    $scope.currentPageNumber = 1;
    $scope.isTextFieldInFocus = false;
    var mousePosX, mousePosY, heigth, width;
    $scope.toolbarInView = false;
    height = parseInt(document.getElementById("container").style.height);
    width = window.innerWidth;
    
    $scope.mousemovefunction = function (args) {
        var offset = $("#container").offset();
        mousePosX = args.pageX - offset.left;
        mousePosY = args.pageY - offset.top;
        if (!$scope.toolbarInView) {
            if ((mousePosY < height / 8) || (mousePosX <= width / 8)) {
                $scope.showCustomToolbar();
            }
            else {
            }
        }
    }

    $scope.showCustomToolbar = function () {
        $("#magnificationDiv").css({ 'left': "0px", "position": "absolute", "height": 300 + "px", "top": (height - 550) + "px", "z-index": "-10000" }).animate({ "left": "150px", 'z-index': '10', "display": "block" }, "slow");
        $("#toolbarDiv").css({'border': 'transparent', "top": "-58px", "position": "absolute", "z-index": "-10000" }).animate({ "height": 56 + "px", 'top': '0px', 'border': 'transparent', 'z-index': '10', "display": "block" }, "slow");
        $scope.toolbarInView = true;
        $scope.updatePageNavigation();
    }

    $scope.hideCustomToolbar = function () {
        $("#toolbarDiv").css({ height: 56 + "px" }).animate({ "top": "-58px", "z-index": "-10000", "display": "none" }, "slow");
        $("#magnificationDiv").css({ left: "340px" }).animate({ "left": "0px", "z-index": "-10000", "display": "none" }, "slow");
        $scope.toolbarInView = false;
    }
    $interval(function () { $scope.hideToolbar() }, 5000);
    $scope.hideToolbar = function () {
        if (!((mousePosY < height / 8) || (mousePosX <= width / 8))) {
            if (($scope.toolbarInView) && (!$scope.isTextFieldInFocus)) {
                $scope.hideCustomToolbar();
            }
        }
    }
    $scope.showTooltip = function (event) {
        var $divTooltip = ej.buildTag("div.e-pdfviewer-tbdiv e-pdfviewer-tooltip", "", { 'display': 'none' }, { 'id': 'toolTip' });
        var $tooltipContent = ej.buildTag("span.e-pdfviewer-contentspan", "", { 'display': 'block' }, { 'id': 'toolTip_Content' });
        $divTooltip.append($tooltipContent);
        $('body').append($divTooltip);
        if ($('#toolTip').css('display') == 'none') {
            $scope.showTooltipContent(event);
        }
        $scope.showTooltipContent(event);
    };

    $scope.hideTooltip = function () {
        $('#toolTip').remove();
    };

    $scope.showTooltipContent = function (event) {
        var currentToolbarItem = document.getElementById(event.target.id);
        var TooltipPos;
        var toolTipText;
        var disabledItem = $(currentToolbarItem).prev();
        if ($(currentToolbarItem).hasClass("e-pdfviewer-print")) {
            TooltipPos = $('#toolbarDiv .e-pdfviewer-print')[0].getBoundingClientRect();
            toolTipText = 'Print';
        }
        else if (($(currentToolbarItem).hasClass("e-pdfviewer-gotonext")) || ($(disabledItem).hasClass('e-pdfviewer-gotonext'))) {
            TooltipPos = $('#toolbarDiv .e-pdfviewer-gotonext')[0].getBoundingClientRect();
            toolTipText = 'Next';
        }
        else if (($(currentToolbarItem).hasClass("e-pdfviewer-gotoprevious")) || ($(disabledItem).hasClass('e-pdfviewer-gotoprevious'))) {
            TooltipPos = $('#toolbarDiv .e-pdfviewer-gotoprevious')[0].getBoundingClientRect();
            toolTipText = 'Previous';
        }
        else if (($(currentToolbarItem).hasClass("e-pdfviewer-zoomin")) || ($(disabledItem).hasClass('e-pdfviewer-zoomin'))) {
            TooltipPos = $('#magnificationDiv  .e-pdfviewer-zoomin')[0].getBoundingClientRect();
            toolTipText = 'Zoom-In';
        }
        else if (($(currentToolbarItem).hasClass("e-pdfviewer-zoomout")) || ($(disabledItem).hasClass('e-pdfviewer-zoomout'))) {
            TooltipPos = $('#magnificationDiv .e-pdfviewer-zoomout')[0].getBoundingClientRect();
            toolTipText = 'Zoom-Out';
        }
        else if (($(currentToolbarItem).hasClass("e-pdfviewer-fitpage")) || ($(disabledItem).hasClass('e-pdfviewer-fitpage'))) {
            TooltipPos = $('#magnificationDiv .e-pdfviewer-fitpage')[0].getBoundingClientRect();
            toolTipText = 'Fit to Page';
        }
        else if (($(currentToolbarItem).hasClass("e-pdfviewer-fitwidth")) || ($(disabledItem).hasClass('e-pdfviewer-fitwidth'))) {
            TooltipPos = $('#magnificationDiv .e-pdfviewer-fitwidth')[0].getBoundingClientRect();
            toolTipText = 'Fit to Width';
        }
        else if (($(currentToolbarItem).hasClass('e-pdfviewer-download')) || ($(disabledItem).hasClass('e-pdfviewer-download'))) {
            TooltipPos = $('#toolbarDiv .e-pdfviewer-download')[0].getBoundingClientRect();
            toolTipText = 'Download PDF document';
        }
        $('#toolTip_Content').html(toolTipText);
        $('#toolTip').css({ 'top': (TooltipPos.top + TooltipPos.height) + 5, 'left': (TooltipPos.left + (TooltipPos.width / 2)), 'display': 'block', 'position': 'fixed' });
    };

    $scope.updateZoom = function () {
        var _ejPdfViewer = $("#container").data("ejPdfViewer");
        if (_ejPdfViewer.zoomPercentage == 50) {
            ($("#viewer-zoomout").data("ejButton")).disable();
            ($("#viewer-zoomin").data("ejButton")).enable();
        } else if (_ejPdfViewer.zoomPercentage == 400) {
            ($("#viewer-zoomin").data("ejButton")).disable();
            ($("#viewer-zoomout").data("ejButton")).enable();
        } else {
            ($("#viewer-zoomin").data("ejButton")).enable();
            ($("#viewer-zoomout").data("ejButton")).enable();
        }
    }

    $scope.updatePageNavigation = function () {
        var _ejPdfViewer = $("#container").data("ejPdfViewer");
        if (_ejPdfViewer.currentPageNumber == 1 && _ejPdfViewer.currentPageNumber < _ejPdfViewer.pageCount) {
            ($("#viewer-previous").data("ejButton")).disable();
            ($("#viewer-next").data("ejButton")).enable();
        } else if (_ejPdfViewer.currentPageNumber > 1 && _ejPdfViewer.currentPageNumber < _ejPdfViewer.pageCount) {
            ($("#viewer-previous").data("ejButton")).enable();
            ($("#viewer-next").data("ejButton")).enable();
        } else if (_ejPdfViewer.currentPageNumber == _ejPdfViewer.pageCount && _ejPdfViewer.currentPageNumber != 1) {
            ($("#viewer-previous").data("ejButton")).enable();
            ($("#viewer-next").data("ejButton")).disable();
        } else {
            ($("#viewer-previous").data("ejButton")).disable();
            ($("#viewer-next").data("ejButton")).disable();
        }
    }

    $scope.goToPage = function (event) {
        var _ejPdfViewer = $("#container").data("ejPdfViewer");
        if (event.which == 13) {
            if ($scope.currentPageNumber > 0 && $scope.currentPageNumber <= _ejPdfViewer.pageCount) {
                _ejPdfViewer.goToPage($scope.currentPageNumber);
            } else {
                $scope.currentPageNumber = _ejPdfViewer.currentPageNumber;
            }
        }
    };

    $scope.callClientSideMethod = function (apiName) {
        var _ejPdfViewer = $("#container").data("ejPdfViewer");
        switch (apiName) {
            case 'print':
                _ejPdfViewer.print();
                break;
            case 'zoomin':
                _ejPdfViewer.zoomIn();
                ($("#viewer-fitpage").data("ejButton")).enable();
                ($("#viewer-fitwidth").data("ejButton")).enable()
                $scope.updateZoom();
                break;
            case 'zoomout':
                _ejPdfViewer.zoomOut();
                ($("#viewer-fitpage").data("ejButton")).enable();
                ($("#viewer-fitwidth").data("ejButton")).enable();
                $scope.updateZoom();
                break;
            case 'fitpage':
                _ejPdfViewer.fitToPage();
                ($("#viewer-fitpage").data("ejButton")).disable();
                ($("#viewer-fitwidth").data("ejButton")).enable();
                $scope.updateZoom();
                break;
            case 'fitwidth':
                _ejPdfViewer.fitToWidth();
                ($("#viewer-fitpage").data("ejButton")).enable();
                ($("#viewer-fitwidth").data("ejButton")).disable();
                $scope.updateZoom();
                break;
            case 'previous':
                _ejPdfViewer.goToPreviousPage();
                $scope.updatePageNavigation();
                break;
            case 'next':
                _ejPdfViewer.goToNextPage();
                $scope.updatePageNavigation();
                break;
            case 'download':
                _ejPdfViewer.download();
                break;
        }
    }
    angular.element(currentPage).bind('keypress', function (event) {
        if ((event.which < 48 || event.which > 57) && event.which != 8 && event.which != 13) {
            return false;
        }
        else {
            return true;
        }
    });
    $scope.textboxOnclick = function () {
        $('#currentPage').select();
    }

    $scope.focusIn = function () {
        $scope.isTextFieldInFocus = true;
    };

    $scope.focusOut = function () {
        $scope.isTextFieldInFocus = false;
    };

    $scope.changePage = function (currentPageNumber) {
        var _ejPdfViewer = $("#container").data("ejPdfViewer");
        $scope.$apply(function () {
            $scope.currentPageNumber = currentPageNumber;
        });
    };
    $scope.pageChange = function (args) {
        var currentPageNumber = (args.currentPageNumber);
        $scope.changePage(currentPageNumber);
        $scope.updatePageNavigation();
    };
    $scope.documentLoad = function () {
        var _ejPdfViewer = $("#container").data("ejPdfViewer");
        _ejPdfViewer.showToolbar(false);
        $scope.TotalPage = _ejPdfViewer.pageCount;
        var filename = (_ejPdfViewer.fileName).split("\\");
        $scope.pdf = filename[filename.length - 1];
        $scope.showCustomToolbar();
    };
});