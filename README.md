#Leaflet-Slider

Adds a range input slider to a leaflet map.

[Demo](http://eclipse1979.github.io/leaflet.slider/example/leaflet-slider.html)

## Instructions for including the plugin :

To create a new slider :

    slider = L.control.slider(f(value) <function>, <options>);
  
The function f must take as parameter the value of the input and will be called each time the input value changes.

**WARNING** : the slider’s id must be the name of the variable of the slider. See options for detail.

## Simple usage :

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
