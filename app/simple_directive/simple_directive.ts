import {
  Directive,
  Component
} from 'angular2/core';

@Directive({
  selector: '[simpleDirective]',
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
    <button type="button" simpleDirective>abc</button>
  `,
  directives: [SimpleDirective]
})
export class SimpleCmp {

}
