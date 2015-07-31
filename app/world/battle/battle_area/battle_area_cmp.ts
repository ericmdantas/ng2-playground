/// <refernce path="../../../../typings/tsd.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
import {PlayerCmp, MonsterCmp, FightCmp} from 'app/world/world';

@Component({
    selector: 'battle-area'
})
@View({
    templateUrl: 'app/world/battle/battle_area/battle_area.html',
    styleUrls: ['app/world/battle/battle_area/battle_area.css'],
    directives: [PlayerCmp, MonsterCmp, FightCmp]
})

export class BattleAreaCmp {
    constructor() {
        console.log('battle_area init');
    }
}

Promise.all( [bootstrap(PlayerCmp),
              bootstrap(MonsterCmp),
              bootstrap(FightCmp) ])
       .then(() => {
            console.log('player and monster bootstraped correctly');
       })
       .catch((error) => {
            console.log(`error bootstraping: ${error}`);
       });

