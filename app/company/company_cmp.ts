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
import {AddStuffCmp} from 'app/common/add_stuff_cmp.js';

@Component({
  selector: 'company',
  viewBindings: [CompanyModel, FormBuilder],
  lifecycle: [LifecycleEvent.onInit]
})
@View({
  templateUrl: 'app/company/company.html',
  styleUrls: ['app/company/company.css'],
  directives: [RemovableCmp, CardCmp, NgFor, formDirectives, AddStuffCmp]
})

export class CompanyCmp {
  company: CompanyModel;
  companyForm: ControlGroup;

  constructor(@Inject(CompanyModel) c: CompanyModel, @Inject(FormBuilder) fb: FormBuilder) {
    this.company = c;
    this.companyForm = fb.group({
      "name": [this.company.name, Validators.required],
      "employees": [this.company.employees]
    });
  }

  onInit() {
    console.log('company init');
  }
}

Promise.all([bootstrap(CardCmp), bootstrap(RemovableCmp), bootstrap(AddStuffCmp)])
       .then(() => console.log('company bootstraped correcly'))
       .catch((error) => console.log(`company bootstraped with error: ${error}`));
