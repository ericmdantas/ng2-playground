/// <reference path="../../typings/tsd.d.ts"/>

import {Component, View, LifecycleEvent, NgFor, bootstrap} from 'angular2/angular2';
import {Inject} from 'angular2/di';
import {World} from 'app/world/world.js';
import {FieldCmp} from 'app/field/field.ts';

@Component({
  selector: 'world',
  lifecycle: [LifecycleEvent.onInit],
  viewBindings: [World]
})
@View({
  templateUrl: 'app/world/world.html',
  styleUrls: ['app/world/world.css'],
  directives: [FieldCmp, NgFor]
})

export class WorldCmp {
    world: World;

    constructor(@Inject(World) w: World) {
        this.world = w;
    }

    onInit() {
      console.log('world_cmp init');
    }
}

Promise.all([bootstrap(FieldCmp)])
       .then(() => console.log('world boot ok'))
       .catch((error) => console.log(`world boot with error ${error}`));
