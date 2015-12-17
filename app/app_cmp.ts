import {
  Component
} from 'angular2/core';

import {ContainerCmp} from './container_cmp/container_cmp.js';
import {FormCmp} from './form_cmp/form_cmp.js';

@Component({
  selector: 'app-cmp',
  template: `
    <container-cmp>
      <form-cmp></form-cmp>
    </container-cmp>
  `,
  directives: [ContainerCmp, FormCmp]
})
export class AppCmp {
  name: string = 'app';
}
