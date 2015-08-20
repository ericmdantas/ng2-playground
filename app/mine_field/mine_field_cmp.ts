/// <reference path="../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';
import {MineFieldModel} from 'app/mine_field/./mine_field_model.js';
import {Inject} from 'angular2/di';

@Component({
  selector: 'mine-field',
  viewBindings: [MineFieldModel]
})
@View({
  templateUrl: 'app/mine_field/mine_field.html',
  styleUrls: ['app/mine_field/mine_field.css']
})

export class MineFieldCmp {
  mineField: MineFieldModel;

  constructor(@Inject(MineFieldModel) mf: MineFieldModel) {
    this.mineField = mf;
  }
}
