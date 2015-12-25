import {
  Component,
  Pipe
} from 'angular2/core';

@Pipe({
  name: 'myPipe'
})
class MyPipe {
  transform(value: any, args: string[]):string {
    return `${value}-${Date.now()} --- added by the pipe`;
  }
}

@Component({
  selector: 'cmp-with-custom-pipe',
  template: `
    <p>{{info | myPipe}}</p>
  `,
  pipes: [MyPipe]
})
export class CmpWithCustomPipe {
  info: string = 'my-info';
}
