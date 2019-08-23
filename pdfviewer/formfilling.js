syncApp.controller('PDFViewerFormController', function ($scope, $interval) {
    $scope.serviceurl = window.baseurl + "api/PdfViewer";
    $scope.pdfService = ej.PdfViewer.PdfService.Local;
    $scope.readFile = function (event) {
        var upoadedFiles = event.target.files;
        var uploadedFile = upoadedFiles[0];
        var reader = new FileReader();
        reader.readAsDataURL(uploadedFile);
        reader.onload = function () {
            var obj = $("#container").data("ejPdfViewer");
            var uploadedFileUrl = this.result;
            obj.load(uploadedFileUrl);
        }
    };
    document.getElementById('fileUpload').addEventListener('change', $scope.readFile, false);
    $('#fileUploadButton').click(function () {
        $('#fileUpload').click();
    });
});