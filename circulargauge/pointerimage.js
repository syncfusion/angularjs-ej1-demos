function drawLabels(args) {
    if (args.pointerValue != 100 && args.pointerValue != 0)
        args.style.textValue = "";
}
function drawpointers(args) {
    var i = args.pointer.index;
    args.model.scales[0].indicators[i].stateRanges[0].text = args.pointer.pointerValue.toString();
    args.model.scales[0].indicators[i].position.x = args.position.startX + 20;
    args.model.scales[0].indicators[i].position.y = args.position.startY + 50;
}
syncApp.controller('CircularGaugeCtrl', function ($scope) {    
    $scope.ndrawLabels = "drawLabels";
    $scope.ndrawPointers = "drawpointers";    
});