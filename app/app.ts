import {Component, View, OnInit} from 'angular2/angular2';
import {FormCmp} from 'app/form_cmp/form_cmp.js';
import {ContainerCmp} from 'app/container_cmp/container_cmp.js';
import {HttpCmp} from 'app/http_cmp/http_cmp.js';
import {WkCmp} from 'app/wk_cmp/wk_cmp.js';
import {CustomEECmpWrapper} from 'app/custom_ee_cmp/custom_ee_cmp.js';
import {SingletonCmp} from 'app/singleton_cmp/singleton_cmp.js';
import {ProviderCmp} from 'app/provider_cmp/provider_cmp.js';
import {PipeCmp} from 'app/pipe_cmp/pipe_cmp.js';
import {ModalWrapperCmp} from 'app/modal_cmp/modal_cmp.js';
import {InOutWrapperCmp} from 'app/in_out_cmp/in_out_cmp.js';

@Component({
  selector: 'app'
})
@View({
  template: `
    <h2 id="app-title">app</h2>

    <container-cmp [t]="'form-cmp'">
      <form-cmp></form-cmp>
    </container-cmp>

    <container-cmp [t]="'http-cmp'">
      <http-cmp></http-cmp>
    </container-cmp>

    <container-cmp [t]="'wk-cmp'">
      <wk-cmp></wk-cmp>
    </container-cmp>

    <container-cmp [t]="'custom-ee-cmp-wrapper'">
      <custom-ee-cmp-wrapper></custom-ee-cmp-wrapper>
    </container-cmp>

    <container-cmp [t]="'singleton-cmp'">
      <singleton-cmp></singleton-cmp>
    </container-cmp>

    <container-cmp [t]="'provider-cmp'">
      <provider-cmp></provider-cmp>
    </container-cmp>

    <container-cmp [t]="'pipe-cmp'">
      <pipe-cmp></pipe-cmp>
    </container-cmp>

    <container-cmp [t]="'modal-cmp'">
      <modal-wrapper-cmp></modal-wrapper-cmp>
    </container-cmp>

    <container-cmp [t]="'in-out-cmp'">
      <in-out-wrapper-cmp></in-out-wrappercmp>
    </container-cmp>
  `,
  directives: [ContainerCmp, FormCmp, HttpCmp,
               WkCmp, SingletonCmp, CustomEECmpWrapper,
               ProviderCmp, PipeCmp, ModalWrapperCmp, InOutWrapperCmp]
})
export class AppCmp implements OnInit {
  onInit() {
    console.log('app init')
  }
}
