/// <reference path="../../typings/tsd.d.ts" />

import {Component,
        View,
        LifecycleEvent,
        NgFor,
        FormBuilder,
        formDirectives,
        ControlGroup,
        Validators,
        bootstrap} from 'angular2/angular2';
        
import {Inject} from 'angular2/angular2';
import {CompanyModel} from 'app/company/company_model.js';
import {RemovableCmp} from 'app/common/removable_cmp.js';
import {CardCmp} from 'app/common/card_cmp.js';

@Component({
  selector: 'company',
  viewBindings: [CompanyModel],
  lifecycle: [LifecycleEvent.onInit]
})
@View({
  templateUrl: 'app/company/company.html',
  styleUrls: ['app/company/company.css'],
  directives: [RemovableCmp, CardCmp, NgFor]
})

export class CompanyCmp {
  company: CompanyModel;

  constructor(@Inject(CompanyModel) c: CompanyModel) {
    this.company = c;
  }

  onInit() {
    console.log('company init');
  }
}

Promise.all([bootstrap(CardCmp), bootstrap(RemovableCmp)])
       .then(() => console.log('company bootstraped correcly'))
       .catch((error) => console.log(`company bootstraped with error ${error}`));
