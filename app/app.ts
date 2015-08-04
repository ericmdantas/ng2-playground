/// <reference path="../typings/tsd.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
import {bind} from 'angular2/di';
import {BattleAreaCmp} from 'app/world/world';
import {StatsCmp} from 'app/world/stats/stats';
import {MessageBus} from 'app/utils/utils';

@Component({
    selector: 'app'
})
@View({
    template: `
    <battle-area></battle-area>
    <stats></stats>
    `
})

export class App {
    constructor() {
        console.log('app init');
    }
}

Promise.all( [bootstrap(BattleAreaCmp),
              bootstrap(StatsCmp )
       .then(() => {
            console.log('battle_area boostraped correctly');
       })
       .catch((error) => {
            console.log(`error bootstraping: ${error}`)
       });

