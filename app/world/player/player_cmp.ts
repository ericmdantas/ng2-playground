/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';
import {Inject} from 'angular2/di';
import {PlayerModel} from 'app/world/player/player';

@Component({
    selector: 'player',
    viewInjector: [PlayerModel]
})
@View({
    templateUrl: 'app/world/player/player.html',
    styleUrls: ['app/world/player/player.css']
})

export class PlayerCmp {
    player: PlayerModel;

    constructor(@Inject(PlayerModel) p: PlayerModel) {
        console.log('player_cmp init');

        this.player = p;
    }
}