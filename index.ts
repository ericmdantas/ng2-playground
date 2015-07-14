/// <reference path="typings/tsd.d.ts" />

import {bootstrap} from 'angular2/angular2';
import {routerInjectables} from 'angular2/router';
import {App} from 'app/app';

bootstrap(App, [routerInjectables]);
