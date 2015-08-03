import {IFight} from '../being/being';

export type MonsterType = {
    name: string;
    hp: number;
    mana: number;
}

export class MonsterModel implements IFight {
    _name: string = '_m1';
    _hp: number = 999;
    _mana: number = 999;

    constructor() {

    }

    get name() {
        return this._name;
    }

    get hp() {
        return this._hp;
    }

    set hp(hp: number) {
        this._hp = hp;
    }

    get mana() {
        return this._mana;
    }

    set mana(mana: number) {
        this._mana = mana;
    }

    attack(target): void {
        // attack
    }

    defend():number {
        // defend
        return 0;
    }

    isAlive():boolean {
        return (this.hp > 0);
    }
}
