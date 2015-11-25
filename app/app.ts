import {
  Component,
  OnInit
} from 'angular2/angular2';

import {MainContainerCmp} from './main_container_cmp/main_container_cmp.js';

@Component({
  selector: 'app',
  template: `
    <main-container>
      <h1>app</h1>
    </main-container>
  `,
  directives: [MainContainerCmp]
})
export class AppCmp implements OnInit {
  onInit() {
    console.log('app init');
  }
}
