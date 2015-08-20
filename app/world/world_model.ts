import {PlayerModel} from 'app/player/player.js';
import {MineFieldModel} from 'app/mine_field/mine_field.js';

export class WorldModel {
  player: PlayerModel;
  mineFields: MineFieldModel[] = [];

  constructor() {
    this._multiplyFields();
  }

  private _multiplyFields() {
    for (let i = 0; i < 10; i++) {
        this.mineFields.push(new MineFieldModel());
    }
  }
}
