/// <reference path="typings/tsd.d.ts" />
/// <reference path="node_modules/angular2/bundles/typings/angular2/http.d.ts" />

import {bootstrap} from 'angular2/angular2';
import {HTTP_BINDINGS} from 'angular2/http';
import {AppCmp} from 'app/app_cmp.js';

bootstrap(AppCmp, [HTTP_BINDINGS])
  .then(() => console.log('index ok'))
  .catch((error) => console.log(`error bootstraping index ${error}`));
