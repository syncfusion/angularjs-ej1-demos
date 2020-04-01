var nodes = [
        { name: "Rectangle", width: 100, height: 100, offsetX: 150, offsetY: 150, fillColor: "#fcbc7c", borderColor: "#f89b4c", labels: [{ "text": "Rectangle", fontColor: "white" }], type: ej.datavisualization.Diagram.Shapes.Basic, shape: "rectangle" },
        { name: "RoundedRectangle", width: 100, height: 100, offsetX: 350, fillColor: "#f58f7a", borderColor: "#f15e50", offsetY: 150, labels: [{ "text": "Round Rect", fontColor: "white" }], type: ej.datavisualization.Diagram.Shapes.Basic, shape: "rectangle", "cornerRadius": 5 },
        { name: "Ellipse", width: 100, height: 100, offsetX: 550, offsetY: 150, fillColor: "#85cec1", borderColor: "#4bbca7", labels: [{ text: "Ellipse", wrapText: "true", fontColor: "white" }], type: ej.datavisualization.Diagram.Shapes.Basic, shape: "ellipse" },
        { name: "Polygon", width: 100, height: 100, offsetX: 150, offsetY: 350, fillColor: "#c19ab8", borderColor: "#ad6fa1", labels: [{ "text": "Polygon", fontColor: "white" }], type: ej.datavisualization.Diagram.Shapes.Basic, shape: "polygon", points: [{ x: 13.560, y: 67.524 }, { x: 21.941, y: 41.731 }, { x: 0.000, y: 25.790 }, { x: 27.120, y: 25.790 }, { x: 35.501, y: 0.000 }, { x: 43.882, y: 25.790 }, { x: 71.000, y: 25.790 }, { x: 49.061, y: 41.731 }, { x: 57.441, y: 67.524 }, { x: 35.501, y: 51.583 }, { x: 13.560, y: 67.524 }] },
        { name: "Path", width: 100, height: 100, offsetX: 350, offsetY: 350, fillColor: "#fbe172", borderColor: "#f4cd2a", labels: [{ "text": "Path", fontColor: "white" }], type: ej.datavisualization.Diagram.Shapes.Path, shape: "path", pathData: "M78.631,3.425c-0.699-1.229-2.177-2.653-5.222-2.394c-8.975,0.759-26.612,16.34-30.804,22.411c-0.167-0.79-0.551-2.049-1.377-2.741c1.176-2.069,3.035-5.709,3.813-9.156c0.18-0.044,0.338-0.161,0.385-0.41c0.083-0.423,0.146-0.848,0.23-1.268c0.135-0.706-0.962-0.944-1.086-0.245c-0.078,0.431-0.158,0.852-0.234,1.286c-0.04,0.26,0.076,0.464,0.26,0.569c-0.756,3.361-2.575,6.93-3.737,8.975c-0.2-0.105-0.415-0.189-0.661-0.224c-0.07-0.009-0.132,0.005-0.199,0.003c-0.067,0.002-0.129-0.012-0.199-0.003c-0.246,0.035-0.461,0.119-0.661,0.224c-1.162-2.045-2.981-5.613-3.737-8.975c0.185-0.104,0.301-0.309,0.26-0.569c-0.076-0.434-0.156-0.855-0.234-1.286c-0.124-0.699-1.221-0.46-1.086,0.245c0.085,0.42,0.147,0.845,0.23,1.268c0.047,0.249,0.205,0.367,0.385,0.41c0.777,3.446,2.637,7.087,3.813,9.156c-0.826,0.692-1.21,1.951-1.377,2.741C33.203,17.371,15.566,1.789,6.591,1.031C3.546,0.772,2.068,2.196,1.369,3.425c-0.818,1.407-0.185,4.303,0.993,9.321c0.53,2.228,1.075,4.521,1.465,6.779c0.208,1.239,0.404,2.471,0.59,3.65c0.819,5.33,1.503,9.766,3.714,11.187c0.606,0.39,1.313,0.55,2.179,0.442c2.107-0.46,4.627-0.845,7.293-1.12c-2.613,1.77-5.88,4.65-6.953,8.474c-0.827,2.989-0.175,6.031,1.932,9.083c2.482,3.569,5.027,5.915,7.406,7.444c4.756,3.057,8.874,2.843,10.613,2.75c0.179-0.002,0.318-0.014,0.453-0.018c1.324-0.017,2.23-1.868,4.161-6.064c0.948-2.044,2.358-5.088,3.546-6.638c0.249,0.57,0.96,0.972,1.331,1.085c-0.03,0.014-0.067,0.039-0.094,0.049c0.034-0.007,0.074-0.03,0.111-0.042c0.022,0.006,0.055,0.023,0.074,0.027c-0.017-0.006-0.046-0.022-0.066-0.03c0.391-0.131,0.876-0.532,1.119-1.088c1.188,1.549,2.598,4.594,3.546,6.638c1.931,4.196,2.838,6.047,4.161,6.064c0.135,0.004,0.274,0.016,0.453,0.018c1.739,0.093,5.857,0.307,10.613-2.75c2.379-1.529,4.924-3.875,7.406-7.444c2.106-3.052,2.759-6.094,1.932-9.083c-1.073-3.823-4.34-6.704-6.953-8.474c2.667,0.274,5.186,0.659,7.293,1.12c0.866,0.108,1.573-0.053,2.179-0.442c2.211-1.421,2.895-5.857,3.714-11.187c0.185-1.18,0.382-2.411,0.59-3.65c0.39-2.258,0.935-4.551,1.465-6.779C78.816,7.728,79.448,4.832,78.631,3.425z M41.184,48.732c-0.343,0.551-0.781,0.918-1.082,1.065c-0.324-0.135-0.933-0.497-1.286-1.065c0,0-1.506-19.959-1.349-24.911c0,0,0.509-3.147,2.533-3.169c2.024,0.022,2.533,3.169,2.533,3.169C42.69,28.773,41.184,48.732,41.184,48.732z" },
        { name: "Image", width: 100, height: 100, offsetX: 550, offsetY: 350, borderColor: "black", scale: "stretch", type: ej.datavisualization.Diagram.Shapes.Image, source: "content/images/Employees/6.png" },
        { name: "Html", width: 100, height: 100, offsetX: 150, offsetY: 550, fillColor: "#68a3d6", borderColor: "#3382c4", labels: [{ "text": "Html", fontColor: "white" }], type: ej.datavisualization.Diagram.Shapes.Html, templateId: "htmlTemplate" },
        { name: "Native", width: 100, height: 100, offsetX: 350, offsetY: 550, fillColor: "#de6ca9", borderColor: "#de6ca9", scale: "stretch", type: ej.datavisualization.Diagram.Shapes.Native, templateId: "svgTemplate" },
        { name: "Text", width: 100, height: 100, offsetX: 550, offsetY: 550, fillColor: "transparent", borderColor: "transparent", type: ej.datavisualization.Diagram.Shapes.Text, textBlock: { "text": "Text Node", textAlign: ej.datavisualization.Diagram.TextAlign.Center } }
];

var drawingToolsList = [
   {
       id: "Rectangle_Tool", tooltiptext: "Rectangle",
       spriteCss: "icon-Rectangle toolBarIconStyle",
   }, {
       id: "RoundedRectangle_Tool", tooltiptext: "RoundRect",
       spriteCss: "icon-RoundedRectangle toolBarIconStyle",
   }, {
       id: "Ellipse_Tool", tooltiptext: "Ellipse",
       spriteCss: "icon-Ellipse toolBarIconStyle",
   }, {
       id: "Polygon_Tool", tooltiptext: "Polygon",
       spriteCss: "icon-Polygon toolBarIconStyle",
   }, {
       id: "Textbox_Tool", tooltiptext: "Textbox",
       spriteCss: "icon-Textbox toolBarIconStyle",
   },
    {
        id: "Path_Tool", tooltiptext: "Path",
        spriteCss: "icon-Path toolBarIconStyle",
    },
    {
        id: "Image_Tool", tooltiptext: "Image",
        spriteCss: "icon-Image toolBarIconStyle",
    },
    {
        id: "Html_Tool", tooltiptext: "Html",
        spriteCss: "icon-HTML toolBarIconStyle",
    },
    {
        id: "Native_Tool", tooltiptext: "Native",
        spriteCss: "icon-Native toolBarIconStyle",
    }
];

syncApp.controller('diagramCtrl', function ($scope) {
    $scope.width = "100%";
    $scope.height = "700px";
    $scope.nodes= nodes;
    $scope.pageSettings= { scrollLimit: "diagram" };
    $scope.drawingToolsList = drawingToolsList;
});

function onItemclick(args) {
    var diagram = $("#diagram").ejDiagram("instance");
    var option = args.currentTarget.id;
    switch (option) {
        case "Rectangle_Tool":
            diagram.model.drawType = { type: "basic", shape: "rectangle" };
            break;
        case "RoundedRectangle_Tool":
            diagram.model.drawType = { type: "basic", shape: "rectangle", "cornerRadius": 5 };
            break;
        case "Ellipse_Tool":
            diagram.model.drawType = { type: "basic", shape: "ellipse" };
            break;
        case "Polygon_Tool":
            diagram.model.drawType = { type: "basic", shape: "polygon", points: [{ x: 13.560, y: 67.524 }, { x: 21.941, y: 41.731 }, { x: 0.000, y: 25.790 }, { x: 27.120, y: 25.790 }, { x: 35.501, y: 0.000 }, { x: 43.882, y: 25.790 }, { x: 71.000, y: 25.790 }, { x: 49.061, y: 41.731 }, { x: 57.441, y: 67.524 }, { x: 35.501, y: 51.583 }, { x: 13.560, y: 67.524 }] };
            break;
        case "Path_Tool":
            diagram.model.drawType = { type: "basic", shape: "path", pathData: "M78.631,3.425c-0.699-1.229-2.177-2.653-5.222-2.394c-8.975,0.759-26.612,16.34-30.804,22.411c-0.167-0.79-0.551-2.049-1.377-2.741c1.176-2.069,3.035-5.709,3.813-9.156c0.18-0.044,0.338-0.161,0.385-0.41c0.083-0.423,0.146-0.848,0.23-1.268c0.135-0.706-0.962-0.944-1.086-0.245c-0.078,0.431-0.158,0.852-0.234,1.286c-0.04,0.26,0.076,0.464,0.26,0.569c-0.756,3.361-2.575,6.93-3.737,8.975c-0.2-0.105-0.415-0.189-0.661-0.224c-0.07-0.009-0.132,0.005-0.199,0.003c-0.067,0.002-0.129-0.012-0.199-0.003c-0.246,0.035-0.461,0.119-0.661,0.224c-1.162-2.045-2.981-5.613-3.737-8.975c0.185-0.104,0.301-0.309,0.26-0.569c-0.076-0.434-0.156-0.855-0.234-1.286c-0.124-0.699-1.221-0.46-1.086,0.245c0.085,0.42,0.147,0.845,0.23,1.268c0.047,0.249,0.205,0.367,0.385,0.41c0.777,3.446,2.637,7.087,3.813,9.156c-0.826,0.692-1.21,1.951-1.377,2.741C33.203,17.371,15.566,1.789,6.591,1.031C3.546,0.772,2.068,2.196,1.369,3.425c-0.818,1.407-0.185,4.303,0.993,9.321c0.53,2.228,1.075,4.521,1.465,6.779c0.208,1.239,0.404,2.471,0.59,3.65c0.819,5.33,1.503,9.766,3.714,11.187c0.606,0.39,1.313,0.55,2.179,0.442c2.107-0.46,4.627-0.845,7.293-1.12c-2.613,1.77-5.88,4.65-6.953,8.474c-0.827,2.989-0.175,6.031,1.932,9.083c2.482,3.569,5.027,5.915,7.406,7.444c4.756,3.057,8.874,2.843,10.613,2.75c0.179-0.002,0.318-0.014,0.453-0.018c1.324-0.017,2.23-1.868,4.161-6.064c0.948-2.044,2.358-5.088,3.546-6.638c0.249,0.57,0.96,0.972,1.331,1.085c-0.03,0.014-0.067,0.039-0.094,0.049c0.034-0.007,0.074-0.03,0.111-0.042c0.022,0.006,0.055,0.023,0.074,0.027c-0.017-0.006-0.046-0.022-0.066-0.03c0.391-0.131,0.876-0.532,1.119-1.088c1.188,1.549,2.598,4.594,3.546,6.638c1.931,4.196,2.838,6.047,4.161,6.064c0.135,0.004,0.274,0.016,0.453,0.018c1.739,0.093,5.857,0.307,10.613-2.75c2.379-1.529,4.924-3.875,7.406-7.444c2.106-3.052,2.759-6.094,1.932-9.083c-1.073-3.823-4.34-6.704-6.953-8.474c2.667,0.274,5.186,0.659,7.293,1.12c0.866,0.108,1.573-0.053,2.179-0.442c2.211-1.421,2.895-5.857,3.714-11.187c0.185-1.18,0.382-2.411,0.59-3.65c0.39-2.258,0.935-4.551,1.465-6.779C78.816,7.728,79.448,4.832,78.631,3.425z M41.184,48.732c-0.343,0.551-0.781,0.918-1.082,1.065c-0.324-0.135-0.933-0.497-1.286-1.065c0,0-1.506-19.959-1.349-24.911c0,0,0.509-3.147,2.533-3.169c2.024,0.022,2.533,3.169,2.533,3.169C42.69,28.773,41.184,48.732,41.184,48.732z" };
            break;
        case "Textbox_Tool":
            diagram.model.drawType = { type: "text", textBlock: { "text": "TextNode", textAlign: ej.datavisualization.Diagram.TextAlign.Center }, fillColor: "transparent", borderColor: "transparent" };
            break;
        case "Image_Tool":
            diagram.model.drawType = { type: "image", source: "content/images/Employees/6.png" };
            break;
        case "Html_Tool":
            diagram.model.drawType = { type: "html", templateId: "htmlTemplate" };
            break;
        case "Native_Tool":
            diagram.model.drawType = { type: "native", templateId: "svgTemplate" };
            break;
    }

    var tool = diagram.tool();
    diagram.update({ tool: tool | ej.datavisualization.Diagram.Tool.DrawOnce })
}
