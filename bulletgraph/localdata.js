var localData = [
                {
                    value: 9.5, comparativeMeasureValue: 7.5,
                    category: 2001
                },
                {
                    value: 9.5, comparativeMeasureValue: 5,
                    category: 2002
                },
                {
                    value: 9.5, comparativeMeasureValue: 6,
                    category: 2003
                },
                {
                    value: 9.5, comparativeMeasureValue: 8,
                    category: 2004
                },
                {
                    value: 9.5, comparativeMeasureValue: 5,
                    category: 2005
                },
                {
                    value: 9.5, comparativeMeasureValue: 6,
                    category: 2006
                }];

syncApp.controller('angularBullet', function ($scope) {
    
    $scope.nload = 'loadBulletTheme';
    $scope.data = localData;
});

