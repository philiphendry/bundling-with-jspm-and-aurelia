import "aurelia-bootstrapper";

import "bootstrap";
import "bootstrap/css/bootstrap.css!";

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  aurelia.start().then(a => a.setRoot('app', document.body));
}
