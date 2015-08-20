export class MineFieldModel {
    hasBomb: boolean;

    constructor() {
      this.hasBomb = this._rollDiceBomb();
    }

    private _rollDiceBomb() {
      return Math.floor(Math.random() * 10) === 7;
    }
}
