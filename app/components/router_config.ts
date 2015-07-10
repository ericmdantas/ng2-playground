/// <reference path="../../typings/tsd.d.ts" />

import {RouteConfig} from 'angular2/router';
import {App} from 'app/components/app';

@RouteConfig([
    {path: '/', component: App}
])
export class RouterApp {

}