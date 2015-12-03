import {
  Component,
  OnInit
} from 'angular2/angular2';

import {MainContainerCmp} from './main_container_cmp/main_container_cmp.js';
import {SubContainerCmp} from './sub_container_cmp/sub_container_cmp.js';
import {CustomFormCmp} from './custom_form_cmp/custom_form_cmp.js';
import {CustomHttpCmp} from './custom_http_cmp/custom_http_cmp.js';
import {CustomAnnotationCmp} from './custom_annotation_cmp/custom_annotation_cmp.js';
import {CustomAnnotationMethodCmp} from './custom_annotation_cmp/custom_annotation_method_cmp.js';
import {MainBubbleEventsCmp} from './bubble_events_cmp/bubble_events_cmp.js';
import {FormHttpCmp} from './form_http_cmp/form_http_cmp.js';
import {SimpleCmp} from './simple_directive/simple_directive.js';

@Component({
  selector: 'app',
  template: `
    <main-container>
      <sub-container-cmp>
        <main-bubble-event></main-bubble-event>
      </sub-container-cmp>

      <sub-container-cmp>
        <form-http-cmp></form-http-cmp>
      </sub-container-cmp>

      <sub-container-cmp>
        <custom-http-cmp></custom-http-cmp>
      </sub-container-cmp>

      <sub-container-cmp>
        <custom-annotation-cmp></custom-annotation-cmp>
      </sub-container-cmp>

      <sub-container-cmp>
        <custom-annotation-method-cmp></custom-annotation-method-cmp>
      </sub-container-cmp>

      <sub-container-cmp>
        <custom-form-cmp [btn-name]=" 'btn!' "></custom-form-cmp>
      </sub-container-cmp>

      <sub-container-cmp>
        <custom-http-cmp></custom-http-cmp>
      </sub-container-cmp>

      <sub-container-cmp>
        <simple-cmp></simple-cmp>
      </sub-container-cmp>

    </main-container>
  `,
  directives: [MainContainerCmp, CustomFormCmp, CustomHttpCmp,
               CustomAnnotationCmp, CustomAnnotationMethodCmp, SubContainerCmp,
               MainBubbleEventsCmp, FormHttpCmp, SimpleCmp]
})
export class AppCmp {

}
