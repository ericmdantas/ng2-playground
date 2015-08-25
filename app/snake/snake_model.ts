export class Snake {
    private _size: number = 3;
    private _color: string = 'gray';

    set size(n: number) {
      this._size = n;
    }

    get size():number {
      return this._size;
    }

    get color():string {
      return this._color;
    }

    grow():void {
      this.size++;
    }
}
