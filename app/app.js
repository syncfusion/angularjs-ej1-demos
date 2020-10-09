window.htmlEditor = [];
window.JSEditor = [];
window.isPopupOpened = false;
window.isRefresh = false;
window.isInitialLoad = true;
window.isThemeChange = false;
window.currentSample = "";
window.isOnline = (window.location.host == "ngjq.syncfusion.com") ? true : false;
window.theme = (window.sessionStorage.length == 0) ? "bootstrap" : window.sessionStorage.theme;
window.isMac = function () { return (/(ipad|iphone|ipod touch)/i).test(navigator.userAgent.toLowerCase()) && !(/trident|windows phone/i.test(navigator.userAgent.toLowerCase())); }
var $routeProviderReference, syncApp = angular.module("defaultApp", ["ngRoute", "ejangular"]);
syncApp.controller("defaultCtrl", ["$scope", "$rootScope", "$window", function ($scope, $rootScope, $window) {
    $rootScope.isPopupOpen = false;
	$scope.getCookieValue = function(cookieName){
		  var name = cookieName + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var cookieValues = decodedCookie.split(';');
            for (var i = 0; i < cookieValues.length; i++) {
                var cookie = cookieValues[i];
                while (cookie.charAt(0) == ' ') {
                    cookie = cookie.substring(1);
                }
                if (cookie.indexOf(name) == 0) {
                    return cookie.substring(name.length, cookie.length);
                }
            }
            return "";
	};
    window.baseurl = (window.isMac()) ? "//js.syncfusion.com/demos/ejServices/" : window.baseurl;
    if (document.referrer && document.referrer.split('/')[2] != window.location.host) {
            var existingCookieValue = $scope.getCookieValue("SampleSiteReferrer");
            var currentUrl = "";
            if (existingCookieValue.indexOf(window.location.host) === -1) {
                currentUrl = "," + window.location.href;
            }
            if (existingCookieValue != "undefined" && existingCookieValue != undefined && existingCookieValue != "") {
                existingCookieValue = existingCookieValue + currentUrl;
                document.cookie = "SampleSiteReferrer" + "=" + existingCookieValue + ";path=/;domain=syncfusion.com";
            }
            else {
                document.cookie = "SampleSiteReferrer" + "=" + document.referrer + currentUrl + ";path=/;domain=syncfusion.com";
            }
     }
	//var are declared separately to avoid JSLint error
    var subdata = []; var i; var j; var k; var collection = window.ControlList;
    for (i = 0; i < collection.length; i += 1) {
        if (!collection[i]) continue;
        for (j = 0; j < collection[i].samples.length; j += 1) {
            if (!collection[i].samples[j]) continue;
            var properties = {}, len;
            var controlName = collection[i].id;
            if (!collection[i].samples[j].samples) {
                properties["id"] = collection[i].samples[j].templateUrl;
                properties["control"] = collection[i].name;
                properties["sample"] = collection[i].samples[j].name;
                properties["data"] = collection[i].name + " " + collection[i].samples[j].name;
                subdata.push(properties);
            }
        }
    }
	
    $scope.dashboardSamples = window.showcaseSamplelist;
    $scope.controls = window.ControlList;
    $scope.subControlList = subdata;
    $scope.menuData = [
        { id: 1, text: "", parentId: null, spriteCssClass: "e-icon" },
        { id: "azure", text: "Flat-Azure", parentId: 1, spriteCssClass: "SB-theme SB-flat-azure" },
        { id: "azuredark", text: "Flat-Azure-Dark", parentId: 1, spriteCssClass: "SB-theme SB-flat-azure-dark" },
        { id: "lime", text: "Flat-Lime", parentId: 1, spriteCssClass: "SB-theme SB-flat-lime" },
        { id: "limedark", text: "Flat-Lime-Dark", parentId: 1, spriteCssClass: "SB-theme SB-flat-lime-dark" },
        { id: "saffron", text: "Flat-Saffron", parentId: 1, spriteCssClass: "SB-theme SB-flat-saffron" },
        { id: "saffrondark", text: "Flat-Saffron-Dark", parentId: 1, spriteCssClass: "SB-theme SB-flat-saffron-dark" },
        { id: "gradientazure", text: "Gradient-Azure", parentId: 1, spriteCssClass: "SB-theme SB-gradient-azure" },
        { id: "gradientazuredark", text: "Gradient-Azure-Dark", parentId: 1, spriteCssClass: "SB-theme SB-gradient-azure-dark" },
        { id: "gradientlime", text: "Gradient-Lime", parentId: 1, spriteCssClass: "SB-theme SB-gradient-lime" },
        { id: "gradientlimedark", text: "Gradient-Lime-Dark", parentId: 1, spriteCssClass: "SB-theme SB-gradient-lime-dark" },
        { id: "gradientsaffron", text: "Gradient-Saffron", parentId: 1, spriteCssClass: "SB-theme SB-gradient-saffron" },
        { id: "gradientsaffrondark", text: "Gradient-Saffron-Dark", parentId: 1, spriteCssClass: "SB-theme SB-gradient-saffron-dark" },
        { id: "bootstrap", text: "Bootstrap", parentId: 1, spriteCssClass: "SB-theme SB-bootstrap" },
        { id: "high-contrast-01", text: "High-Contrast-01", parentId: 1, spriteCssClass: "SB-theme SB-high-contrast-01" },
        { id: "high-contrast-02", text: "High-Contrast-02", parentId: 1, spriteCssClass: "SB-theme SB-high-contrast-02" },
        { id: "material", text: "Material", parentId: 1, spriteCssClass: "SB-theme SB-material" },
        { id: "office-365", text: "Office-365", parentId: 1, spriteCssClass: "SB-theme SB-office365" }
    ];
	
    $scope.onThemeChange = function (args) {
        if (!isPopupOpened) $rootScope.bindUnbindDocClickEvents(true);
        isPopupOpened = $(args.element).hasClass("e-haschild");
        if (args.event) args.event.stopPropagation();
        if (args.ID == 1) {
            $("#themebutton").find("li ul").css({ 'left': $("#themebutton").width() - $("#themebutton").find("li ul").width() });
            if (this.element.find("ul li.e-active").length == 0) {
                var themeList = $("#themebutton").find("ul li");
                themeList.each(function () { if (this.id == window.theme) $(this).addClass("e-active"); });
            }
        }
        else {
            this.element.find('li.e-active').removeClass('e-active');
            var _themename = (args.text).toLowerCase();
            window.themestyle = (_themename.indexOf("gradient") !== -1) ? "gradient" : "flat"
            window.themevarient = (_themename.indexOf("dark") !== -1) ? "dark" : "light";
            if (_themename.indexOf("azure") !== -1) window.themecolor = "azure";
            else if (_themename.indexOf("lime") !== -1) window.themecolor = "lime";
            else if (_themename.indexOf("saffron") !== -1) window.themecolor = "saffron";
            else if (_themename.indexOf("office-365") !== -1) window.themecolor = "office-365";
            else if (_themename.indexOf("material") !== -1) window.themecolor = "material";
            else if (_themename.indexOf("high-contrast-02") !== -1) window.themecolor = "high-contrast-02";
            else if (_themename.indexOf("high-contrast-01") !== -1) window.themecolor = "high-contrast-01";
            else if (_themename.indexOf("bootstrap") !== -1) window.themecolor = "bootstrap";
            window.theme = args.element.id;
            $rootScope.updateTheme();
            $(args.element).addClass("e-active");
        }
    };
    $rootScope.bindUnbindDocClickEvents = function (isOpened) {
        if (!isOpened) {
            $(document).unbind("click");
        }
        else {
            $(document).bind("click", function (evt) {
                if ($("#sbtooltipbox").ejDialog("isOpened")) $("#sbtooltipbox").ejDialog("close");
                $(".product-naviation").addClass("hideIt");
                var menuObj = $("#themebutton").ejMenu("instance");
                menuObj._closeAll();
                if (!$(evt.target).hasClass("sbheading") && evt.target.nodeName != "INPUT")
                    $rootScope.bindUnbindDocClickEvents(false);
                else
                    isPopupOpened = true;
                isPopupOpened = false;
                evt.stopPropagation();
            });
        }
    };
    $rootScope.updateTheme = function () {
        if (window.isOnline) {
            $rootScope.replaceTheme();
            $rootScope.updateLinkTag();
        }
        else {
            $("body").attr({ "class": "ng-scope " + window.theme });
        }
    };
    $rootScope.replaceTheme = function () {
        if (window.theme.indexOf("lime") != -1)
            window.themecolor = 'lime';
        else if (window.theme.indexOf("azure") != -1)
            window.themecolor = 'azure';
        else if (window.theme.indexOf('saffron') != -1)
            window.themecolor = 'saffron';
        else if ((window.theme.indexOf('high-contrast-01') != -1))
            window.themecolor = 'high-contrast-01';
        else if ((window.theme.indexOf('high-contrast-02') != -1))
            window.themecolor = 'high-contrast-02';
        else if ((window.theme.indexOf('material') != -1))
            window.themecolor = 'material';
        else if ((window.theme.indexOf('office-365') != -1))
            window.themecolor = 'office-365';
        else if (window.theme.indexOf('azure') != -1)
            window.themecolor = "azure";
        else if (window.theme.indexOf('bootstrap') != -1)
            window.themecolor = "bootstrap";
        else
            window.themecolor = "bootstrap";
        window.themevarient = (window.theme.indexOf("dark") != -1 || theme.indexOf("high-contrast-01") != -1 || theme.indexOf("high-contrast-02") != -1) ? "dark" : "light";
        $("body").attr({ "class": "ng-scope " + window.themecolor });
        if (window.themevarient == "dark") $("body").addClass("darktheme");
    };
    $rootScope.updateLinkTag = function () {
        var selectTheme = {
            "flat": "content/ejthemes/default-theme/",
            "flatdark": "content/ejthemes/flat-azure-dark/",
            "azure": "content/ejthemes/default-theme/",
            "azuredark": "content/ejthemes/flat-azure-dark/",
            "lime": "content/ejthemes/flat-lime/",
            "limedark": "content/ejthemes/flat-lime-dark/",
            "saffron": "content/ejthemes/flat-saffron/",
            "saffrondark": "content/ejthemes/flat-saffron-dark/",
            "gradient": "content/ejthemes/gradient-azure/",
            "gradientdark": "content/ejthemes/gradient-azure-dark/",
            "gradientazure": "content/ejthemes/gradient-azure/",
            "gradientazuredark": "content/ejthemes/gradient-azure-dark/",
            "gradientlime": "content/ejthemes/gradient-lime/",
            "gradientlimedark": "content/ejthemes/gradient-lime-dark/",
            "gradientsaffron": "content/ejthemes/gradient-saffron/",
            "gradientsaffrondark": "content/ejthemes/gradient-saffron-dark/",
            "bootstrap": "content/ejthemes/bootstrap-theme/",
            "high-contrast-01": "content/ejthemes/high-contrast-01/",
            "high-contrast-02": "content/ejthemes/high-contrast-02/",
            "material": "content/ejthemes/material/",
            "office-365": "content/ejthemes/office-365/"
        };
        var links = $(document.head || document.getElementsByTagName('head')[0]).find("link");
        for (var i = 0; i < links.length; i++) {
            if (links[i].href.indexOf("ej.web.all.min.css") != -1) {
                links[i].href = selectTheme[window.theme] + "ej.web.all.min.css";
            } else if (links[i].href.indexOf("ej.reportdesigner.min.css") != -1) {
                links[i].href = selectTheme[window.theme] + "ej.reportdesigner.min.css";
            }
        }
        window.sessionStorage.setItem("themeStyle", window.theme);
        window.isThemeChange = true;
        $(".contentchild").css({ visibility: "hidden" });
        $rootScope.viewReload();
    };
    $rootScope.showTooltipbox = function () {
        if (window.isOnline) {
            var $btnelement = $("#themebutton");
            var pos = $btnelement.offset();
            var left = pos.left - $("#sbtooltipbox").width() + 50;
            $("#sbtooltipbox").ejDialog("option", "position", { X: left + ($(window).width() <= 979 ? 0 : 10), Y: pos.top + $btnelement.height() });
            $("#sbtooltipbox").ejDialog("open");
            setTimeout(function () {
                $("#sbtooltipbox").ejDialog("close");
            }, 3000);
        }
    };
    $scope.loadSample = function (controlName, sampleName, $event) {
        window.isRefresh = false;
        if (ej.isNullOrUndefined(controlName) && ej.isNullOrUndefined(sampleName) && window.currentSample == "") {
            $(".control-panel").children().eq(0).addClass("showcasefooter");
            $(".producttitle,.showcasesamples").css({ display: "block" });
            $(".controlnamediv,.productpage").css({ display: "none" });
        }
        else {
            $(".control-panel").children().eq(0).removeClass("showcasefooter");
            $(".producttitle,.showcasesamples").css({ display: "none" });
            $(".controlnamediv,.productpage").css({ display: "block" });
            $(".productList li a").removeClass("e-active");
            if (!ej.isNullOrUndefined($event)) $($event.currentTarget).addClass("e-active");
            var isPanelToggle = true;
            if (ej.isNullOrUndefined(controlName) && ej.isNullOrUndefined(sampleName)) {
                var list = window.currentSample.split("/");
                controlName = list[0];
                sampleName = list[1];
                window.currentSample = "";
                isPanelToggle = false;
            }
            if ($("#slidemenu").is(":visible") && isPanelToggle) $(".accordion-panel").animate({ "margin-left": "-250px" }, "slow");
            for (loop = 0; loop < window.ControlList.length; loop += 1) {
                if (window.ControlList[loop].id.replace(" ", "") == $.trim(controlName.toLowerCase().replace(" ", ""))) {
                    var samplelist = window.ControlList[loop].samples;
                    for (var a = 0; a < samplelist.length; a++) {
                        if (samplelist[a].id == sampleName) break;
                    }
                    $rootScope.subRoute = samplelist[a];
                    $rootScope.controlName = window.ControlList[loop].name;
                    $rootScope.sampleName = $rootScope.subRoute.name;
                    $rootScope.htmlContent($rootScope.subRoute.templateUrl + ".html");
                    $rootScope.jsContent($rootScope.subRoute.templateUrl + ".js");
                    break;
                }
            }
            //To avoid JSLint error,the loop is not optimizedk
            $routeProviderReference.when("/" + $rootScope.subRoute.templateUrl, {
                templateUrl: $rootScope.subRoute.templateUrl + ".html",
                resolve: {
                    load: ["$q", "$rootScope", function ($q, $rootScope) {
                        var deferred = $q.defer();
                        require([$rootScope.subRoute.templateUrl], function () {
                            $rootScope.$apply(function () {
                                deferred.resolve();
                            });
                        });
                        return deferred.promise;
                    }]
                }
            });
        }
    };
    angular.element(document).ready(function () {
        $("body").css("visibility", "visible");
        $(".content").height($(window).height() - $(".toolbar").outerHeight());
        $(".themegallery").css({ display: (window.isOnline) ? "block" : "none" });
        $rootScope.updateTheme();
        $rootScope.showTooltipbox();
        $rootScope.refreshContentWindow();
        $rootScope.currentSampleExpand();
        $rootScope.refreshScroller();
        $rootScope.activeSample();
    });
    angular.element($window).bind("resize", function () {
        $(".accordion-panel").css({ "margin-left": ($(window).width() <= "981") ? "-250px" : "0px" });
        $rootScope.refreshScroller();
        $rootScope.refreshContentWindow();
    });
    $rootScope.refreshContentWindow = function (args) {
        $(".control-panel").height($(window).height() - $(".headerarea").outerHeight());
    };
    $rootScope.activeSample = function () {
        var element = $(".productList li").find(".ng-binding");
        for (var i = 0; i < element.length; i++) {
            if ($(element[i]).attr("href") == window.location.hash) {
                $(element[i]).addClass("e-active");
                if (window.location.hash != "#/" && window.location.hash.replace("#/", "") != "") {
                    $(".productList").animate({
                        scrollTop: $(element[i]).parents().find(">ul.ng-scope").offset().top - ($("#searchauto").offset().top + $(".dashboardheader").offset().top + 5)
                    }, 100);
                }
            }
        }
    };
    $scope.hideSampleList = function ($event) {
        $rootScope.expandCollapse = true;
        if ($($event.currentTarget).children().hasClass("up")) {
            $($event.currentTarget).next().show(300, function () { $rootScope.refreshScroller() });
            $($event.currentTarget).children().removeClass("up").addClass("down");
        }
        else {
            $($event.currentTarget).next().hide(300, function () { $rootScope.refreshScroller() });
            $($event.currentTarget).children().removeClass("down").addClass("up");
        }
    };
    $scope.showcaseSampleClick = function ($event) {
        window.isRefresh = false;
        window.location.hash = $($event.currentTarget).attr("href");
        $rootScope.expandCollapse = false;
        $rootScope.currentSampleExpand();
        if ($("#slidemenu").is(":visible") && $(".accordion-panel").is(":visible")) $(".accordion-panel").animate({ "margin-left": "-250px" }, "slow");
        $(".control-panel").children().eq(0).addClass("showcasefooter");
        $(".producttitle,.showcasesamples").css({ display: "block" });
        $(".controlnamediv,.productpage").css({ display: "none" });
    };
    $scope.navBarHide = function ($event) {
        if ($(window).width() <= "981" && $("#slidemenu").is(":visible") && !$($event.target).closest(".slidemenuicon").hasClass("slidemenuicon") && ($($event.target).closest(".productpage").length == 0 || $(".accordion-panel").is(":visible"))) {
            $(".accordion-panel").animate({ "margin-left": "-250px" }, "slow");
        }
        else {
            $(".accordion-panel").animate({ "margin-left": "0px" }, "slow");
        }
    };
    $rootScope.currentSampleExpand = function () {
        if (!$rootScope.expandCollapse) {
            var element = $(".productList li").find(".ng-scope");
            for (var i = 0; i < element.length; i++) {
                if ($.trim($(element[i]).parent().find(">.ng-binding").text().toLowerCase().replace(" ", "")) == location.hash.replace("#/", "").replace("#", "").split("/")[0]) {
                    $(element[i]).find("ul").show();
                    $(element[i]).parent().find("span").removeClass("up").addClass("down");
                } else {
                    $(element[i]).parent().find("span").removeClass("down").addClass("up");
                    $(element[i]).parent().find("ul").hide();
                }
            }
        }
    };
    $rootScope.refreshScroller = function () {
        $(".accordion-panel").height((($(window).height() - $(".headerarea").outerHeight())) + "px ;");
        var controlheight = $("#scrollcontainer").ejScroller("instance");
        controlheight.model.height = ($(window).height()) - ($(".headerarea").outerHeight() + $("#dashboardheader").outerHeight() + $(".accordion-panel .searchoption").outerHeight());
        controlheight.refresh();
        $("#scrollcontainer .e-vhandle").addClass("e-box");
    };
    $rootScope.searchLoad = function () {
        var element = $(".productList li").find(".ng-scope");
        for (var i = 0; i < element.length; i++) {
            if ($.trim($(element[i]).parent().find(">.ng-binding").text().toLowerCase().replace(" ", "")) == location.hash.replace("#/", "").replace("#", "").split("/")[0]) {
                $(element[i]).show();
                $(element[i]).parent().find("span").removeClass("up").addClass("down");
            }
        }
    };
    $scope.slideclick = function () {
        $(".accordion-panel").css({ "z-index": "1000000", "position": "fixed" });
        $(".accordion-panel").animate({ "margin-left": "0px" }, "slow");
        $rootScope.refreshScroller();
        $rootScope.refreshContentWindow();
    };
    $scope.$on("$viewContentLoaded", function (event) {
        $rootScope.refreshContentWindow();
        $rootScope.currentSampleExpand();
        $rootScope.refreshScroller();
        $rootScope.activeSample();
        if (window.isInitialLoad || window.isThemeChange) $rootScope.viewReload();
        window.isInitialLoad = false;
        window.isThemeChange = false;
        $(".contentchild").css({ visibility: "visible" });
    });
    $rootScope.htmlContent = function (url) {
        $.get(url, function (data) {
            var htmlContent = data;
            $("#tab #htmlsource").css("display", "block");
            $("#tab #jssource").css("display", "none");
            if ($("#htmlsource").find(".CodeMirror")) $("#htmlsource").find(".CodeMirror").remove();
            window.htmlEditor.push(CodeMirror.fromTextArea($("#htmlsource .tab_content").val(htmlContent)[0], {
                lineNumbers: false,
                readOnly: true,
                mode: "text/html"
            }));
            $("#htmlsource").find($(".CodeMirror")).appendTo("#htmlsource");
            $("#tab").ejTab("model.selectedItemIndex", 0);
        });
    };
    $rootScope.jsContent = function (url) {
        $.get(url, function (data) {
            var jsContent = data;
            $("#tab #htmlsource").css("display", "none");
            $("#tab #jssource").css("display", "block");
            if ($("#jssource").find(".CodeMirror")) $("#jssource").find(".CodeMirror").remove();
            window.JSEditor.push(CodeMirror.fromTextArea($("#jssource .tab_content").val(jsContent)[0], {
                lineNumbers: false,
                readOnly: true,
                mode: "javascript"
            }));
            $("#jssource").find($(".CodeMirror")).appendTo("#jssource");
            $("#tab #jssource").css("display", "none");
            $("#tab #htmlsource").css("display", "block");
            $("#tab").ejTab("model.selectedItemIndex", 0);
        });
    };
    $scope.loadSample();
    $scope.onSelectItem = function (args) {
        $rootScope.expandCollapse = true;
        var name = args.item.id.split("/");
        $scope.loadSample(name[0], name[1], args);
        window.isRefresh = false;
        window.location.hash = "/" + args.item.id.replace(" ", "");
        $rootScope.searchLoad();
        $rootScope.activeSample();
        $("#searchauto").ejAutocomplete("clearText");
    };
    $scope.onPopupOpen = function (args) {
        $rootScope.isPopupOpen = (args.type == "open") ? true : false;
    };
    $scope.$on("$locationChangeStart", function (event, next, current) {
        if (window.isRefresh && window.location.hash.replace("#/", "") != "") {
            window.location.reload();
        }
        window.isRefresh = true;
    });
}]);
syncApp.config(["$routeProvider", "$controllerProvider", "$compileProvider", "$filterProvider", "$provide", "$locationProvider", function ($routeProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, $locationProvider) {
    $routeProviderReference = $routeProvider;
    $locationProvider.hashPrefix("");
    syncApp = {
        controller: $controllerProvider.register
    }
}]);
syncApp.run(["$route", "$rootScope", function ($route, $rootScope) {
    window.theme = (window.sessionStorage.length == 0) ? "bootstrap" : window.sessionStorage.getItem("themeStyle");
    window.currentSample = (window.location.hash.replace("#/", "") == "") ? "" : window.location.hash.replace("#/", "");
    $rootScope.viewReload = function () {
        $route.reload();
    };
}]);
