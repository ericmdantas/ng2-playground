import {
  Component
} from 'angular2/core';

import {ContainerCmp} from './container_cmp/container_cmp.js';
import {FormCmp} from './form_cmp/form_cmp.js';
import {CmpWithOutput} from './cmp_with_output/cmp_with_output.js';
import {CmpWithInput} from './cmp_with_input/cmp_with_input.js';
import {CmpWithHttp} from './cmp_with_http/cmp_with_http.js';

@Component({
  selector: 'app-cmp',
  template: `
    <container-cmp>
      <form-cmp></form-cmp>
    </container-cmp>

    <container-cmp>
      <cmp-with-output></cmp-with-output>
    </container-cmp>

    <container-cmp>
      <cmp-with-input [inIn]="'yoYoYo'"></cmp-with-input>
    </container-cmp>

    <container-cmp>
      <cmp-with-http></cmp-with-http>
    </container-cmp>
  `,
  directives: [ContainerCmp, FormCmp, CmpWithOutput, CmpWithInput, CmpWithHttp]
})
export class AppCmp {
  name: string = 'app';
}
