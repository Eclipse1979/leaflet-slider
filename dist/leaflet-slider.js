L.Control.Slider = L.Control.extend({
    update: function(value){
        return value;
    },

    options: {
        size: '100px',
        position: 'topright',
        min: 0,
        max: 250,
        step: 1,
        id: "slider",
        value: 50,
        collapsed: true,
        title: 'Slider',
        logo: 'S'
    },
    initialize: function (f, axis, options) {
        L.setOptions(this, options);
        this.update = f;
        this.axis = axis;
    },
    onAdd: function (map) {
        this._initLayout();
        this.update(this.options.value+"");
        return this.sliderbox;
    },
    _updateValue: function () {
    	this.value = this.slider.value;
        this.update(this.value);
    },
    _initLayout: function () {
        var className = 'leaflet-control-slider';
        this.sliderbox = L.DomUtil.create('div', 'leaflet-bar ' +className + ' ' +className + '-' + this.axis);
        this._sliderLink = L.DomUtil.create('a', className + '-toggle', this.sliderbox);
        this._sliderLink.setAttribute("title", this.options.title);
        this._sliderLink.innerHTML = this.options.logo;
        


        this.slider = L.DomUtil.create('input', 'leaflet-slider', this.sliderbox);
        if (this.axis == 'vertical') {this.slider.setAttribute("orient", "vertical");}
        this.slider.setAttribute("title", this.options.title);
        this.slider.setAttribute("id", this.options.id);
        this.slider.setAttribute("type", "range");
        this.slider.setAttribute("min", this.options.min);
        this.slider.setAttribute("max", this.options.max);
        this.slider.setAttribute("step", this.options.step);
        this.slider.setAttribute("value", this.options.value);
        this.slider.setAttribute("onChange", this.options.id + "._updateValue()");
        
        L.DomEvent.disableClickPropagation(this.sliderbox);
        if (this.options.collapsed) {
            if (!L.Browser.android) {
                L.DomEvent.on(this.sliderbox, {
                    mouseenter: this._expand,
                    mouseleave: this._collapse
                }, this);
            }

            if (L.Browser.touch) {
                L.DomEvent
                    .on(this._sliderLink, 'click', L.DomEvent.stop)
                    .on(this,_sliderLink, 'click', this._expand, this);
            } else {
                L.DomEvent.on(this._sliderLink, 'focus', this._expand, this);
            }
        } else {
            this._expand();
        }
    },
    _expand: function () {
        L.DomUtil.addClass(this.sliderbox, 'leaflet-control-slider-expanded');
        if(this.axis == 'vertical') {this.sliderbox.style.height = this.options.size;}
        else {this.sliderbox.style.width = this.options.size;}
    },
    _collapse: function () {
        L.DomUtil.removeClass(this.sliderbox, 'leaflet-control-slider-expanded');
        if(this.axis == 'vertical') {this.sliderbox.style.height = '25px';}
        else {this.sliderbox.style.width = '26px';}
    }


});
L.control.slider = function (f, axis, options) {
    return new L.Control.Slider(f, axis, options);
 };