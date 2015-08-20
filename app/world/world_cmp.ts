/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, NgFor, LifecycleEvent, bootstrap} from 'angular2/angular2';
import {WorldModel} from 'app/world/world_model.js';
import {MineFieldCmp} from 'app/mine_field/mine_field.js';
import {PlayerCmp} from 'app/player/player.js';
import {ExplosionDirective, ExplosionType} from 'app/common/explosion_directive.js';
import {Inject} from 'angular2/di';

@Component({
  selector: 'world',
  viewBindings: [WorldModel, PlayerCmp, MineFieldCmp],
  lifecycle: [LifecycleEvent.onInit]
})
@View({
  templateUrl: 'app/world/world.html',
  styleUrls: ['app/world/world.css'],
  directives: [NgFor, PlayerCmp, MineFieldCmp, ExplosionDirective]
})

export class WorldCmp {
  world: WorldModel;

  constructor(@Inject(WorldModel) w: WorldModel) {
    this.world = w;
  }

  onInit() {
    this.world.mineFields.forEach((mf) => {
      console.log(mf);
    })
  }

  explosionHandler(info: ExplosionType) {
      this.world.player.sufferHit(info.hit);
  }
}

Promise.all([bootstrap(PlayerCmp), bootstrap(MineFieldCmp)])
       .then(() => console.log('world bootstraped correctly'))
       .catch((error) => console.log(`world NOT bootstraped: ${error}`));
