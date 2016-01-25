import {
  Component,
  EventEmitter
} from 'angular2/core';

@Component({
  selector: 'local-key-listener',
  template: `
    <label>local-key-listener</label>
    <input type="text" [(ngModel)]="inp" (input)="inputHappened(inp)"/>
    <p>{{called}}</p>
  `
})
export class LocalKeyListenerCmp {
  called: string = '';

  inputHappened(inp: string) {
    this.called = 'called!'

    setTimeout(() => {
      this.called = '';
    }, 1000);
  }
}
