export class Snake {
    private _size: number = 3;
    private _color: string = 'gray';
    private _position: {x: number, y: number} = {x: 0, y: 0};

    set position(p: number) {
      this._position = p;
    }

    get position():number {
      return this._position;
    }

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

    move(x: number, y: number) {

    }
}
