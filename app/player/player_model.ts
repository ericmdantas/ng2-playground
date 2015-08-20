export class PlayerModel {
  name: string = 'p';
  hp: number = 100;

  sufferHit(hit:number) {
    this.hp -= hit;

    if (this.hp < 0) {
        this.hp = 0;
    }
  }

  isAlive():boolean {
    return this.hp > 0;
  }
}
