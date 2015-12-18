import {
  Component
} from 'angular2/core';

import {ContainerCmp} from './container_cmp/container_cmp.js';
import {FormCmp} from './form_cmp/form_cmp.js';
import {CmpWithOutput} from './cmp_with_output/cmp_with_output.js';

@Component({
  selector: 'app-cmp',
  template: `
    <container-cmp>
      <form-cmp></form-cmp>
    </container-cmp>

    <container-cmp>
      <cmp-with-output></cmp-with-output>
    </container-cmp>
  `,
  directives: [ContainerCmp, FormCmp, CmpWithOutput]
})
export class AppCmp {
  name: string = 'app';
}
