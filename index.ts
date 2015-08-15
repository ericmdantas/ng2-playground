/// <reference path="typings/tsd.d.ts" />

import {bootstrap} from 'angular2/angular2';
import {routerInjectables} from 'angular2/router';
import {AppCmp} from 'app/app_cmp.js';

bootstrap(AppCmp, [routerInjectables])
    .then(() => console.log('success bootstraping index'))
    .catch((error) => console.log(`error bootstraping index ${error}`));
