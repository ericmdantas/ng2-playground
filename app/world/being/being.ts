export interface IFight {
    attack(target: Object): void;
    defend(): number;
    isAlive(): boolean;
}