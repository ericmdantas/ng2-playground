/// <reference path="typings/tsd.d.ts" />

import {bootstrap} from 'angular2/angular2';
import {AppCmp} from 'app/app.js';

bootstrap(AppCmp)
    .then(() => console.log('success bootstraping index'))
    .catch((error) => console.log(`error bootstraping index ${error}`));
