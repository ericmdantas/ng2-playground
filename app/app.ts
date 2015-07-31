/// <reference path="../typings/tsd.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
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

Promise.all( [bootstrap(BattleAreaCmp)] )
       .then(() => {
            console.log('battle_area boostraped correctly');
       })
       .catch((error) => {
            console.log(`error bootstraping: ${error}`)
       });

