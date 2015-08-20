/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, LifecycleEvent} from 'angular2/angular2';
import {Inject} from 'angular2/di';
import {PlayerModel} from 'app/player/player_model.js';

@Component({
  selector: 'player',
  lifecycle: [LifecycleEvent.onChange],
  viewBindings: [PlayerModel]
})
@View({
  templateUrl: 'app/player/player.html',
  styleUrls: ['app/player/player.css']
})

export class PlayerCmp {
  player: PlayerModel;

  constructor(@Inject(PlayerModel) p: PlayerModel) {
    this.player = p;
  }

  onChange(change) {
    console.log(change);
  }
}
