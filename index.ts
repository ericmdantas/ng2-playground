import {bootstrap} from 'angular2/angular2';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {MainCmp} from 'app/main.js';

bootstrap(MainCmp, [HTTP_PROVIDERS, ROUTER_PROVIDERS])
  .then(() => console.log('app init'));
