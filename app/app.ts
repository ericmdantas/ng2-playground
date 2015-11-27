import {
  Component,
  OnInit
} from 'angular2/angular2';

import {MainContainerCmp} from './main_container_cmp/main_container_cmp.js';
import {CustomFormCmp} from './custom_form_cmp/custom_form_cmp.js';
import {CustomHttpCmp} from './custom_http_cmp/custom_http_cmp.js';
import {CustomAnnotationCmp} from './custom_annotation_cmp/custom_annotation_cmp.js';
import {CustomAnnotationMethodCmp} from './custom_annotation_cmp/custom_annotation_method_cmp.js';

@Component({
  selector: 'app',
  template: `
    <main-container>
      <custom-annotation-cmp></custom-annotation-cmp>
      <custom-annotation-method-cmp></custom-annotation-method-cmp>
      <custom-form-cmp [btn-name]=" 'btn!' "></custom-form-cmp>
      <custom-http-cmp></custom-http-cmp>
    </main-container>
  `,
  directives: [MainContainerCmp, CustomFormCmp, CustomHttpCmp,
               CustomAnnotationCmp, CustomAnnotationMethodCmp]
})
export class AppCmp {

}
