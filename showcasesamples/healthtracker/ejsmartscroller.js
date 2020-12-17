(function ($, ej, undefined) {
    // Example plugin creation code
    // ejScr is the plugin name 
    // "ej.Scr" is "namespace.className" will hold functions and properties
    ej.widget("ejSmartScroller", "ej.SmartScroller", {
        // widget element will be automatically set in this
        element: null,
        // user defined model will be automatically set in this
        model: null,
        //Root Css Class
        _rootCSS: "",
        // default model
        defaults: {
            /// <summary>This Contains default property of button </summary>
            triggerOnce: true,
            reach: null
        },
        //Data Types
        dataTypes: {
            triggerOnce: "boolean"
        },

        // constructor function
        _init: function () {
            this._initialize();
            this._wireEvents();
        },

        // all events bound using this._on will be unbind automatically
        _destroy: function () {
            this._off($(window), "scroll", this._scrollHandler);
        },
        _setModel: function (options) {

        },

        _initialize: function () {
            this._oldScroll = this._newScroll = 0;
            this._triggered = false;
            if (this._oldScroll >= this._getOffset())
                this._triggerFn();
        },
        _scrollHandler: function (e) {
            if (!this._triggered || !this.model.triggerOnce) {
                this._triggerOnReach();
                this._oldScroll = this._newScroll;
            }
        },
        _getOffset: function () {
            return $(this.element).offset().top - (document.documentElement.clientHeight - $(this.element).outerHeight());
        },
        _triggerOnReach: function () {
            this._newScroll = $(document).scrollTop();
            var offset = this._getOffset();
            if (this._oldScroll < offset && offset <= this._newScroll) {
                this._triggerFn();
            } else if (this._newScroll < offset && offset <= this._oldScroll) {
                this._triggerFn();
            }
        },
        _triggerFn: function () {
            this._triggered = true;
            this._trigger("reach", { element: this.element, offsetTop: this._newScroll });
        },
        /*-----------------------Event Handlers -----------------------------------------*/
        _wireEvents: function () {
            this._on($(window), "scroll", this._scrollHandler);
        },
    });

})(jQuery, Syncfusion);