# promise-wrapper

creates a wrapped function baked with the values you provided that only accepts one VALUE argument

# example

you have a function with the following signature

```javascript
updateImage(album, image);
```

and you have an array of images and would like to map them, with promise-wrapper you can do this

```javascript
var wrapper = require('promise-wrapper');
wrapper.wrap(updateImage, [album, wrapper.VALUE]);
```

this will return a function that accepts only one argument which is image. with bluebird it would look like this

```javascript
var wrapper = require('promise-wrapper'),
	Promise = require('bluebird');
	
var images = yield Promise.map([1,2,3,4], wrapper.wrap(updateImage, [album, wrapper.VALUE]));
```