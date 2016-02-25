import {
  Component,
  Input
} from 'angular2/core';

@Component({
  selector: 'input-cmp',
  template: `
    <h1>inp - {{inp}}</h1>
  `
})

export class InputCmp {
  @Input('inp')
  inp: number;
}
