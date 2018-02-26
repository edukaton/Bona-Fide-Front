# Bona-Fide-Front
Front-end grupy Bona-FIde

#Link
https://fakealert.000webhostapp.com/


## Basic VueJs build system with webpack, vue-loader and hot reload
 
This boilerplate is to help you setup a Vue build system from scratch so that you can bootstrap with the libraries you need, decouple them and customize according to your needs.
 
 For beginners, it's better to be able to control your build and add to it rather than tweak others and run the risk or breaking it. That being said, there are some great Vue boilerplates out there you can learn from as well.
 
 This one is just barebones, you get to add in your tests, minification et al.
 
## Directory Structure 

Before running `npm install` you'll see the following:
```
 .
 ├── LICENSE
 ├── README.md
 ├── dist
 ├── index.html
 ├── package.json
 ├── src
 │   ├── app.vue
 │   └── main.js
 └── webpack.config.js
 
```

Make sure to look out for `dist/build.js` after running the `$ webpack` command.
 
##What's Included
 
 * Vue js
 * Webpack
 * Vue Loader
 * Hot Reload
 
##Installation
 
```
$ npm install -g webpack 
$ npm install -g webpack-dev-server
$ npm install
```
##Usage
 
```
$ webpack 
$ webpack-dev-server --inline --hot 
```

That's it, play around with it, make it your own by adding whatever else your project needs.
 
