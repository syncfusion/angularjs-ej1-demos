var obj = [{ x: 'Other Personnal', y: 94658, text: 'Other Personal, 88.47%' },
                             { x: 'Medical care', y: 9090, text: 'Medical care, 8.49%' },
							 { x: 'Housing', y: 2577, text: 'Housing, 2.40%' },
                             { x: 'Transportation', y: 473, text: 'Transportation, 0.44%' },
                             { x: 'Education', y: 120, text: 'Education, 0.11%' },
                             { x: 'Electronics', y: 70, text: 'Electronics, 0.06%' }];
syncApp.controller('ChartCtrl', function ($scope) {
    $scope.dataSource = obj;
    $scope.displaytextrender = "displayTextRender";
    $scope.piemarker = { dataLabel: { visible: true, shape: 'none', connectorLine: { type: 'bezier', color: 'black' }, font: { size: '14px' } } };
});

function displayTextRender(sender)
{

	sender.data.text = obj[sender.data.pointIndex].text;
}
