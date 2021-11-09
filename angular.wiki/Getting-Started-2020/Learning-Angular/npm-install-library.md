- https://angular.io/guide/using-libraries#adding-a-library-to-the-runtime-global-scope

For example, to use the Bootstrap 4 library, first install the library and its dependencies using the npm package manager:

```bash
npm install jquery --save
npm install popper.js --save
npm install bootstrap --save
```

In the angular.json configuration file, add the associated script files to the "scripts" array:

```
"scripts": [
  "node_modules/jquery/dist/jquery.slim.js",
  "node_modules/popper.js/dist/umd/popper.js",
  "node_modules/bootstrap/dist/js/bootstrap.js"
],
```