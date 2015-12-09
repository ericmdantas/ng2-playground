import {
  Directive,
  Component
} from 'angular2/core';

@Directive({
  selector: '[simple-directive]',
  host: {
    '(click)': 'clk()'
  }
})
export class SimpleDirective {
  clk() {
    alert('clicked');
  }
}

@Component({
  selector: 'simple-cmp',
  template: `
    <button type="button" simple-directive>abc</button>
  `,
  directives: [SimpleDirective]
})
export class SimpleCmp {

}
