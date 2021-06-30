
syncApp.controller('Map1', function ($scope) {
	$scope.ShapeSelect="onSelect";
	$scope.Electiondata = electiondata;
	$scope.MapData = usMap;
});

      function onSelect(event) {
            if (event.originalEvent.length > 0) {
                var matched = jQuery.uaMatch(navigator.userAgent);
                var browser = matched.browser.toLowerCase();
                var isIE11 = !!navigator.userAgent.match(/Trident\/7\./);
                if (isIE11)
                    browser = "msie";
                var object = event.originalEvent[0].data;
                var popup = document.getElementById("closepopup");
				popup.style.height = "120px";
                var closebutton = document.getElementById("closebutton");
                var winner = document.getElementById("winner");
                var state = document.getElementById("state");
                var vote = document.getElementById("votes");
                $(popup).css("display", "block");

                $(closebutton).css({ "display": "block", "left": "206px" });
                $(closebutton).css({ "display": "block", "top": "-15px" });

                $(closebutton).click(function () {
                    var popup = document.getElementById("closepopup");
                    var closebutton = document.getElementById("closebutton");
                    $(popup).css("display", "none");
                    $(closebutton).css("display", "none");
                });

                if (browser != "mozilla") {
                    state.innerText = object.State;
                    vote.innerText = object.Electors;
                    winner.innerText = object.Candidate;
                }
                else {
                    state.textContent = object.State;
                    vote.textContent = object.Electors;
                    winner.textContent = object.Candidate;
                }
            }
        }

 