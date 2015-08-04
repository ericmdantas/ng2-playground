/// <reference path="../../../../typings/tsd.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
import {bind} from 'angular2/di';
import {PlayerCmp, MonsterCmp} from 'app/world/world';
import {FightCmp, GotHitDirective} from 'app/world/battle/battle';
import {StatsCmp} from 'app/world/stats/stats';
import {LogCmp} from 'app/world/log/log';
import {MessageBus} from 'app/utils/utils';

@Component({
    selector: 'battle-area'
})
@View({
    templateUrl: 'app/world/battle/battle_area/battle_area.html',
    styleUrls: ['app/world/battle/battle_area/battle_area.css'],
    directives: [PlayerCmp, MonsterCmp, GotHitDirective, FightCmp, LogCmp]
})

export class BattleAreaCmp {
    constructor() {
        console.log('battle_area init');
    }
}

Promise.all( [bootstrap(PlayerCmp, [bind(MessageBus).toFactory(() => MessageBus.getInstance())]),
              bootstrap(MonsterCmp, [bind(MessageBus).toFactory(() => MessageBus.getInstance())]),
              bootstrap(LogCmp, [bind(MessageBus).toFactory(() => MessageBus.getInstance())]),
              bootstrap(FightCmp, [bind(MessageBus).toFactory(() => MessageBus.getInstance())])] )
       .then(() => {
            console.log('player and monster bootstraped correctly');
       })
       .catch((error) => {
            console.log(`error bootstraping battle_areas components: ${error}`);
       });

