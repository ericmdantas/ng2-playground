/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';
import {Inject} from 'angular2/di';
import {PlayerModel} from 'app/world/player/player';
import {DedDirective} from 'app/world/battle/battle_actions/battle_actions';

@Component({
    selector: 'player',
    properties: ['p'],
    viewInjector: [PlayerModel]
})
@View({
    templateUrl: 'app/world/player/player.html',
    styleUrls: ['app/world/player/player.css'],
    directives: [DedDirective]
})

export class PlayerCmp {
    p: PlayerModel;

    constructor(@Inject(PlayerModel) p: PlayerModel) {
        console.log('player_cmp init');
    }
}