L.Control.Slider = L.Control.extend({
    update: function(value){
        return value;
    },

    options: {
        width: '100px',
        position: 'topright',
        min: 0,
        max: 250,
        step: 1,
        id: "slider",
        value: 50
    },
    initialize: function (f, options) {
        L.setOptions(this, options);
        this.update = f;
    },
    onAdd: function (map) {
        this.sliderbox = L.DomUtil.create('div', 'leaflet-slider-box');
        this.slider = L.DomUtil.create('input', 'leaflet-slider', this.sliderbox);
        this.slider.setAttribute("id", this.options.id);
        this.slider.setAttribute("type", "range");
        this.slider.setAttribute("min", this.options.min);
        this.slider.setAttribute("max", this.options.max);
        this.slider.setAttribute("step", this.options.step);
        this.slider.setAttribute("value", this.options.value);
        this.slider.setAttribute("onChange", this.options.id + "._updateValue()");
        this.sliderbox.style.width = this.options.width;
        L.DomEvent.disableClickPropagation(this.sliderbox);
        this.update(this.options.value);
        return this.sliderbox;
    },
    _updateValue: function () {
    	this.value = this.slider.value;
        this.update(this.value);
    }


});
L.control.slider = function (f, options) {
    return new L.Control.Slider(f, options);
 };