/// <reference path="../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';
import {bind} from 'angular2/di';
import {ShadowDomStrategy} from 'angular2/src/render/dom/shadow_dom/shadow_dom_strategy';
import {NativeShadowDomStrategy} from 'angular2/src/render/dom/shadow_dom/native_shadow_dom_strategy';

@Component({
    selector: 'app'
})
@View({
    template: `<h1>app</h1>`
})

export class App {
    constructor() {
        console.log('app init');
    }
}