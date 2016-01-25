import {
  Component
} from 'angular2/core';

@Component({
  selector: 'global-key-listener',
  template: `
    <label>global-key-listener</label>
    <p>{{enter}}</p>
  `,
  host: {
    '(window:keyup)': 'enterPressed($event)'
  }
})
export class GlobalKeyListener {
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
