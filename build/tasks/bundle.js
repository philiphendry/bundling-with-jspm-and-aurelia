var gulp = require("gulp");  
var bundler = require("aurelia-bundler");

var config = {  
  "force": true,
  "packagePath": ".",
  "bundles": {
    "dist/build": {
      "includes": [
        "main",
        "app",
        "aurelia-framework",
        "aurelia-bootstrapper",
        "aurelia-router",
        "aurelia-loader-default",
        "aurelia-logging-console",
        "aurelia-templating-binding",
        "aurelia-templating-resources",
        "aurelia-templating-router",
        "aurelia-history-browser"
      ],
      "options": {
        "inject": true,
        "minify": true,
        "sourceMaps": true
      }
    }
  }
};

gulp.task("bundle", function() {  
 return bundler.bundle(config);
});

gulp.task("unbundle", function() {  
 return bundler.unbundle(config);
});
