import {
  Component,
  EventEmitter,
  Output,
  Input
} from 'angular2/core';

@Component({
  selector: 'event-emitter-on-enter2',
  template: `
    <div>
      <label>event-emitter-on-enter</label>
      <textarea style="height: 100px; width: 400px;" (keyup)="onEnterPressed($event)"></textarea>
      <p>{{status}}</p>
    </div>
  `
})
export class EventEmitterOnEnterCmp {
    @Output('myEv')
    myEv: EventEmitter<{enter: string}> = new EventEmitter();

    @Input('status')
    status: any;

    onEnterPressed(ev: KeyboardEvent) {
      if (ev.which === 13) {
        this.myEv.next({enter: 'ok'});
      }
    }
}
