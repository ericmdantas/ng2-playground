/// <reference path="../../../../typings/tsd.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
import {Inject} from 'angular2/di';
import {PlayerCmp, MonsterCmp} from 'app/world/world';
import {PlayerModel, MonsterModel} from 'app/world/world';
import {FightCmp, GotHitDirective} from 'app/world/battle/battle';
import {StatsCmp} from 'app/world/stats/stats';
import {RessurrectCmp} from 'app/world/battle/battle_actions/battle_actions';
import {LogCmp} from 'app/world/log/log';
import {MessageBus, FIGHT_STARTED, FIGHT_ENDED, SOMEONE_GOT_HIT, MAX_HIT, DELAY_PER_HIT} from 'app/utils/utils';


@Component({
    selector: 'battle-area',
    viewInjector: [PlayerModel, MonsterModel]
})
@View({
    templateUrl: 'app/world/battle/battle_area/battle_area.html',
    styleUrls: ['app/world/battle/battle_area/battle_area.css'],
    directives: [PlayerCmp, MonsterCmp, GotHitDirective, FightCmp, LogCmp, RessurrectCmp]
})

export class BattleAreaCmp {
    mb: MessageBus;
    player: PlayerModel;
    monster: MonsterModel;

    constructor(@Inject(PlayerModel) p: PlayerModel, @Inject(MonsterModel) m: MonsterModel) {
        console.log('battle_area init');

        this.player = p;
        this.monster = m;

        this.mb = MessageBus.getInstance();

        this.mb.listen(FIGHT_STARTED, this.onFightStarted.bind(this));
    }

    onFightStarted() {
        var _toBeHit = 'm';

        var _id = setInterval((_) => {
            var _hit = Math.floor(Math.random() * MAX_HIT);

            if (_toBeHit === 'm') {
                this.monster.hp -= _hit;

                this.mb.dispatch(SOMEONE_GOT_HIT, `${this.monster.name} got hit with ${_hit}!`);

                if (!this.monster.isAlive()) {
                    this.monster.hp = 0;
                    this.mb.dispatch(FIGHT_ENDED);
                    clearInterval(_id);
                }
            }
            else {
                this.player.hp -= _hit;

                this.mb.dispatch(SOMEONE_GOT_HIT, `${this.player.name} got hit with ${_hit}!`);

                if (!this.player.isAlive()) {
                    this.player.hp = 0;
                    this.mb.dispatch(FIGHT_ENDED);
                    clearInterval(_id);
                }
            }

            _toBeHit = _toBeHit === 'm' ? 'p' : 'm';

        }, DELAY_PER_HIT);
    }
}

Promise.all( [bootstrap(PlayerCmp),
              bootstrap(MonsterCmp),
              bootstrap(LogCmp),
              bootstrap(FightCmp),
              bootstrap(RessurrectCmp)] )
       .then(() => {
            console.log('player and monster bootstraped correctly');
       })
       .catch((error) => {
            console.log(`error bootstraping battle_areas components: ${error}`);
       });

