/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';
import {Inject} from 'angular2/di';
import {MonsterModel} from 'app/world/world';

@Component({
    selector: 'monster'
})
@View({
    templateUrl: 'app/world/monster/monster.html',
    styleUrls: ['app/world/monster/monster.css']
})

export class MonsterCmp {
    monster: MonstesModel;

    constructor() {
        console.log('monster_cmp init');
    }
}
