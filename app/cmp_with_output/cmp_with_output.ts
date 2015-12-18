import {
  Component,
  Output,
  EventEmitter
} from 'angular2/core';

@Component({
  selector: 'inner-output-cmp',
  template: `
    <button type="button" (click)="onClickHandler()">click me</button>
  `
})
class InnerOutputCmp {
  @Output('yo') goOut: EventEmitter<any> = new EventEmitter();

  onClickHandler() {
    this.goOut.next({done: true});
  }
}

@Component({
  selector: 'cmp-with-output',
  template: `
    <div>
      <inner-output-cmp (yo)="done($event)"></inner-output-cmp>
    </div>
  `,
  directives: [InnerOutputCmp]
})
export class CmpWithOutput {
  done(ev: {done: boolean}) {
    console.log(ev);
  }
}
