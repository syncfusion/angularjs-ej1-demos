var obj = [{ x: 2006, y1: 7.8, y2:4.8  }, 
           { x: 2007, y1: 7.2, y2:4.6 }, 
		   { x: 2008, y1: 6.8, y2:7.2  },
		   { x: 2009, y1: 10.7, y2:9.3  },
           { x: 2010, y1: 10.8, y2:9.7}, 
		   { x: 2011, y1: 9.8, y2: 9  }
		   ];

syncApp.controller('ChartCtrl', function ($scope) {
    $scope.dataSource = obj;
    $scope.displaytext = "OndataLabel";
    $scope.marker = {
        dataLabel:
            {
                font: { size: '13px', fontFamily: 'Segoe UI', fontStyle: 'Normal', fontWeight: 'regular' },
                textPosition: 'top',
                angle: -45, visible: true
            },
    };
});

function OndataLabel(sender) 
	{
		sender.data.location.x=sender.data.location.x+20;
	} 

