import {
  Component,
  OnInit
} from 'angular2/angular2';

import {MainContainerCmp} from './main_container_cmp/main_container_cmp.js';
import {CustomFormCmp} from './custom_form_cmp/custom_form_cmp.js';
import {CustomHttpCmp} from './custom_http_cmp/custom_http_cmp.js';
import {CustomAnnoationCmp} from './custom_annotation_cmp/custom_annotation_cmp.js';

@Component({
  selector: 'app',
  template: `
    <main-container>
      <custom-annoation-cmp></custom-annoation-cmp>
      <custom-form-cmp [btn-name]=" 'btn!' "></custom-form-cmp>
      <custom-http-cmp></custom-http-cmp>
    </main-container>
  `,
  directives: [MainContainerCmp, CustomFormCmp, CustomHttpCmp, CustomAnnoationCmp]
})
export class AppCmp {

}
