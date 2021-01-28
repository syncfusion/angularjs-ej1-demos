syncApp.controller('angularBullet1', function ($scope) {
	
	createPropertiesWindow();
});

function createPropertiesWindow()
{
	$("#slider").ejSlider({
                minValue: -85,
                maxValue: 25,
                change: "BulletLabelOffset",
                value:10
            }); 

}
  function BulletTickPos(sender) {
            $("#bulletCore1").ejBulletGraph(
                'option', 'quantitativeScaleSettings.tickPosition', sender.value
            );
        }

        function BulletLabelPlacement(sender) {
            $("#bulletCore1").ejBulletGraph(
                'option', 'quantitativeScaleSettings.labelSettings.labelPlacement', sender.value
            );
        }

        function BulletTickPlacement(sender) {
            $("#bulletCore1").ejBulletGraph(
                'option', 'quantitativeScaleSettings.tickPlacement', sender.value
            );
        }

        function BulletLabelPosition(sender) {
            $("#bulletCore1").ejBulletGraph(
                'option', 'quantitativeScaleSettings.labelSettings.position', sender.value
            );
        }

        function BulletLabelOffset(sender) {
            $("#bulletCore1").ejBulletGraph(
                'option', 'quantitativeScaleSettings.labelSettings.offset', parseFloat(sender.value)
            );
        }

        function BulletFlow(sender) {
            $("#bulletCore1").ejBulletGraph(
                'option', 'flowDirection', sender.value
            );
        }

        function BulletOrientation(sender) {
            $("#bulletCore1").ejBulletGraph(
                'option', 'orientation', sender.value
            );
        }


	

