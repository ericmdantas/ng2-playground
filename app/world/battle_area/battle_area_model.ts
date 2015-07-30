import {PlayerType} from '../player/player_model';
import {MonsterType} from '../monster/monster_model';

export class BattleArea {
    _players: List<PlayerType> = [];
    _monsters: List<MonsterType> = [];

    constructor() {

    }

    get players() {
        return this._players;
    }

    set players(list: List<PlayerType>) {
        this._players = list;
    }

    get monsters() {
        return this._monsters;
    }

    set monsters(list: List<MonsterType>) {
        this._monsters = list;
    }
}
