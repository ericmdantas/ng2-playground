/// <refernce path="../../../typings/tsd.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
import {bind} from 'angular2/di';
import {ShadowDomStrategy} from 'angular2/src/render/dom/shadow_dom/shadow_dom_strategy';
import {NativeShadowDomStrategy} from 'angular2/src/render/dom/shadow_dom/native_shadow_dom_strategy';
import {PlayerCmp, MonsterCmp} from 'app/world/world';

@Component({
    selector: 'battle-area'
})
@View({
    templateUrl: 'app/world/battle_area/battle_area.html',
    styleUrls: ['app/world/battle_area/battle_area.css'],
    directives: [PlayerCmp, MonsterCmp]
})

export class BattleAreaCmp {
    constructor() {
        console.log('battle_area init');
    }
}

Promise.all( [bootstrap(PlayerCmp, [bind(ShadowDomStrategy).toClass(NativeShadowDomStrategy)]),
              bootstrap(MonsterCmp, [bind(ShadowDomStrategy).toClass(NativeShadowDomStrategy)]) ])
       .then(() => {
            console.log('player and monster bootstraped correctly');
       })
       .catch((error) => {
            console.log(`error bootstraping: ${error}`);
       });

