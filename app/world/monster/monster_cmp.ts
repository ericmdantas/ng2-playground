/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';
import {Inject} from 'angular2/di';
import {MonsterModel} from 'app/world/monster/monster';
import {MessageBus, FIGHT_STARTED, FIGHT_ENDED, SOMEONE_GOT_HIT, MAX_HIT, DELAY_PER_HIT} from 'app/utils/utils';

@Component({
    selector: 'monster',
    viewInjector: [MonsterModel, MessageBus]
})
@View({
    templateUrl: 'app/world/monster/monster.html',
    styleUrls: ['app/world/monster/monster.css']
})

export class MonsterCmp {
    monster: MonsterModel;
    mb: MessageBus = MessageBus;

    constructor(@Inject(MonsterModel) mm: MonsterModel) {
        console.log('monster_cmp init');

        this.mb = MessageBus.getInstance();

        this.monster = mm;

        this.mb.listen(FIGHT_STARTED, this.onFightStarted.bind(this));
    }

    onFightStarted() {

        var _id = setInterval((_) => {
            var _hit = Math.floor(Math.random() * MAX_HIT);
            this.monster.hp -= _hit;

            this.mb.dispatch(SOMEONE_GOT_HIT, `${this.monster.name} got hit with ${_hit}!`);

            if (!this.monster.isAlive()) {
                this.mb.dispatch(FIGHT_ENDED);
                clearInterval(_id);
            }

        }, DELAY_PER_HIT);
    }
}
