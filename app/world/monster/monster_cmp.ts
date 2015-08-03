/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';
import {Inject} from 'angular2/di';
import {MonsterModel} from 'app/world/monster/monster';

@Component({
    selector: 'monster',
    viewInjector: [MonsterModel]
})
@View({
    templateUrl: 'app/world/monster/monster.html',
    styleUrls: ['app/world/monster/monster.css']
})

export class MonsterCmp {
    monster: MonsterModel;

    constructor(@Inject(MonsterModel) mm: MonsterModel) {
        console.log('monster_cmp init');

        this.monster = mm;
    }
}
