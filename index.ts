import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {MainCmp} from 'app/main.js';

bootstrap(MainCmp, [HTTP_PROVIDERS, ROUTER_PROVIDERS])
  .then(() => console.log('app init'))
  .catch((err) => console.log(err));
