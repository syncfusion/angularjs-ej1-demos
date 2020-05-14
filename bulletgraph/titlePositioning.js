syncApp.controller('angularBullet1', function ($scope) {
 
});


      function BulletTrim(sender) {
				$("#bulletCore1").ejBulletGraph('option', 'captionSettings.enableTrim', sender.checked);
			}
	
			function BulletCapAlignment(sender) {
				$("#bulletCore1").ejBulletGraph('option', 'captionSettings.textAlignment', sender.value);
			}
	
			function BulletCapPosition(sender) {
				$("#bulletCore1").ejBulletGraph('option', 'captionSettings.textPosition', sender.value);
			}
	
			function BulletSubtitleAlignment(sender) {
				$("#bulletCore1").ejBulletGraph('option', 'captionSettings.subTitle.textAlignment', sender.value);
			}
	
			function BulletSubtitlePosition(sender) {
				$("#bulletCore1").ejBulletGraph('option', 'captionSettings.subTitle.textPosition', sender.value);
			}

	

