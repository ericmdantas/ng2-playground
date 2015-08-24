export class Snake {
    private _size: number = 3;

    set size(n: number) {
      this._size = n;
    }

    get size():number {
      return this._size;
    }

    grow():void {
      this.size++;
    }
}
