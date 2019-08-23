
syncApp.controller('ChartCtrl', function ($scope) {
	
	  var clientPng = document.getElementById('downloadpng');
            if (clientPng.addEventListener)
                clientPng.addEventListener('click', downloadClient, false);
            else
                clientPng.attachEvent('onclick', downloadClient, false);

            var clientPng = document.getElementById('downloadsvg');
            if (clientPng.addEventListener)
                clientPng.addEventListener('click', downloadClient, false);
            else
                clientPng.attachEvent('onclick', downloadClient, false);
				
			clientPng = document.getElementById('downloadjpg');
            if (clientPng.addEventListener)
                clientPng.addEventListener('click', downloadClient, false);
            else
                clientPng.attachEvent('onclick', downloadClient, false);
		
	$scope.Points1 = [{ x: "John", y: 10000}, { x: "Jake", y: 12000 }, { x: "Peter", y: 18000 },
							 { x: "James", y: 11000}, { x: "Mary", y: 9700 }];
			
			 $("#png, #svg, #pdf, #jpg, #xlsx, #docx").mouseover(function (e) {
            if ($("#" + e.target.id).hasClass("active"))
                $("#" + e.target.id).css("background-color", "lightgray").css("cursor", "pointer").css("border", "solid 1px black");
            else
                $(".active").css("background-color", "transparent").css("cursor", "default").css("border", "solid 1px transparent");
        }).mouseout(function (e) {
            $(".active").css("background-color", "transparent").css("cursor", "default").css("border", "solid 1px transparent");
        });

        $("#canvas, #mode").change(function () {
            var chart = $("#container").ejChart("instance");
            var mode = $("#mode")[0].value;
            if ($("#canvas").is(":checked")) {
                chart.model.enableCanvasRendering = true;
                if (mode == "server") {
                    $("#svg").attr("src", "../Images/chart/export_disabled/svg.png").removeClass("active").addClass("disabled");
                    $("#png").attr("src", "../Images/chart/export_active/png.png").removeClass("disabled").addClass("active");
                    $("#pdf").attr("src", "../Images/chart/export_active/pdf.png").removeClass("disabled").addClass("active");
                    $("#jpg").attr("src", "../Images/chart/export_active/jpg.png").removeClass("disabled").addClass("active");
                    $("#xlsx").attr("src", "../Images/chart/export_active/xlsx.png").removeClass("disabled").addClass("active");
                    $("#docx").attr("src", "../Images/chart/export_active/docx.png").removeClass("disabled").addClass("active");

                    $("#svg").attr("onerror", "this.src='Images/chart/export_disabled/svg.png'").removeClass("active").addClass("disabled");
                    $("#png").attr("onerror", "this.src='Images/chart/export_active/png.png'").removeClass("disabled").addClass("active");
                    $("#pdf").attr("onerror", "this.src='Images/chart/export_active/pdf.png'").removeClass("disabled").addClass("active");
                    $("#jpg").attr("onerror", "this.src='Images/chart/export_active/jpg.png'").removeClass("disabled").addClass("active");
                    $("#xlsx").attr("onerror", "this.src='Images/chart/export_active/xlsx.png'").removeClass("disabled").addClass("active");
                    $("#docx").attr("onerror", "this.src='Images/chart/export_active/docx.png'").removeClass("disabled").addClass("active");
                } else {
                    $("#svg").attr("src", "../Images/chart/export_disabled/svg.png").removeClass("active").addClass("disabled");
                    $("#pdf").attr("src", "../Images/chart/export_disabled/pdf.png").removeClass("active").addClass("disabled");
                    $("#xlsx").attr("src", "../Images/chart/export_disabled/xlsx.png").removeClass("active").addClass("disabled");
                    $("#docx").attr("src", "../Images/chart/export_disabled/docx.png").removeClass("active").addClass("disabled");
                    $("#jpg").attr("src", "../Images/chart/export_active/jpg.png").removeClass("disabled").addClass("active");
                    $("#png").attr("src", "../Images/chart/export_active/png.png").removeClass("disabled").addClass("active");

                    $("#svg").attr("onerror", "this.src='Images/chart/export_disabled/svg.png'").removeClass("active").addClass("disabled");
                    $("#pdf").attr("onerror", "this.src='Images/chart/export_disabled/pdf.png'").removeClass("active").addClass("disabled");
                    $("#xlsx").attr("onerror", "this.src='Images/chart/export_disabled/xlsx.png'").removeClass("active").addClass("disabled");
                    $("#docx").attr("onerror", "this.src='Images/chart/export_disabled/docx.png'").removeClass("active").addClass("disabled");
                    $("#jpg").attr("onerror", "this.src='Images/chart/export_active/jpg.png'").removeClass("disabled").addClass("active");
                    $("#png").attr("onerror", "this.src='Images/chart/export_active/png.png'").removeClass("disabled").addClass("active");
                }
            }
            else {
                chart.model.enableCanvasRendering = false;
                if ($("#mode")[0].value == "server") {
                    $("#svg").attr("src", "../Images/chart/export_active/svg.png").removeClass("disabled").addClass("active");
                    $("#pdf").attr("src", "../Images/chart/export_disabled/pdf.png").removeClass("active").addClass("disabled");
                    $("#xlsx").attr("src", "../Images/chart/export_active/xlsx.png").removeClass("disabled").addClass("active");
                    $("#docx").attr("src", "../Images/chart/export_disabled/docx.png").removeClass("active").addClass("disabled");
                    $("#jpg").attr("src", "../Images/chart/export_disabled/jpg.png").removeClass("active").addClass("disabled");
                    $("#png").attr("src", "../Images/chart/export_disabled/png.png").removeClass("active").addClass("disabled");

                    $("#svg").attr("onerror", "this.src='Images/chart/export_active/svg.png'").removeClass("disabled").addClass("active");
                    $("#pdf").attr("onerror", "this.src='Images/chart/export_disabled/pdf.png'").removeClass("active").addClass("disabled");
                    $("#xlsx").attr("onerror", "this.src='Images/chart/export_active/xlsx.png'").removeClass("disabled").addClass("active");
                    $("#docx").attr("onerror", "this.src='Images/chart/export_disabled/docx.png'").removeClass("active").addClass("disabled");
                    $("#jpg").attr("onerror", "this.src='Images/chart/export_disabled/jpg.png'").removeClass("active").addClass("disabled");
                    $("#png").attr("onerror", "this.src='Images/chart/export_disabled/png.png'").removeClass("active").addClass("disabled");
                }
                else {
                    $("#svg").attr("src", "../Images/chart/export_active/svg.png").removeClass("disabled").addClass("active");
                    $("#pdf").attr("src", "../Images/chart/export_disabled/pdf.png").removeClass("active").addClass("disabled");
                    $("#xlsx").attr("src", "../Images/chart/export_disabled/xlsx.png").removeClass("active").addClass("disabled");
                    $("#docx").attr("src", "../Images/chart/export_disabled/docx.png").removeClass("active").addClass("disabled");
                    $("#jpg").attr("src", "../Images/chart/export_disabled/jpg.png").removeClass("active").addClass("disabled");
                    $("#png").attr("src", "../Images/chart/export_disabled/png.png").removeClass("active").addClass("disabled");

                    $("#svg").attr("onerror", "this.src='Images/chart/export_active/svg.png'").removeClass("disabled").addClass("active");
                    $("#pdf").attr("onerror", "this.src='Images/chart/export_disabled/pdf.png'").removeClass("active").addClass("disabled");
                    $("#xlsx").attr("onerror", "this.src='Images/chart/export_disabled/xlsx.png'").removeClass("active").addClass("disabled");
                    $("#docx").attr("onerror", "this.src='Images/chart/export_disabled/docx.png'").removeClass("active").addClass("disabled");
                    $("#jpg").attr("onerror", "this.src='Images/chart/export_disabled/jpg.png'").removeClass("active").addClass("disabled");
                    $("#png").attr("onerror", "this.src='Images/chart/export_disabled/png.png'").removeClass("active").addClass("disabled");
                }
            }
            chart.redraw();
        });

});

function  label(sender) 
	{   
        if (sender.data.axis.orientation == "Vertical") 
		{
            var label = sender.data.label.Text / 1000;
            sender.data.label.Text = "$" + label + "K";
        }
    }
	
function preRender(sender) {
    if (sender.model.theme.indexOf("light") > -1 || sender.model.theme == "bootstrap" || sender.model.theme == "material" > -1) {
        sender.model.background = "white";
        sender.model.chartArea.background = "white";
    }
    else {
        sender.model.background = "black";
        sender.model.chartArea.background = "black"
    }
}
      

			  function downloadClient() {         // to download chart in client side
            var type = this.id;
            type = (type).indexOf("download") >= 0 ? type.replace("download", "") : type;
            if ($('#mode')[0].value == "client") {
                var chart = $("#container").ejChart("instance"),
                    exporting = chart.model.exportSettings, data, type;
                exporting.fileName = $("#filename").val();
                exporting.angle = $("#angle")[0].value;
                exporting.type = type;
                exporting.mode = $('#mode')[0].value;
                data = chart.export();
                if (window.navigator.msSaveOrOpenBlob) {     // for IE
                    var blob;
                    if (type == "png")
                        blob = data.msToBlob();
                    else if(type == "jpg")
                        blob = data.msToBlob(null, "image/jpeg");
                    else if (type == "svg") {
                        data = decodeURIComponent(data);
                        blob = new Blob([data], { type: "image/svg-xml" });
                    }
                    window.navigator.msSaveOrOpenBlob(blob, exporting.fileName + "." + type);
                }
                else {
                    this.download = exporting.fileName + "." + type;
                    if (type == "png")
                        this.href = data.toDataURL();
                    else if (type == "jpg")
                        this.href = data.toDataURL("image/jpeg");
                    else
                        this.href = "data:text/plain;charset=utf-8," + data;
                }
            } else
                download(type);
        }
        function download(args) {
           var id = args;
            if ($("#" + id).hasClass("active")) {
                var mode = $('#mode')[0].value,
                chart = $("#container").ejChart("instance"),
                exporting = chart.model.exportSettings, data, type;
                exporting.fileName = $("#filename").val();
                exporting.orientation = $('#orientation1')[0].value;
                exporting.angle = $("#angle")[0].value;
               if (id == "png" || id == "jpg")
                    exporting.action = window.baseurl + 'api/Chart/ImageExport';
                else if (id == "xlsx")
                    exporting.action = window.baseurl + 'api/Chart/ExcelExport';
                else if (id == "docx")
                    exporting.action = window.baseurl + 'api/Chart/WordExport';
                else if (id == "pdf")
                    exporting.action = window.baseurl + 'api/Chart/PdfExport';
				else
				   exporting.action = window.baseurl + 'api/Chart/SvgExport';
                type = exporting.type = id;
                exporting.mode = mode;
				
                if (mode == "server")
                    chart.export();           // to call export - public method
            }
            return true;
        }
		
function chartPrint()
		{
			var chart = $("#container").ejChart("instance");
			chart.print("container");
		}

