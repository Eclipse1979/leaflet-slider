#Leaflet-Slider

Adds a range input slider to a leaflet map which automatically update when the input value is changed by calling a function taking the value as a parameter.

Check out the [Demo](http://eclipse1979.github.io/leaflet.slider/example/leaflet-slider.html).

## Using Leaflet-Slider :

The slider can be insterted like this: you create the control. **The slider's id (in the options) must be the same as the variable name used by the slider.** For instance in the following code, options should have `id: "newSlider"`. The function fn should only take the value of the input as a parameter and will be called when the input value is changed.

    newSlider = L.control.slider(<Function> fn, <Control.Slider options> options);


## Simple usage example :

    slider = L.control.slider(function(value) {console.log(value);}, {id:slider});
    slider2 = L.control.slider(function(value) {alert(value);}, {id:slider2});



## Options :
* `width:` width of the slider, default is ‘100px’
* `position:` position of the slider, default is ‘topright’. See L.Control in leaflet’s API
* `min:` minimal value of the slider, default is 0
* `max:` maximal value of the slider, default is 100
* `step:` incremental step of values in range, default is 1
* `id:` name of the slider, must be the same name as the name of the slider’s variable, default is “slider”
* `value:` onload value of the slider, default is 50
