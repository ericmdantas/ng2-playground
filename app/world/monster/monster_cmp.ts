/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';
import {Inject} from 'angular2/di';
import {MonsterModel} from 'app/world/monster/monster';
import {MessageBus, FIGHT_STARTED, FIGHT_ENDED, SOMEONE_GOT_HIT, MAX_HIT, DELAY_PER_HIT} from 'app/utils/utils';

@Component({
    selector: 'monster',
    properties: ['m'],
    viewInjector: [MonsterModel, MessageBus]
})
@View({
    templateUrl: 'app/world/monster/monster.html',
    styleUrls: ['app/world/monster/monster.css']
})

export class MonsterCmp {
    m: MonsterModel;
    mb: MessageBus = MessageBus;

    constructor(@Inject(MonsterModel) mm: MonsterModel) {
        console.log('monster_cmp init');
    }


}
