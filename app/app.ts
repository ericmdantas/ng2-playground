/// <reference path="../typings/tsd.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
import {bind} from 'angular2/di';
import {ShadowDomStrategy} from 'angular2/src/render/dom/shadow_dom/shadow_dom_strategy';
import {NativeShadowDomStrategy} from 'angular2/src/render/dom/shadow_dom/native_shadow_dom_strategy';
import {BattleAreaCmp} from 'app/world/world';

@Component({
    selector: 'app'
})
@View({
    template: `
    <battle-area></battle-area>
    `
})

export class App {
    constructor() {
        console.log('app init');
    }
}

Promise.all( [bootstrap(BattleAreaCmp, [bind(ShadowDomStrategy).toClass(NativeShadowDomStrategy)])] )
       .then(() => {
            console.log('battle_area boostraped correctly');
       })
       .catch((error) => {
            console.log(`error bootstraping: ${error}`)
       });

