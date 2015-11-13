import {
  Component,
  Input,
  OnInit,
  EventEmitter,
  Output
} from 'angular2/angular2';

@Component({
  selector: 'in-out-cmp',
  template: `
    <button (click)="clickHandler()">go!</button>
  `
})
export class InOutCmp implements OnInit {
    @Output('out') goOut: EventEmitter = new EventEmitter();
    @Input('alo2') comeIn: string = '';

    onInit() {
      console.log('in-out-cmp init');
    }

    clickHandler() {
      this.goOut.next(`${this.comeIn}   ${Date.now()}`);
    }
}

@Component({
  selector: 'in-out-wrapper-cmp',
  template: `
    <in-out-cmp (out)="doSomething($event)" [alo2]="message"></in-out-cmp>
    <p [text-content]="r"></p>
  `,
  directives: [InOutCmp]
})
export class InOutWrapperCmp implements OnInit {
  message: string = 'hello :D';
  r: string = '';

  onInit() {
    console.log('in-out-wrapper-cmp init');
  }

  doSomething(ev) {
    this.r = ev;
  }
}
