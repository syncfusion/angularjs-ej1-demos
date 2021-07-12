


syncApp.controller('Map', function ($scope) {
    $scope.mapZoomSettings = {
        level: 1,
        maxValue: 30,
        factor: 1,
        enableZoom: false
    };
    $scope.mapLayers = [
                     {
                         layerType: "geometry",
                         enableSelection: true,
                         shapeDataPath: "name",
                         enableMouseHover: true,
                         shapePropertyPath: "name",
                         showMapItems: false,
                         dataSource: cont_countriesdata,
                         shapeSettings: {
                             fill: "#C3E6ED",
                             strokeThickness: "0.5",
                             stroke: "white",
                             highlightColor: "#63B7B7",
                             highlightStroke: "white",
                             valuePath: "name"

                         },
                         shapeData: world_map,
                         subLayers: [
                          {
                              shapeDataPath: "country",
                              shapePropertyPath: "name",
                              mapItemsTemplate: 'labeltemplate',
                              showMapItems: true,
                              enableMouseHover: true,
                              dataSource: randomcountriesData,
                              shapeSettings: {
                                  fill: "#9FD0D3",
                                  strokeThickness: "0.2",
                                  stroke: "white",
                                  highlightColor: "#63B7B7",
                              },
                              bubbleSettings: {
                                  showBubble: true,
                                  valuePath: "Sales",
                                  minValue: 20,
                                  maxValue: 30,
                                  color: "#379F64",
                              },
                              shapeData: mapSalesData2
                          }

                         ]
                     },
               { layerType: "geometry", enableMouseHover: true, shapeSettings: { stroke: "black", fill: "#C3E6ED", highlightColor: "#63B7B7", selectionColor: "#207BB2", strokeThickness: "0.5" }, shapeData: Africa },
               { layerType: "geometry", enableMouseHover: true, shapeSettings: { stroke: "black", fill: "#C3E6ED", highlightColor: "#63B7B7", selectionColor: "#207BB2", strokeThickness: "0.5" }, shapeData: Asia },
               { layerType: "geometry", enableMouseHover: true, shapeSettings: { stroke: "black", fill: "#C3E6ED", highlightColor: "#63B7B7", selectionColor: "#207BB2", strokeThickness: "0.5" }, shapeData: Europe },
               { layerType: "geometry", enableMouseHover: true, shapeSettings: { stroke: "black", fill: "#C3E6ED", highlightColor: "#63B7B7", selectionColor: "#207BB2", strokeThickness: "0.5" }, shapeData: NorthAmerica },
               { layerType: "geometry", enableMouseHover: true, shapeSettings: { stroke: "black", fill: "#C3E6ED", highlightColor: "#63B7B7", selectionColor: "#207BB2", strokeThickness: "0.5" }, shapeData: Oceania },
               { layerType: "geometry", enableMouseHover: true, shapeSettings: { stroke: "black", fill: "#C3E6ED", highlightColor: "#63B7B7", selectionColor: "#207BB2", strokeThickness: "0.5" }, shapeData: SouthAmerica }


    ];
    
});
