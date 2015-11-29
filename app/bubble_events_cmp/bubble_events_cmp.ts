import {
  Component,
  OnInit,
  EventEmitter,
  forwardRef,
  Output
} from 'angular2/angular2';

@Component({
  selector: 'main-bubble-event',
  template: `
    <p>main-bubble-event</p>
    <sub-bubble-cmp-level-1 (ev1)="onBubbled($event)"></sub-bubble-cmp-level-1>
    <p>{{bubbled}}</p>
  `,
  directives: [forwardRef(() => SubBubbleCmpLevel1)]
})
export class MainBubbleEventsCmp {
  bubbled: string = '';

  onBubbled(ev) {
    this.bubbled = `${ev} + ${Date.now()}` ;
  }
}

@Component({
  selector: 'sub-bubble-cmp-level-1',
  template: `
  <div>
    <sub-bubble-cmp-level-2 (ev2)="onEv2($event)"></sub-bubble-cmp-level-2>
  </div>
  `,
  directives: [forwardRef(() => SubBubbleCmpLevel2)]
})
class SubBubbleCmpLevel1 {
  @Output() ev1:EventEmitter<number> = new EventEmitter();

  onEv2(ev) {
    this.ev1.next(`${ev}.1`)
  }
}

@Component({
  selector: 'sub-bubble-cmp-level-2',
  template: `
  <div>
    <sub-bubble-cmp-level-3 (ev3)="onEv3($event)"></sub-bubble-cmp-level-3>
  </div>
  `,
  directives: [forwardRef(() => SubBubbleCmpLevel3)]
})
class SubBubbleCmpLevel2 {
  @Output() ev2:EventEmitter<number> = new EventEmitter();

  onEv3(ev) {
    this.ev2.next(`${ev}.2`);
  }
}

@Component({
  selector: 'sub-bubble-cmp-level-3',
  template: `
    <button type="button" (click)="doIt()">do it</button>
  `
})
class SubBubbleCmpLevel3 {
  @Output() ev3:EventEmitter<number> = new EventEmitter();

  doIt() {
    this.ev3.next(3);
  }
}
