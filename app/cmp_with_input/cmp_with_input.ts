import {
  Component,
  Input
} from 'angular2/core';

@Component({
  selector: 'cmp-with-input',
  template: `
    <p>{{inside}}</p>
  `
})
export class CmpWithInput {
  @Input('inIn') inside: string;
}
