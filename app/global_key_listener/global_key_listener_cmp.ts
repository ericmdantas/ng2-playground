import {
  Component
} from 'angular2/core';

@Component({
  selector: 'global-key-listener',
  template: `
    <div>
      <label>global-key-listener</label>
      <p>{{enter}}</p>
    </div>
  `,
  host: {
    '(window:keyup)': 'enterPressed($event)'
  }
})
export class GlobalKeyListenerCmp {
  enter: string;

  enterPressed(ev) {
    if (ev.which === 13) {
        this.enter = 'enter pressed';

        setTimeout(() => {
          this.enter = '';
        }, 1000);
    }
  }
}
