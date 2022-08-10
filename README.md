# Leaflet-Slider

Adds a range input slider to a leaflet map which automatically update when the input value is changed by calling a function taking the value as a parameter.

Check out the [Demo](http://eclipse1979.github.io/leaflet.slider/example/leaflet-slider.html).

## Using Leaflet-Slider :

The slider can be insterted like this: you create the control. The function fn should only take the value of the input as a parameter and will be called when the input value is changed.

    newSlider = L.control.slider(<Function> fn, <Control.Slider options> options);


## Simple usage example :

    slider = L.control.slider(function(value) {console.log(value);}, {id:slider, 'vertical'});
    slider2 = L.control.slider(function(value) {alert(value);}, {id:slider2, orientation: 'horizontal'});



## Options :
* `size:` size of the slider, default is `‘100px’`.
* `position:` position of the slider, default is `‘topright’`. See L.Control in leaflet’s API.
* `min:` minimal value of the slider, default is `0`.
* `max:` maximal value of the slider, default is `100`.
* `step:` incremental step of values in range, default is `1`.
* `id:` name of the slider, default is `“slider”`.
* `value:` onload value of the slider, default is `50`.
* `collapsed:` wether the slider collapses when it looses focus, default is `true`.
* `title:` value of the title attribute, default is `'Leaflet Slider'`.
* `logo:` letter on the button when collapsed, default is `'S'`.
* `orientation:` orientation of the slider, either `'horizontal'` or `'vertical'`, default is `'horizontal'`.
* `showValue:` wether or not the value of the input should be shown next to the slider, default is `true`.
* `getValue:` the function called to transform the input of the slider into the value shown by showValue, default is `function(value) {return value;}`.
* `increment:` wether or not there should be increment and decrement buttons next to the slider, default is `false`.
* `syncSlider:` if set true, the value synchronizes slider's position, default is `false`.
