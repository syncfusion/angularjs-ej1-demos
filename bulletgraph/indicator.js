syncApp.controller('angularBullet1', function ($scope) {
	
});

function ChangeBulletSymbol(sender) {
        $("#bulletCore1").ejBulletGraph("option", "captionSettings.indicator.symbol", { shape: sender.value });
    }

	

