/// <reference path="../typings/tsd.d.ts"/>

import {Component, View, bootstrap} from 'angular2/angular2';
import {WorldCmp} from 'app/world/world.js';
import {SnakeCmp} from 'app/snake/snake.js';
import {FoodCmp} from 'app/food/food.js';

@Component({
  selector: 'app'
})
@View({
  template: `
    <main>
      <world></world>
    </main>
  `,
  styleUrls: ['app/app.css'],
  directives: [WorldCmp, SnakeCmp, FoodCmp]
})

export class AppCmp {

}

Promise.all([bootstrap(WorldCmp), bootstrap(SnakeCmp), bootstrap(FoodCmp)])
       .then(() => console.log('app boot correctly'))
       .catch((error) => console.log(`app boot error: ${error}`));
