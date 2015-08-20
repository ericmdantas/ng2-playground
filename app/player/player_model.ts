export class PlayerModel {
  name: string = 'p';
  hp: number = 100;

  isAlive():boolean {
    return this.hp > 0;
  }
  
}
