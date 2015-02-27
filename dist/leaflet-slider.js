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
        title: 'Leaflet Slider',
        logo: 'S',
        axis: 'horizontal'
    },
    initialize: function (f, options) {
        L.setOptions(this, options);
        this.update = f;
        if (this.options.axis!='vertical') {
            this.options.axis = 'horizontal';
        }
    },
    onAdd: function (map) {
        this._initLayout();
        this.update(this.options.value+"");
        return this._container;
    },
    _updateValue: function () {
    	this._sliderValue.innerHTML = this.value = this.slider.value;
        this.update(this.value);
    },
    _initLayout: function () {
        var className = 'leaflet-control-slider';
        this._container = L.DomUtil.create('div', 'leaflet-bar ' +className + ' ' +className + '-' + this.options.axis);
        this._sliderLink = L.DomUtil.create('a', className + '-toggle', this._container);
        this._sliderLink.setAttribute("title", this.options.title);
        this._sliderLink.innerHTML = this.options.logo;
        
        this._sliderValue = L.DomUtil.create('p', className+'-value', this._container);
        this._sliderValue.innerHTML = this.options.value;

        this.slider = L.DomUtil.create('input', 'leaflet-slider', this._container);
        if (this.options.axis == 'vertical') {this.slider.setAttribute("orient", "vertical");}
        this.slider.setAttribute("title", this.options.title);
        this.slider.setAttribute("id", this.options.id);
        this.slider.setAttribute("type", "range");
        this.slider.setAttribute("min", this.options.min);
        this.slider.setAttribute("max", this.options.max);
        this.slider.setAttribute("step", this.options.step);
        this.slider.setAttribute("value", this.options.value);
        this.slider.setAttribute("onChange", this.options.id + "._updateValue()");
        if (this.options.axis =='vertical') {this.slider.style.height = (this.options.size.replace('px', '') -26) +'px';}
        else {this.slider.style.width = (this.options.size.replace('px', '') -45) +'px';}
        
        L.DomEvent.disableClickPropagation(this._container);
        if (this.options.collapsed) {
            if (!L.Browser.android) {
                L.DomEvent.on(this._container, {
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
        L.DomUtil.addClass(this._container, 'leaflet-control-slider-expanded');
        if(this.options.axis == 'vertical') {this._container.style.height = this.options.size;}
        else {this._container.style.width = this.options.size;}
    },
    _collapse: function () {
        L.DomUtil.removeClass(this._container, 'leaflet-control-slider-expanded');
        if(this.options.axis == 'vertical') {this._container.style.height = '25px';}
        else {this._container.style.width = '26px';}
    }


});
L.control.slider = function (f, options) {
    return new L.Control.Slider(f, options);
 };